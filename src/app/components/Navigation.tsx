interface NavigationProps {
  onContactClick: () => void;
  onWorkClick: () => void;
  onSkillsClick: () => void;
  onAboutClick: () => void;
  onLeadershipClick: () => void;
  onHomeClick: () => void;
}

export default function Navigation({ onContactClick, onWorkClick, onSkillsClick, onAboutClick, onLeadershipClick, onHomeClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[60px] z-50 flex items-center justify-between px-12"
      style={{
        background: 'rgba(10, 26, 11, 0.82)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(76, 175, 80, 0.15)'
      }}>
      <button
        onClick={onHomeClick}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.85)'
        }}>
        P<span style={{ color: 'var(--green-pitch)' }}>.</span>DeLana
      </button>

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

      <button
        onClick={onContactClick}
        className="px-5 py-2 rounded-full transition-all hover:scale-105"
        style={{
          background: 'var(--green-pitch)',
          color: 'var(--white)',
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 500
        }}>
        Contact
      </button>
    </nav>
  );
}
