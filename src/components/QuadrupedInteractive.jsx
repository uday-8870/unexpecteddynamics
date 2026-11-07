import React, { useState } from 'react';

export default function QuadrupedInteractive() {
  const [isHovered, setIsHovered] = useState(false);
  const [action, setAction] = useState('trot');

  return (
    <div
      className={`quadruped-interactive-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'var(--surface)',
        border: isHovered ? '1.5px solid var(--accent)' : '1px solid var(--line)',
        borderRadius: '12px',
        padding: '24px',
        position: 'relative',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 16px 36px rgba(232, 71, 15, 0.16)' : '0 2px 8px rgba(0,0,0,0.04)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', paddingBottom: '10px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: isHovered ? 'var(--accent)' : 'var(--teal)',
              boxShadow: isHovered ? '0 0 10px var(--accent)' : '0 0 4px var(--teal)',
              display: 'inline-block',
              transition: 'all 0.2s ease'
            }}
          />
          <span className="mono" style={{ fontSize: '11px', fontWeight: 600, color: isHovered ? 'var(--accent)' : 'var(--ink)' }}>
            {isHovered ? 'STATUS: OBSTACLE TRACKING ACTIVE' : 'STATUS: ROUTINE PATROL'}
          </span>
        </div>
        <span className="mono" style={{ color: 'var(--muted)', fontSize: '11px' }}>
          {action.toUpperCase()}
        </span>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <svg
          viewBox="0 0 560 340"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="coneInteractive" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" style={{ stopColor: isHovered ? 'var(--accent)' : 'var(--teal)', stopOpacity: isHovered ? 0.85 : 0.45 }} />
              <stop offset="1" style={{ stopColor: isHovered ? 'var(--accent)' : 'var(--teal)', stopOpacity: 0 }} />
            </linearGradient>
          </defs>

          {/* Ground Lines */}
          <line x1="0" y1="301" x2="560" y2="301" strokeWidth="2" style={{ stroke: 'var(--ink)' }} />
          <line
            x1="0"
            y1="316"
            x2="560"
            y2="316"
            strokeWidth="2"
            strokeDasharray="14 18"
            style={{
              stroke: 'var(--muted)',
              animation: isHovered ? 'ground 0.7s linear infinite' : 'ground 1.2s linear infinite'
            }}
          />
          <line x1="0" y1="330" x2="560" y2="330" strokeWidth="2" strokeDasharray="6 26" style={{ stroke: 'var(--line)', animation: 'ground 1.8s linear infinite' }} />

          {/* Quadruped Hind Back Leg */}
          <g style={{ transformOrigin: '198px 168px', animation: action === 'crouch' || isHovered ? 'none' : 'swing 1.2s linear 0s infinite' }}>
            <line x1="198" y1="168" x2="198" y2={action === 'crouch' || isHovered ? '248' : '232'} strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
            <g style={{ transformOrigin: '198px 232px', animation: action === 'crouch' || isHovered ? 'none' : 'knee 1.2s linear 0s infinite' }}>
              <line x1="198" y1={action === 'crouch' || isHovered ? '248' : '232'} x2="198" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
              <circle cx="198" cy="304" r="8" style={{ fill: 'var(--muted)' }} />
            </g>
          </g>

          {/* Quadruped Fore Back Leg */}
          <g style={{ transformOrigin: '388px 168px', animation: action === 'crouch' || isHovered ? 'none' : 'swing 1.2s linear -0.6s infinite' }}>
            <line x1="388" y1="168" x2="388" y2={action === 'crouch' || isHovered ? '248' : '232'} strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
            <g style={{ transformOrigin: '388px 232px', animation: action === 'crouch' || isHovered ? 'none' : 'knee 1.2s linear -0.6s infinite' }}>
              <line x1="388" y1={action === 'crouch' || isHovered ? '248' : '232'} x2="388" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
              <circle cx="388" cy="304" r="8" style={{ fill: 'var(--muted)' }} />
            </g>
          </g>

          {/* Main Chassis Body */}
          <rect
            x="140"
            y={action === 'crouch' || isHovered ? '122' : '104'}
            width="270"
            height="72"
            rx="24"
            strokeWidth="3"
            style={{
              fill: 'var(--surface)',
              stroke: isHovered ? 'var(--accent)' : 'var(--ink)',
              transition: 'y 0.25s ease, stroke 0.25s ease'
            }}
          />

          <path d="M180 124h60M180 136h60M180 148h60" strokeWidth="3" strokeLinecap="round" style={{ stroke: 'var(--line)' }} />
          <circle cx="372" cy="128" r="4" style={{ fill: isHovered ? 'var(--accent)' : 'var(--teal)' }} />

          {/* Quadruped Hind Fore Leg */}
          <g style={{ transformOrigin: '182px 168px', animation: action === 'crouch' || isHovered ? 'none' : 'swing 1.2s linear -0.6s infinite' }}>
            <line x1="182" y1="168" x2="182" y2={action === 'crouch' || isHovered ? '248' : '232'} strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
            <g style={{ transformOrigin: '182px 232px', animation: action === 'crouch' || isHovered ? 'none' : 'knee 1.2s linear -0.6s infinite' }}>
              <line x1="182" y1={action === 'crouch' || isHovered ? '248' : '232'} x2="182" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <circle cx="182" cy="304" r="8" style={{ fill: 'var(--ink)' }} />
            </g>
            <circle cx="182" cy="232" r="7" style={{ fill: 'var(--accent)' }} />
          </g>

          {/* Quadruped Fore Fore Leg */}
          <g style={{ transformOrigin: '372px 168px', animation: action === 'crouch' || isHovered ? 'none' : 'swing 1.2s linear 0s infinite' }}>
            <line x1="372" y1="168" x2="372" y2={action === 'crouch' || isHovered ? '248' : '232'} strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
            <g style={{ transformOrigin: '372px 232px', animation: action === 'crouch' || isHovered ? 'none' : 'knee 1.2s linear 0s infinite' }}>
              <line x1="372" y1={action === 'crouch' || isHovered ? '248' : '232'} x2="372" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <circle cx="372" cy="304" r="8" style={{ fill: 'var(--ink)' }} />
            </g>
            <circle cx="372" cy="232" r="7" style={{ fill: 'var(--accent)' }} />
          </g>

          {/* Hip Bearings */}
          <circle cx="182" cy="168" r="10" style={{ fill: 'var(--ink)' }} />
          <circle cx="182" cy="168" r="4" style={{ fill: 'var(--accent)' }} />
          <circle cx="372" cy="168" r="10" style={{ fill: 'var(--ink)' }} />
          <circle cx="372" cy="168" r="4" style={{ fill: 'var(--accent)' }} />

          {/* Sensor Scan Cone */}
          <g style={{ transformOrigin: '296px 76px', animation: isHovered ? 'sweep 1.6s ease-in-out infinite' : 'sweep 3.4s ease-in-out infinite' }}>
            <polygon points={isHovered ? "296,76 560,0 560,190" : "296,76 556,8 556,152"} style={{ fill: 'url(#coneInteractive)' }} />
          </g>

          {/* Dorsal Turret */}
          <rect x="235" y="86" width="100" height="22" rx="6" style={{ fill: 'var(--ink)' }} />
          <circle cx="285" cy="76" r="20" strokeWidth="3" style={{ fill: 'var(--surface)', stroke: 'var(--ink)' }} />
          <circle cx="296" cy="76" r="8" style={{ fill: 'var(--ink)' }} />
          <circle cx="298" cy="74" r="2.4" style={{ fill: 'var(--accent)' }} />

          {/* LiDAR Ring */}
          <circle cx="412" cy="128" r="9" style={{ fill: 'var(--ink)' }} />
          <circle
            cx="412"
            cy="128"
            r="9"
            fill="none"
            strokeWidth="2"
            style={{
              stroke: isHovered ? 'var(--accent)' : 'var(--teal)',
              transformOrigin: '412px 128px',
              animation: isHovered ? 'ring 0.9s ease-out infinite' : 'ring 2s ease-out infinite'
            }}
          />

          <path d="M248 52l22 14" strokeWidth="1.5" style={{ stroke: 'var(--muted)' }} />
          <text x="120" y="48" style={{ font: '500 11px var(--mono)', letterSpacing: '.12em', fill: isHovered ? 'var(--accent)' : 'var(--muted)' }}>
            {isHovered ? 'LASER PROXIMITY ENGAGED' : 'THERMAL RADIOMETRY'}
          </text>
        </svg>
      </div>

      <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>STANCE:</span>
        <div style={{ display: 'flex', gap: '6px' }}>
          {[
            ['trot', 'Walking Trot'],
            ['crouch', 'Alert Crouch'],
            ['scan', 'Sector Scan']
          ].map(([a, label]) => (
            <button
              key={a}
              onClick={() => setAction(a)}
              className={`btn ${action === a ? 'primary' : ''}`}
              style={{ minHeight: '32px', padding: '0 10px', fontSize: '12px' }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
