import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface LeadershipOverlayProps {
  onClose: () => void;
}

const leadershipCards = [
  {
    tag: 'CO-FOUNDER · VP',
    tagBg: '#1565C0',
    tagColor: '#FFFFFF',
    title: 'Bridging the gap.',
    body: 'Built FSU\'s ColorStack chapter from zero, creating infrastructure to connect underrepresented CS students to real careers in tech. Leading cross-functional operations, budgeting, event strategy, and university partnerships. The national mission made local and personal.'
  },
  {
    tag: 'HEAD OF OUTREACH',
    tagBg: '#FFD700',
    tagColor: '#0A1A0B',
    title: 'Building community.',
    body: 'Designed outreach campaigns that grew membership by 40+ students. Managed 5+ concurrent initiatives using impact vs. feasibility prioritization frameworks. Representing a community I\'m proud to be part of.'
  },
  {
    tag: 'U10 COACH · VOLUNTEER',
    tagBg: '#4CAF50',
    tagColor: '#FFFFFF',
    title: 'Guiding the next generation.',
    body: 'Volunteer coach for boys U10 soccer. At the end of the day, we are all children at heart. Leadership is creating a structure that lets people be expressive and free within it.'
  }
];

export default function LeadershipOverlay({ onClose }: LeadershipOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-0 z-40 overflow-y-auto"
      style={{
        background: 'var(--overlay-bg)',
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
          LEADERSHIP
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '48px',
          color: 'white',
          marginBottom: '24px'
        }}>
          How I <span style={{ fontStyle: 'italic', color: 'var(--green-pitch)' }}>lead.</span>
        </h2>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.7)',
          lineHeight: 1.6,
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          Leadership is structured freedom — a formation that gives each player room to express themselves.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipCards.map((card, index) => (
            <motion.div
              key={index}
              className="rounded-[20px] p-7"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(76, 175, 80, 0.15)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="inline-block px-3 py-1.5 rounded-full mb-5"
                style={{
                  background: card.tagBg,
                  color: card.tagColor,
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '1.5px'
                }}>
                {card.tag}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                color: 'white',
                marginBottom: '12px'
              }}>
                {card.title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 300,
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: 1.7
              }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
