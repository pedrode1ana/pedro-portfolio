import { motion } from 'motion/react';
import { X } from 'lucide-react';
import headshot from 'figma:asset/daeee9b1a3a2278714038fa993743d08aaad3362.png';

interface AboutOverlayProps {
  onClose: () => void;
}

export default function AboutOverlay({ onClose }: AboutOverlayProps) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left - Visual Card */}
          <div className="relative rounded-[24px] p-10"
            style={{
              background: 'var(--green-pitch)',
              borderBottom: '3px solid var(--brazil-yellow)'
            }}>
            {/* Decorative circles */}
            <div className="absolute top-8 right-8 w-40 h-40 rounded-full"
              style={{ border: '2px solid rgba(255, 255, 255, 0.12)' }} />
            <div className="absolute bottom-8 right-4 w-[200px] h-[200px] rounded-full"
              style={{ border: '2px solid rgba(255, 255, 255, 0.12)' }} />

            {/* Avatar */}
            <div className="relative z-10">
              <img
                src={headshot}
                alt="Pedro De Lana"
                className="rounded-full mb-6 object-cover"
                style={{
                  width: '120px',
                  height: '120px',
                  border: '3px solid rgba(255, 255, 255, 0.6)'
                }}
              />

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '24px',
                color: 'white',
                marginBottom: '8px'
              }}>
                Pedro De Lana
              </h3>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 300,
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.6,
                marginBottom: '40px'
              }}>
                Builder. Leader. Brazilian.
              </p>

              {/* Floating badge */}
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl"
                style={{
                  background: 'white',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}>
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'var(--green-pitch)' }}
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--text-dark)'
                }}>
                  FSU · Class of 2027
                </span>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              color: 'var(--green-pitch)',
              letterSpacing: '2px',
              marginBottom: '16px'
            }}>
              ABOUT ME
            </div>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '48px',
              color: 'white',
              marginBottom: '24px'
            }}>
              <span style={{ fontStyle: 'italic', color: 'var(--green-pitch)' }}>Off</span> the pitch.
            </h2>

            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: 1.8
            }}>
              <p className="mb-6">
                I'm a Computer Science student at FSU with minors in Business and Innovation. I've always lived at the intersection of how things work and why they matter.
              </p>

              <p className="mb-6">
                I define what gets built, why it matters, and how it ships. I've led product strategy on AI-powered platforms, designed full product case studies, and written working code across multiple languages and frameworks. The technology is the vehicle; the problem is what drives me.
              </p>

              <p className="mb-6">
                I co-founded ColorStack at FSU because I believe the tech industry is better when more voices are at the table. Leading that chapter is the most meaningful thing on this page.
              </p>

              <p className="mb-6">
                On weekends you'll find me on a grass pitch coaching U10 boys, or playing guitar at church. Both taught me the same thing: the best leaders create space for others to shine.
              </p>

              <p className="mb-8">
                I'm Brazilian, and I carry that with me. <span style={{ fontWeight: 500, color: 'white' }}>Jogo bonito</span> isn't just a style of football. It's a philosophy. Beautiful, expressive, disciplined. That's how I want to build.
              </p>

              <a
                href="https://www.linkedin.com/in/pedrodelana/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 rounded-full transition-all hover:scale-105"
                style={{
                  background: 'var(--green-pitch)',
                  color: 'white',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                Let's connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
