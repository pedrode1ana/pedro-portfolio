import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Client } from '@notionhq/client';

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://pedrodelana.com',
  'https://www.pedrodelana.com',
];

function setCORSHeaders(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin ?? '';
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCORSHeaders(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required' });
  }

  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    return res.status(500).json({ error: 'Failed to save' });
  }

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [{ text: { content: String(name) } }],
        },
        Email: {
          email: String(email),
        },
        Message: {
          rich_text: [{ text: { content: String(message) } }],
        },
        Date: {
          date: { start: new Date().toISOString().split('T')[0] },
        },
        Status: {
          status: { name: 'Not started' },
        },
      },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Notion API error:', err);
    return res.status(500).json({ error: 'Failed to save' });
  }
}
