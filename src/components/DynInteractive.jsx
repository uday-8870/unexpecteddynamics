import React, { useState } from 'react';

export default function DynInteractive() {
  const [isHovered, setIsHovered] = useState(false);
  const [mode, setMode] = useState('greet'); // 'greet' | 'tray' | 'patrol' | 'follow'

  const modeDescriptions = {
    greet: 'Welcomes visitors, provides facility directions, and checks in guests at reception desks.',
    tray: 'Autonomous 15 kg flatbed cargo tray for carrying tools, parts, medical supplies, or documents.',
    patrol: 'Night security rounds using dual forward searchlights and 360 degree LiDAR to check doors and perimeters.',
    follow: 'Autonomous hands-free follower that locks onto an operator to transport tools through workshops and warehouses.'
  };

  return (
    <div
      className={`dyn-interactive-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'var(--surface)',
        border: isHovered ? '1.5px solid var(--teal)' : '1px solid var(--line)',
        borderRadius: '12px',
        padding: '28px',
        position: 'relative',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 16px 36px rgba(11, 127, 134, 0.16)' : '0 2px 8px rgba(0,0,0,0.04)'
      }}
    >
      {/* Status Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--line)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: isHovered ? 'var(--teal)' : 'var(--muted)',
              boxShadow: isHovered ? '0 0 10px var(--teal)' : 'none',
              transition: 'background 0.2s ease'
            }}
          />
          <span className="mono" style={{ fontSize: '11px', color: isHovered ? 'var(--teal)' : 'var(--muted)', fontWeight: 600 }}>
            {isHovered ? 'STATUS: INTERACTIVE PROXIMITY ACTIVE' : 'STATUS: AUTONOMOUS STANDBY'}
          </span>
        </div>
        <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>
          DYN MODEL 01
        </span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <svg
          viewBox="0 0 360 360"
          style={{
            width: '100%',
            maxHeight: '270px',
            display: 'block',
            margin: '0 auto',
            transform: isHovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground shadow */}
          <ellipse
            cx="180"
            cy="340"
            rx={isHovered ? '98' : '86'}
            ry="10"
            style={{
              fill: 'var(--ink)',
              opacity: isHovered ? 0.22 : 0.12,
              transition: 'all 0.3s ease'
            }}
          />

          {/* MODE 3: PATROL SEARCHLIGHT BEAM */}
          {mode === 'patrol' && (
            <g>
              <defs>
                <linearGradient id="patrolBeam" x1="0" y1="0" x2="0.6" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points="180,120 40,335 150,335" fill="url(#patrolBeam)" />
              <polygon points="180,120 320,335 210,335" fill="url(#patrolBeam)" />
              {/* Rotating lidar scan line on top */}
              <circle cx="180" cy="40" r="45" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4">
                <animateTransform attributeName="transform" type="rotate" from="0 180 40" to="360 180 40" dur="4s" repeatCount="indefinite" />
              </circle>
            </g>
          )}

          {/* MODE 4: FOLLOW ME UWB PULSE RINGS */}
          {mode === 'follow' && (
            <g>
              <circle cx="180" cy="35" r="25" fill="none" stroke="var(--teal)" strokeWidth="2" opacity="0.8">
                <animate attributeName="r" values="10;55;85" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0.3;0" dur="2s" repeatCount="indefinite" />
              </circle>
              {/* Forward Tether Line */}
              <line x1="220" y1="120" x2="340" y2="80" stroke="var(--teal)" strokeWidth="2" strokeDasharray="6 6" />
              <circle cx="340" cy="80" r="5" fill="var(--teal)" />
              <text x="310" y="65" fill="var(--teal)" fontSize="10" fontWeight="bold" fontFamily="monospace">OPERATOR LOCK</text>
            </g>
          )}

          <g className={isHovered ? 'dyn-excited-float' : 'dyn-normal-float'}>
            {/* Wheels */}
            <circle cx="138" cy="300" r="24" style={{ fill: 'var(--ink)' }} />
            <g style={{ transformOrigin: '138px 300px', animation: isHovered ? 'spin 0.8s linear infinite' : 'spin 2.6s linear infinite' }}>
              <path d="M138 284v32M122 300h32" strokeWidth="3.5" strokeLinecap="round" style={{ stroke: isHovered ? 'var(--accent)' : 'var(--teal)' }} />
            </g>
            <circle cx="222" cy="300" r="24" style={{ fill: 'var(--ink)' }} />
            <g style={{ transformOrigin: '222px 300px', animation: isHovered ? 'spin 0.8s linear infinite' : 'spin 2.6s linear infinite' }}>
              <path d="M222 284v32M206 300h32" strokeWidth="3.5" strokeLinecap="round" style={{ stroke: isHovered ? 'var(--accent)' : 'var(--teal)' }} />
            </g>

            {/* Torso */}
            <rect
              x="104"
              y="176"
              width="152"
              height="116"
              rx="44"
              strokeWidth="3"
              style={{
                fill: 'var(--surface)',
                stroke: isHovered ? 'var(--teal)' : 'var(--ink)',
                transition: 'stroke 0.25s ease'
              }}
            />

            {/* MODE 2: TRAY CARGO FLATBED */}
            {mode === 'tray' && (
              <g>
                <rect x="55" y="218" width="250" height="12" rx="4" fill="var(--ink)" />
                <rect x="140" y="190" width="80" height="28" rx="4" fill="var(--accent)" />
                <rect x="146" y="196" width="68" height="16" rx="2" fill="none" stroke="var(--on-accent)" strokeWidth="1" strokeDasharray="3 3" />
                <text x="180" y="208" fill="var(--on-accent)" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">15 KG CARGO</text>
              </g>
            )}

            {/* Chest Badge / Mode Display */}
            <circle cx="180" cy="226" r={isHovered ? '11' : '8'} style={{ fill: isHovered ? 'var(--accent)' : 'var(--teal)', transition: 'all 0.2s ease' }} />
            <path d="M150 256h60M158 266h44" strokeWidth="3" strokeLinecap="round" style={{ stroke: 'var(--line)' }} />

            {/* MODE 1: GREET - ARMS WAVE UP */}
            {mode === 'greet' && (
              <g>
                {/* Left Arm waving up */}
                <g style={{ transformOrigin: '104px 200px', animation: isHovered ? 'wob 0.6s ease-in-out infinite' : 'wob 1.8s ease-in-out infinite' }}>
                  <path d="M104 200 Q70 170 65 140" fill="none" strokeWidth="8" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
                  <circle cx="65" cy="140" r="8" style={{ fill: 'var(--teal)' }} />
                </g>
                {/* Right Arm waving up */}
                <g style={{ transformOrigin: '256px 200px', animation: isHovered ? 'wave 0.6s ease-in-out infinite' : 'wave 1.8s ease-in-out infinite' }}>
                  <path d="M256 200 Q290 170 295 140" fill="none" strokeWidth="8" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
                  <circle cx="295" cy="140" r="8" style={{ fill: 'var(--accent)' }} />
                </g>
              </g>
            )}

            {/* MODE 2: TRAY - ARMS TUCKED IN */}
            {mode === 'tray' && (
              <g>
                <path d="M104 210 L92 245 L108 245" fill="none" strokeWidth="7" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
                <path d="M256 210 L268 245 L252 245" fill="none" strokeWidth="7" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              </g>
            )}

            {/* MODE 3: PATROL - ARMS CARRY SENSORS */}
            {mode === 'patrol' && (
              <g>
                <path d="M104 214 Q80 230 76 260" fill="none" strokeWidth="8" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
                <circle cx="76" cy="260" r="9" style={{ fill: 'var(--accent)' }} />
                <path d="M256 214 Q280 230 284 260" fill="none" strokeWidth="8" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
                <circle cx="284" cy="260" r="9" style={{ fill: 'var(--accent)' }} />
              </g>
            )}

            {/* MODE 4: FOLLOW - ARMS REACH FORWARD */}
            {mode === 'follow' && (
              <g>
                <path d="M104 214 Q85 210 75 230" fill="none" strokeWidth="8" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
                <circle cx="75" cy="230" r="8" style={{ fill: 'var(--teal)' }} />
                <path d="M256 214 Q285 200 300 190" fill="none" strokeWidth="8" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
                <circle cx="300" cy="190" r="8" style={{ fill: 'var(--teal)' }} />
              </g>
            )}

            {/* Antenna Mast */}
            <g style={{ transformOrigin: '180px 74px', animation: isHovered ? 'wob 0.5s ease-in-out infinite' : 'wob 2.4s ease-in-out infinite' }}>
              <line x1="180" y1="74" x2="180" y2={mode === 'patrol' || mode === 'follow' ? '28' : '44'} strokeWidth="4" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <circle cx="180" cy={mode === 'patrol' || mode === 'follow' ? '24' : '38'} r={isHovered ? '10' : '8'} style={{ fill: isHovered ? 'var(--accent)' : 'var(--teal)', transition: 'all 0.2s ease' }} />
            </g>

            {/* Articulated Head and Visor */}
            <g style={{ transformOrigin: '180px 166px', animation: mode === 'follow' ? 'tilt 1.2s ease-in-out infinite' : isHovered ? 'tilt 1.8s ease-in-out infinite' : 'tilt 5s ease-in-out infinite' }}>
              <rect x="104" y="104" width="10" height="32" rx="5" style={{ fill: 'var(--teal)' }} />
              <rect x="246" y="104" width="10" height="32" rx="5" style={{ fill: 'var(--teal)' }} />
              <rect x="114" y="74" width="132" height="92" rx="38" strokeWidth="3" style={{ fill: 'var(--surface)', stroke: 'var(--ink)' }} />
              <rect x="130" y="90" width="100" height="60" rx="26" style={{ fill: '#030712' }} />

              {/* Visor Display by Mode */}
              {mode === 'greet' && (
                <>
                  <path d="M150 120 Q160 108 170 120" fill="none" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" />
                  <path d="M190 120 Q200 108 210 120" fill="none" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" />
                </>
              )}

              {mode === 'tray' && (
                <>
                  <ellipse cx="160" cy="120" rx="10" ry="10" style={{ fill: 'var(--teal)' }} />
                  <ellipse cx="200" cy="120" rx="10" ry="10" style={{ fill: 'var(--teal)' }} />
                  <circle cx="162" cy="120" r="3" fill="#ffffff" />
                  <circle cx="202" cy="120" r="3" fill="#ffffff" />
                </>
              )}

              {mode === 'patrol' && (
                <>
                  <rect x="145" y="112" width="70" height="14" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2" />
                  <line x1="180" y1="108" x2="180" y2="130" stroke="var(--accent)" strokeWidth="2" />
                </>
              )}

              {mode === 'follow' && (
                <>
                  <circle cx="160" cy="116" r="8" fill="var(--teal)" />
                  <circle cx="200" cy="116" r="8" fill="var(--teal)" />
                  <line x1="168" y1="116" x2="192" y2="116" stroke="var(--teal)" strokeWidth="2" strokeDasharray="2 2" />
                </>
              )}
            </g>
          </g>
        </svg>
      </div>

      {/* Mode Switcher Buttons */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>SELECT DUTY:</span>
          <span className="mono" style={{ fontSize: '11px', color: 'var(--teal)', fontWeight: 600 }}>DYN MODEL 01</span>
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {[
            ['greet', 'Greeting Mode'],
            ['tray', 'Cargo Tray'],
            ['patrol', 'Searchlight Patrol'],
            ['follow', 'Follow Me']
          ].map(([m, label]) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`btn ${mode === m ? 'primary' : ''}`}
              style={{
                minHeight: '34px',
                padding: '0 12px',
                fontSize: '12px',
                background: mode === m ? 'var(--teal)' : 'transparent',
                borderColor: mode === m ? 'var(--teal)' : 'var(--line)',
                color: mode === m ? '#fff' : 'var(--ink)'
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.5, minHeight: '42px', margin: 0 }}>
          {modeDescriptions[mode]}
        </p>
      </div>
    </div>
  );
}
