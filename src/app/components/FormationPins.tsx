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

  // Horizontal pitch: left = defense, right = attack
  //
  //      4 (x≈320, y≈165)              11 (x≈940, y≈165)
  // 2 (x≈140, y≈315)       8 (x≈640, y≈315)
  //      5 (x≈320, y≈470)                        10 (x≈1140, y≈430)
  const pins: Pin[] = [
    { id: 'home',       number: '2',  label: 'HOME',       x: 140,  y: 315 },
    { id: 'leadership', number: '4',  label: 'LEADERSHIP', x: 330,  y: 165 },
    { id: 'about',      number: '5',  label: 'ABOUT',      x: 330,  y: 470 },
    { id: 'skills',     number: '8',  label: 'SKILLS',     x: 640,  y: 315 },
    { id: 'contact',    number: '11', label: 'CONTACT',    x: 940,  y: 165 },
    { id: 'work',       number: '10', label: 'WORK',       x: 1140, y: 430 },
  ];

  // Hit area dimensions: extends upward to cover the label tooltip above the circle
  const HIT_W = 120;
  const HIT_H = 96; // covers from label top (≈ y-54) down to circle bottom (≈ y+20)

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
              0%   { transform: scale(1);   opacity: 0.35; }
              100% { transform: scale(1.6); opacity: 0; }
            }
            .pulse-ring         { animation: pulse 2s ease-out infinite; }
            .pulse-ring-delayed { animation: pulse 2s ease-out infinite; animation-delay: 1s; }
          `}</style>
        </defs>

        {pins.map((pin) => {
          const hovered = hoveredPin === pin.id;
          return (
            <g key={pin.id}>
              {/* Pulse rings — no pointer events */}
              <circle
                cx={pin.x} cy={pin.y} r="24"
                fill="none"
                stroke="rgba(76, 175, 80, 0.35)"
                strokeWidth="1.5"
                className="pulse-ring"
                style={{ pointerEvents: 'none' }}
              />
              <circle
                cx={pin.x} cy={pin.y} r="24"
                fill="none"
                stroke="rgba(76, 175, 80, 0.35)"
                strokeWidth="1.5"
                className="pulse-ring-delayed"
                style={{ pointerEvents: 'none' }}
              />

              {/* Inner pin circle — visual only, no pointer events */}
              <motion.circle
                cx={pin.x} cy={pin.y} r="18"
                fill={hovered ? 'var(--brazil-yellow)' : 'var(--green-pitch)'}
                stroke={hovered ? 'rgba(255, 215, 0, 0.4)' : 'rgba(255, 255, 255, 0.25)'}
                strokeWidth="2"
                animate={{ scale: hovered ? 1.1 : 1 }}
                transition={{ duration: 0.15 }}
                style={{
                  pointerEvents: 'none',
                  filter: hovered
                    ? 'drop-shadow(0 4px 24px rgba(255, 215, 0, 0.35))'
                    : 'drop-shadow(0 4px 16px rgba(76, 175, 80, 0.4))'
                }}
              />

              {/* Jersey number — no pointer events */}
              <text
                x={pin.x} y={pin.y + 6}
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

              {/* Hover label — above the pin, no pointer events */}
              {hovered && (
                <motion.g
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ pointerEvents: 'none' }}
                >
                  <rect
                    x={pin.x - 50} y={pin.y - 50}
                    width="100" height="28" rx="14"
                    fill="white"
                    style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))' }}
                  />
                  <text
                    x={pin.x} y={pin.y - 32}
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

              {/* ── Transparent hit area ──────────────────────────────────────
                  Rendered last (= on top in SVG), so it captures ALL pointer
                  events. Everything above has pointerEvents: none so this rect
                  is the sole source of hover / click events.
                  Height covers the label tooltip above the circle too.       */}
              <rect
                x={pin.x - HIT_W / 2}
                y={pin.y - HIT_H + 22}   /* top edge sits above the label */
                width={HIT_W}
                height={HIT_H}
                fill="transparent"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredPin(pin.id)}
                onMouseLeave={() => setHoveredPin(null)}
                onClick={() => onPinClick(pin.id)}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
