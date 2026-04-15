import { motion } from 'motion/react';
import { useState } from 'react';

type PinType = 'work' | 'skills' | 'home' | 'about' | 'contact' | 'leadership' | null;

interface FormationPinsProps {
  onPinClick: (pin: PinType) => void;
}

interface Pin {
  id: PinType;
  number: string;
  label: string;
  x: number;
  y: number;
}

export default function FormationPins({ onPinClick }: FormationPinsProps) {
  const [hoveredPin, setHoveredPin] = useState<PinType>(null);

  // Formation: 2-3-1-2 simplified
  // Top 2: WORK (left) · CONTACT (right)
  // Middle 3: SKILLS (left) · HOME (center) · LEADERSHIP (right)
  // Bottom 2: ABOUT (left-center) · (empty right-center)
  const pins: Pin[] = [
    // Top 2
    { id: 'work', number: '10', label: 'WORK', x: 420, y: 120 },
    { id: 'contact', number: '7', label: 'CONTACT', x: 900, y: 120 },

    // Middle 3
    { id: 'skills', number: '8', label: 'SKILLS', x: 320, y: 280 },
    { id: 'home', number: '9', label: 'HOME', x: 658, y: 280 },
    { id: 'leadership', number: '11', label: 'LEADERSHIP', x: 1000, y: 280 },

    // Bottom 2
    { id: 'about', number: '5', label: 'ABOUT', x: 550, y: 480 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 1316 640"
        className="w-full h-full absolute"
        style={{ maxWidth: '1316px', maxHeight: '640px' }}
      >
        <defs>
          <style>{`
            @keyframes pulse {
              0% {
                transform: scale(1);
                opacity: 0.35;
              }
              100% {
                transform: scale(1.6);
                opacity: 0;
              }
            }
            .pulse-ring {
              animation: pulse 2s ease-out infinite;
            }
            .pulse-ring-delayed {
              animation: pulse 2s ease-out infinite;
              animation-delay: 1s;
            }
          `}</style>
        </defs>

        {pins.map((pin) => (
          <g key={pin.id}>
            {/* Outer pulse rings */}
            <circle
              cx={pin.x}
              cy={pin.y}
              r="24"
              fill="none"
              stroke="rgba(76, 175, 80, 0.35)"
              strokeWidth="1.5"
              className="pulse-ring"
            />
            <circle
              cx={pin.x}
              cy={pin.y}
              r="24"
              fill="none"
              stroke="rgba(76, 175, 80, 0.35)"
              strokeWidth="1.5"
              className="pulse-ring-delayed"
            />

            {/* Inner pin circle */}
            <motion.circle
              cx={pin.x}
              cy={pin.y}
              r="18"
              fill={hoveredPin === pin.id ? 'var(--brazil-yellow)' : 'var(--green-pitch)'}
              stroke={hoveredPin === pin.id ? 'rgba(255, 215, 0, 0.4)' : 'rgba(255, 255, 255, 0.25)'}
              strokeWidth="2"
              className="cursor-pointer"
              style={{
                filter: hoveredPin === pin.id
                  ? 'drop-shadow(0 4px 24px rgba(255, 215, 0, 0.35))'
                  : 'drop-shadow(0 4px 16px rgba(76, 175, 80, 0.4))'
              }}
              onMouseEnter={() => setHoveredPin(pin.id)}
              onMouseLeave={() => setHoveredPin(null)}
              onClick={() => {
                onPinClick(pin.id);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            />

            {/* Jersey number */}
            <text
              x={pin.x}
              y={pin.y + 6}
              textAnchor="middle"
              fill="white"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                fontWeight: 400,
                pointerEvents: 'none',
                userSelect: 'none'
              }}
            >
              {pin.number}
            </text>

            {/* Hover label */}
            {hoveredPin === pin.id && (
              <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <rect
                  x={pin.x - 50}
                  y={pin.y - 50}
                  width="100"
                  height="28"
                  rx="14"
                  fill="white"
                  style={{
                    filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))'
                  }}
                />
                <text
                  x={pin.x}
                  y={pin.y - 32}
                  textAnchor="middle"
                  fill="var(--text-dark)"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '1.5px'
                  }}
                >
                  {pin.label}
                </text>
              </motion.g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
