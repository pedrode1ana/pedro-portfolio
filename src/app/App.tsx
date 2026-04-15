import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import FootballPitch from './components/FootballPitch';
import FormationPins from './components/FormationPins';
import WorkOverlay from './components/WorkOverlay';
import SkillsOverlay from './components/SkillsOverlay';
import AboutOverlay from './components/AboutOverlay';
import ContactOverlay from './components/ContactOverlay';
import LeadershipOverlay from './components/LeadershipOverlay';

type OverlayType = 'work' | 'skills' | 'about' | 'contact' | 'leadership' | null;

export default function App() {
  const [activeOverlay, setActiveOverlay] = useState<OverlayType>(null);

  const handleZoneClick = (zone: OverlayType) => {
    if (zone === 'home') {
      setActiveOverlay(null);
    } else {
      setActiveOverlay(zone);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <Navigation
        onContactClick={() => setActiveOverlay('contact')}
        onWorkClick={() => setActiveOverlay('work')}
        onSkillsClick={() => setActiveOverlay('skills')}
        onLeadershipClick={() => setActiveOverlay('leadership')}
        onAboutClick={() => setActiveOverlay('about')}
        onHomeClick={() => setActiveOverlay(null)}
      />

      {/* Hero Section */}
      <div
        className="relative min-h-screen flex flex-col items-center justify-center px-12 pt-[60px]"
        style={{
          background: '#1a2e1a',
          backgroundImage: 'repeating-linear-gradient(90deg, #1a2e1a 0px, #1a2e1a 80px, #1f351f 80px, #1f351f 160px)'
        }}
      >
        {/* Hero Text - Only show when no overlay is active */}
        <AnimatePresence>
          {!activeOverlay && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative z-10 text-center mb-16 max-w-4xl"
            >
              {/* Eyebrow Pill */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
                style={{
                  background: 'var(--green-pitch)',
                  color: 'white',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '1.5px'
                }}
              >
                BUILDER · LEADER · COMMUNITY
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  letterSpacing: '-2px',
                  lineHeight: 1,
                  color: 'white',
                  marginBottom: '16px'
                }}
              >
                Pedro De Lana<br />
                <span style={{ fontStyle: 'italic', color: 'var(--green-pitch)' }}>I build expressive products</span><br />
                <span style={{ fontStyle: 'italic', color: 'var(--green-pitch)' }}>and lead with purposeful freedom.</span>
              </motion.h1>

              {/* Closing line */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '18px',
                  color: 'rgba(255, 255, 255, 0.45)',
                  letterSpacing: '0.5px',
                  marginBottom: '24px'
                }}
              >
                on and off the pitch.
              </motion.p>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '18px',
                  fontWeight: 300,
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '32px',
                  maxWidth: '700px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              >
                CS student. Product builder. People leader. FSU, wherever the game takes me.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="flex items-center justify-center gap-4"
              >
                <button
                  onClick={() => setActiveOverlay('work')}
                  className="px-8 py-3.5 rounded-full transition-all hover:scale-105"
                  style={{
                    background: 'var(--green-pitch)',
                    color: 'white',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  See my work
                </button>

                <button
                  onClick={() => setActiveOverlay('about')}
                  className="px-8 py-3.5 rounded-full transition-all hover:scale-105"
                  style={{
                    background: 'transparent',
                    border: '1.5px solid rgba(129, 199, 132, 0.4)',
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  My story
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Formation subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activeOverlay ? 0 : 1 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-4"
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.45)',
            letterSpacing: '0.5px'
          }}
        >
          Select your position
        </motion.div>

        {/* Football Pitch with Formation Pins - faded when overlay is active */}
        <motion.div
          className="relative max-w-6xl w-full"
          animate={{ opacity: activeOverlay ? 0.3 : 1 }}
          transition={{ duration: 0.35 }}
        >
          <FootballPitch onZoneClick={() => {}} />
          <div className="absolute inset-0">
            <FormationPins onPinClick={handleZoneClick} />
          </div>
        </motion.div>

        {/* Stats Bar */}
        <div
          className="absolute bottom-0 left-0 right-0 py-7 px-12"
          style={{ background: 'var(--green-pitch)' }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-20 flex-wrap">
            {[
              { value: '3.5', label: 'GPA at FSU' },
              { value: '5', label: 'Products built' },
              { value: '1', label: 'Chapter co-founded' },
              { value: '∞', label: 'Drive' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '36px',
                  color: 'white',
                  marginBottom: '4px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.8)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlays */}
      <AnimatePresence>
        {activeOverlay === 'work' && <WorkOverlay onClose={() => setActiveOverlay(null)} />}
        {activeOverlay === 'skills' && <SkillsOverlay onClose={() => setActiveOverlay(null)} />}
        {activeOverlay === 'about' && <AboutOverlay onClose={() => setActiveOverlay(null)} />}
        {activeOverlay === 'contact' && <ContactOverlay onClose={() => setActiveOverlay(null)} />}
        {activeOverlay === 'leadership' && <LeadershipOverlay onClose={() => setActiveOverlay(null)} />}
      </AnimatePresence>
    </div>
  );
}