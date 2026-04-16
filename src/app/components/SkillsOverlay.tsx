import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface SkillsOverlayProps {
  onClose: () => void;
}

const aiSkills = [
  { name: 'AI-Assisted Development', icon: '🤖', level: 'Advanced', percentage: 88 },
  { name: 'Prompt Engineering', icon: '✨', level: 'Advanced', percentage: 85 },
  { name: 'Claude / Amazon Bedrock', icon: '🧠', level: 'Intermediate', percentage: 75 },
  { name: 'ChatGPT / Copilot / Gemini', icon: '💡', level: 'Intermediate', percentage: 70 }
];

const coreSkills = [
  { name: 'C++ / C# / Python', icon: '💻', level: 'Advanced', percentage: 85 },
  { name: 'HTML / CSS / JavaScript', icon: '🌐', level: 'Advanced', percentage: 82 },
  { name: 'AWS (Lambda, DynamoDB, Textract)', icon: '☁️', level: 'Intermediate', percentage: 70 },
  { name: 'Figma / Product Design', icon: '🎨', level: 'Intermediate', percentage: 75 },
  { name: '.NET MAUI', icon: '📱', level: 'Intermediate', percentage: 68 },
  { name: 'SQL / Data Analysis', icon: '📊', level: 'Intermediate', percentage: 65 },
  { name: 'Git / GitHub', icon: '🐙', level: 'Advanced', percentage: 80 },
  { name: 'Jira / Agile Workflows', icon: '📈', level: 'Intermediate', percentage: 70 }
];

export default function SkillsOverlay({ onClose }: SkillsOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-0 z-40 overflow-y-auto"
      style={{
        background: 'rgba(10, 26, 11, 0.96)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <button
        onClick={onClose}
        className="fixed top-8 right-8 text-4xl transition-colors z-50"
        style={{ color: 'rgba(255, 255, 255, 0.4)' }}
      >
        <X size={32} className="hover:text-[#4CAF50]" />
      </button>

      <div className="px-4 md:px-12 pt-20 pb-12 md:py-24 max-w-7xl mx-auto">
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          fontWeight: 500,
          color: 'var(--green-pitch)',
          letterSpacing: '2px',
          marginBottom: '16px'
        }}>
          CAPABILITIES
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '48px',
          color: 'white',
          marginBottom: '16px'
        }}>
          My <span style={{ fontStyle: 'italic', color: 'var(--green-pitch)' }}>formation.</span>
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
          fontWeight: 300,
          color: 'rgba(255, 255, 255, 0.55)',
          marginBottom: '48px'
        }}>
          The toolkit I bring to every product, team, and problem.
        </p>

        {/* AI & Emerging Tools Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1" style={{ background: 'rgba(129, 199, 132, 0.2)' }} />
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              color: '#81C784',
              letterSpacing: '2px'
            }}>
              AI & EMERGING TOOLS
            </div>
            <div className="h-px flex-1" style={{ background: 'rgba(129, 199, 132, 0.2)' }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aiSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="rounded-[14px] p-5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(76, 175, 80, 0.15)'
              }}
              whileHover={{
                borderColor: '#4CAF50',
                boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)'
              }}
            >
              <div className="text-xl mb-3">{skill.icon}</div>

              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 500,
                color: 'white',
                marginBottom: '4px'
              }}>
                {skill.name}
              </div>

              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 300,
                color: 'rgba(255, 255, 255, 0.45)',
                marginBottom: '12px'
              }}>
                {skill.level}
              </div>

              <div className="w-full h-[3px] rounded-full overflow-hidden"
                style={{ background: 'rgba(255, 255, 255, 0.08)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'var(--brazil-yellow)' }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
            ))}
          </div>
        </div>

        {/* Engineering & Craft Section */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1" style={{ background: 'rgba(129, 199, 132, 0.2)' }} />
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              color: '#81C784',
              letterSpacing: '2px'
            }}>
              ENGINEERING & CRAFT
            </div>
            <div className="h-px flex-1" style={{ background: 'rgba(129, 199, 132, 0.2)' }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="rounded-[14px] p-5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(76, 175, 80, 0.15)'
                }}
                whileHover={{
                  borderColor: '#4CAF50',
                  boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)'
                }}
              >
                <div className="text-xl mb-3">{skill.icon}</div>

                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'white',
                  marginBottom: '4px'
                }}>
                  {skill.name}
                </div>

                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 300,
                  color: 'rgba(255, 255, 255, 0.45)',
                  marginBottom: '12px'
                }}>
                  {skill.level}
                </div>

                <div className="w-full h-[3px] rounded-full overflow-hidden"
                  style={{ background: 'rgba(255, 255, 255, 0.08)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'var(--green-pitch)' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 0.8, delay: (aiSkills.length + index) * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
