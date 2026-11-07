import React, { useState } from 'react';

export default function DynInteractive() {
  const [isHovered, setIsHovered] = useState(false);
  const [mode, setMode] = useState('greet'); // 'greet' | 'tray' | 'patrol' | 'follow'

  const modeDescriptions = {
    greet: 'Welcomes visitors, answers basic queries, and guides guests in offices & clinics.',
    tray: 'Autonomous 15 kg payload tray for running tools, medicines, or retail items.',
    patrol: 'Quiet scheduled rounds checking door locks, light statuses, and ambient air sensors.',
    follow: 'Autonomous hands-free follower for workshop technicians and warehouse staff.'
  };

  return (
    <div
      className={`dyn-interactive-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderRadius: '12px',
        padding: '28px',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: isHovered ? '0 16px 36px rgba(11, 127, 134, 0.18)' : '0 4px 12px rgba(0,0,0,0.04)'
      }}
    >
      {/* Speech bubble reactive on hover */}
      <div
        className="dyn-speech-bubble"
        style={{
          position: 'absolute',
          top: '16px',
          right: '20px',
          background: 'var(--bg)',
          border: '1.5px solid var(--teal)',
          borderRadius: '12px',
          padding: '8px 14px',
          fontSize: '12px',
          color: 'var(--ink)',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          opacity: isHovered ? 1 : 0.85,
          transform: isHovered ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
          transition: 'all 0.25s ease'
        }}
      >
        {isHovered ? '✨ "Hello friend! How can I help today?"' : '👋 "Hover or tap to interact!"'}
      </div>

      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <svg
          viewBox="0 0 360 360"
          style={{
            width: '100%',
            maxHeight: '260px',
            transform: isHovered ? 'scale(1.04) translateY(-4px)' : 'scale(1)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground shadow */}
          <ellipse
            cx="180"
            cy="340"
            rx={isHovered ? '95' : '86'}
            ry="10"
            style={{
              fill: 'var(--ink)',
              opacity: isHovered ? 0.22 : 0.14,
              transition: 'all 0.3s ease'
            }}
          />

          <g className={isHovered ? 'dyn-excited-float' : 'dyn-normal-float'}>
            {/* Wheels */}
            <circle cx="138" cy="300" r="24" style={{ fill: 'var(--ink)' }} />
            <g style={{ transformOrigin: '138px 300px', animation: isHovered ? 'spin 0.8s linear infinite' : 'spin 2.2s linear infinite' }}>
              <path d="M138 284v32M122 300h32" strokeWidth="3" strokeLinecap="round" style={{ stroke: 'var(--teal)' }} />
            </g>
            <circle cx="222" cy="300" r="24" style={{ fill: 'var(--ink)' }} />
            <g style={{ transformOrigin: '222px 300px', animation: isHovered ? 'spin 0.8s linear infinite' : 'spin 2.2s linear infinite' }}>
              <path d="M222 284v32M206 300h32" strokeWidth="3" strokeLinecap="round" style={{ stroke: 'var(--teal)' }} />
            </g>

            {/* Main Round Friendly Torso */}
            <rect x="104" y="176" width="152" height="116" rx="44" strokeWidth="3" style={{ fill: 'var(--surface)', stroke: 'var(--ink)' }} />

            {/* Carrying Tray (Shown in 'tray' mode or hover) */}
            {mode === 'tray' && (
              <g style={{ transition: 'all 0.3s ease' }}>
                <rect x="70" y="220" width="220" height="10" rx="4" fill="var(--ink)" />
                <rect x="150" y="200" width="60" height="20" rx="4" fill="var(--accent)" />
                <text x="180" y="214" fill="var(--on-accent)" fontSize="10" fontWeight="bold" textAnchor="middle">15 KG</text>
              </g>
            )}

            {/* Chest Heartbeat / Task Badge */}
            <circle cx="180" cy="226" r={isHovered ? '11' : '9'} style={{ fill: isHovered ? 'var(--accent)' : 'var(--teal)', transition: 'all 0.2s ease' }} />
            <path d="M150 256h60M158 266h44" strokeWidth="3" strokeLinecap="round" style={{ stroke: 'var(--line)' }} />

            {/* Left Arm */}
            <g style={{ transformOrigin: '104px 214px', animation: isHovered ? 'wob 0.8s ease-in-out infinite' : 'none' }}>
              <path d="M104 214q-26 8-30 34" fill="none" strokeWidth="8" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <circle cx="74" cy="252" r="8" style={{ fill: 'var(--accent)' }} />
            </g>

            {/* Right Arm (Waves energetically on hover) */}
            <g style={{ transformOrigin: '256px 212px', animation: isHovered ? 'wave 0.7s ease-in-out infinite' : 'wave 2.2s ease-in-out infinite' }}>
              <path d="M256 212q30-4 40-34" fill="none" strokeWidth="8" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <circle cx="296" cy="176" r="8" style={{ fill: 'var(--accent)' }} />
            </g>

            {/* Antenna with reactive waggle */}
            <g style={{ transformOrigin: '180px 74px', animation: isHovered ? 'wob 0.6s ease-in-out infinite' : 'wob 2.4s ease-in-out infinite' }}>
              <line x1="180" y1="74" x2="180" y2="46" strokeWidth="4" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <circle cx="180" cy="40" r={isHovered ? '10' : '8'} style={{ fill: isHovered ? 'var(--teal)' : 'var(--accent)', transition: 'all 0.2s ease' }} />
            </g>

            {/* Articulated Head & Digital Visor */}
            <g style={{ transformOrigin: '180px 166px', animation: isHovered ? 'tilt 1.8s ease-in-out infinite' : 'tilt 5s ease-in-out infinite' }}>
              <rect x="104" y="104" width="10" height="32" rx="5" style={{ fill: 'var(--teal)' }} />
              <rect x="246" y="104" width="10" height="32" rx="5" style={{ fill: 'var(--teal)' }} />
              <rect x="114" y="74" width="132" height="92" rx="38" strokeWidth="3" style={{ fill: 'var(--surface)', stroke: 'var(--ink)' }} />
              <rect x="130" y="90" width="100" height="60" rx="26" style={{ fill: 'var(--ink)' }} />

              {/* Eyes: Happy crescent arcs on hover, friendly ellipses normally */}
              {isHovered ? (
                <>
                  <path d="M152 122 Q160 110 168 122" fill="none" stroke="var(--teal)" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M192 122 Q200 110 208 122" fill="none" stroke="var(--teal)" strokeWidth="4.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <ellipse cx="160" cy="120" rx="9" ry="12" style={{ fill: 'var(--teal)', transformOrigin: '160px 120px', animation: 'blink 4.5s infinite' }} />
                  <ellipse cx="200" cy="120" rx="9" ry="12" style={{ fill: 'var(--teal)', transformOrigin: '200px 120px', animation: 'blink 4.5s infinite' }} />
                </>
              )}
            </g>
          </g>
        </svg>
      </div>

      {/* Everyday Task Mode Selector */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>SELECT EVERYDAY DUTY:</span>
          <span className="mono" style={{ fontSize: '11px', color: 'var(--teal)', fontWeight: 700 }}>DYN-01 ACTIVE</span>
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
          {[
            ['greet', '👋 Greeter'],
            ['tray', '📦 Courier Tray'],
            ['patrol', '🔍 Room Patrol'],
            ['follow', '🚶 Follow-Me']
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
        <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.5, minHeight: '38px' }}>
          {modeDescriptions[mode]}
        </p>
      </div>
    </div>
  );
}
