import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { IncomingMessage, ServerResponse } from 'http'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function localApiPlugin(env: Record<string, string>) {
  return {
    name: 'local-api',
    configureServer(server: { middlewares: { use: (path: string, fn: (req: IncomingMessage, res: ServerResponse, next: () => void) => void) => void } }) {
      server.middlewares.use('/api/contact', (req, res, next) => {
        if (req.method !== 'POST') return next()

        let body = ''
        req.on('data', (chunk: Buffer) => { body += chunk.toString() })
        req.on('end', async () => {
          try {
            const { name, email, message } = JSON.parse(body)

            if (!name || !email || !message) {
              res.writeHead(400, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: 'name, email, and message are required' }))
              return
            }

            const { Client } = await import('@notionhq/client')
            const notion = new Client({ auth: env.NOTION_TOKEN })

            await notion.pages.create({
              parent: { database_id: env.NOTION_DATABASE_ID },
              properties: {
                Name:    { title:     [{ text: { content: String(name) } }] },
                Email:   { email:     String(email) },
                Message: { rich_text: [{ text: { content: String(message) } }] },
                Date:    { date:      { start: new Date().toISOString().split('T')[0] } },
                Status:  { status:    { name: 'Not started' } },
              },
            })

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ success: true }))
          } catch (err) {
            console.error('[api/contact] error:', err)
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Failed to save' }))
          }
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  // Load all env vars (no prefix filter) so NOTION_* vars are available server-side
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      figmaAssetResolver(),
      localApiPlugin(env),
      // The React and Tailwind plugins are both required for Make, even if
      // Tailwind is not being actively used – do not remove them
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        // Alias @ to the src directory
        '@': path.resolve(__dirname, './src'),
      },
    },

    // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
    assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})
