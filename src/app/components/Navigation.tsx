import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onContactClick: () => void;
  onWorkClick: () => void;
  onSkillsClick: () => void;
  onAboutClick: () => void;
  onLeadershipClick: () => void;
  onHomeClick: () => void;
}

export default function Navigation({ onContactClick, onWorkClick, onSkillsClick, onAboutClick, onLeadershipClick, onHomeClick }: NavigationProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinkStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: '15px',
    color: 'rgba(255, 255, 255, 0.7)'
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-[60px] z-50 flex items-center justify-between px-4 md:px-12"
        style={{
          background: 'rgba(10, 26, 11, 0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(76, 175, 80, 0.15)'
        }}>
        <button
          onClick={() => { onHomeClick(); closeMenu(); }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.85)'
          }}>
          P<span style={{ color: 'var(--green-pitch)' }}>.</span>DeLana
        </button>

        {!isMobile && (
          <div className="flex items-center gap-9" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.55)'
          }}>
            <button onClick={onWorkClick} className="hover:text-[#81C784] transition-colors">Work</button>
            <button onClick={onSkillsClick} className="hover:text-[#81C784] transition-colors">Skills</button>
            <button onClick={onLeadershipClick} className="hover:text-[#81C784] transition-colors">Leadership</button>
            <button onClick={onAboutClick} className="hover:text-[#81C784] transition-colors">About</button>
          </div>
        )}

        <div className="flex items-center gap-3">
          {!isMobile && (
            <button
              onClick={onContactClick}
              className="px-5 py-2 rounded-full transition-all hover:scale-105"
              style={{
                background: 'var(--green-pitch)',
                color: 'white',
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500
              }}>
              Contact
            </button>
          )}

          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: 'rgba(255, 255, 255, 0.75)' }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div
          className="fixed top-[60px] left-0 right-0 z-50 flex flex-col py-4"
          style={{
            background: 'rgba(10, 26, 11, 0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(76, 175, 80, 0.15)'
          }}
        >
          {[
            { label: 'Work', action: onWorkClick },
            { label: 'Skills', action: onSkillsClick },
            { label: 'Leadership', action: onLeadershipClick },
            { label: 'About', action: onAboutClick },
            { label: 'Contact', action: onContactClick },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={() => { action(); closeMenu(); }}
              className="text-left px-6 py-3.5 hover:bg-white/5 transition-colors"
              style={navLinkStyle}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
