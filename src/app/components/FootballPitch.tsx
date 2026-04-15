import { motion } from 'motion/react';
import { useState } from 'react';

type ZoneType = 'work' | 'skills' | 'home' | 'about' | 'contact' | null;

interface FootballPitchProps {
  onZoneClick: (zone: ZoneType) => void;
}

export default function FootballPitch({ onZoneClick }: FootballPitchProps) {
  const [hoveredZone, setHoveredZone] = useState<ZoneType>(null);

  const zones = [
    { id: 'work', label: 'WORK', x: 48, y: 200, width: 200, height: 280 },
    { id: 'skills', label: 'SKILLS', x: 248, y: 100, width: 350, height: 480 },
    { id: 'home', label: 'HOME', x: 598, y: 290, width: 120, height: 120 },
    { id: 'about', label: 'ABOUT', x: 718, y: 100, width: 350, height: 480 },
    { id: 'contact', label: 'CONTACT', x: 1068, y: 200, width: 200, height: 280 }
  ];

  return (
    <svg
      viewBox="0 0 1316 680"
      className="w-full h-full"
      style={{ maxWidth: '1316px', maxHeight: '680px' }}
    >
      {/* Pitch Markings */}
      <g stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none">
        {/* Outer boundary */}
        <rect x="48" y="48" width="1220" height="584" />

        {/* Center circle */}
        <circle cx="658" cy="340" r="60" />

        {/* Center dot */}
        <circle cx="658" cy="340" r="3" fill="rgba(255,255,255,0.18)" />

        {/* Halfway line */}
        <line x1="658" y1="48" x2="658" y2="632" />

        {/* Left penalty box */}
        <rect x="48" y="200" width="200" height="280" />

        {/* Left goal box */}
        <rect x="48" y="270" width="80" height="140" />

        {/* Left penalty spot */}
        <circle cx="198" cy="340" r="3" fill="rgba(255,255,255,0.18)" />

        {/* Left penalty arc */}
        <path d="M 248 260 A 80 80 0 0 1 248 420" />

        {/* Right penalty box */}
        <rect x="1068" y="200" width="200" height="280" />

        {/* Right goal box */}
        <rect x="1188" y="270" width="80" height="140" />

        {/* Right penalty spot */}
        <circle cx="1118" cy="340" r="3" fill="rgba(255,255,255,0.18)" />

        {/* Right penalty arc */}
        <path d="M 1068 260 A 80 80 0 0 0 1068 420" />

        {/* Corner arcs */}
        <path d="M 48 68 A 20 20 0 0 1 68 48" />
        <path d="M 1248 48 A 20 20 0 0 1 1268 68" />
        <path d="M 1268 612 A 20 20 0 0 1 1248 632" />
        <path d="M 68 632 A 20 20 0 0 1 48 612" />
      </g>

      {/* Interactive Zones */}
      {zones.map((zone) => (
        <g key={zone.id}>
          <motion.rect
            x={zone.x}
            y={zone.y}
            width={zone.width}
            height={zone.height}
            fill={hoveredZone === zone.id ? 'rgba(76, 175, 80, 0.25)' : 'transparent'}
            stroke={hoveredZone === zone.id ? '#4CAF50' : 'transparent'}
            strokeWidth="2"
            strokeDasharray={hoveredZone === zone.id ? '4' : '0'}
            className="cursor-pointer"
            onMouseEnter={() => setHoveredZone(zone.id as ZoneType)}
            onMouseLeave={() => setHoveredZone(null)}
            onClick={() => onZoneClick(zone.id as ZoneType)}
            animate={{
              fill: hoveredZone === zone.id ? 'rgba(76, 175, 80, 0.25)' : 'transparent'
            }}
            transition={{ duration: 0.2 }}
          />

          {hoveredZone === zone.id && (
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <rect
                x={zone.x + zone.width / 2 - 50}
                y={zone.y + zone.height / 2 - 15}
                width="100"
                height="30"
                rx="15"
                fill="#4CAF50"
              />
              <text
                x={zone.x + zone.width / 2}
                y={zone.y + zone.height / 2 + 5}
                textAnchor="middle"
                fill="white"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '1.5px'
                }}
              >
                {zone.label}
              </text>
            </motion.g>
          )}
        </g>
      ))}
    </svg>
  );
}
