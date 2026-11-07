import React, { useState } from 'react';

export default function QuadrupedInteractive() {
  const [isHovered, setIsHovered] = useState(false);
  const [action, setAction] = useState('trot'); // 'trot' | 'crouch' | 'scan'

  const descriptions = {
    trot: 'Dynamic 12-DOF trotting gait traversing loose 15 cm switchyard ballast gravel and cable trenches at 1.2 meters per second.',
    crouch: 'Lowers ground clearance to 28 cm, reducing center of gravity for steep incline traction and crawling beneath energized 400kV busbars.',
    scan: 'Pivots dorsal multi-spectral turret across a 140 degree sector arc, projecting 3D LiDAR pulses and radiometric thermal imaging to detect hotspots.'
  };

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
      {/* Top Status Bar */}
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
            {action === 'trot' && (isHovered ? 'STATUS: FAST TROT (1.8 M/S)' : 'STATUS: ROUTINE PATROL')}
            {action === 'crouch' && (isHovered ? 'STATUS: GROUND HAZARD INSPECTION' : 'STATUS: LOW PROFILE CROUCH')}
            {action === 'scan' && (isHovered ? 'STATUS: TARGET LOCK // BUSHING PHASE B' : 'STATUS: 140° SECTOR SURVEY')}
          </span>
        </div>
        <span className="mono" style={{ color: 'var(--muted)', fontSize: '11px' }}>
          {action === 'trot' && '12-DOF WALKING TROT'}
          {action === 'crouch' && '28 CM LOW CLEARANCE'}
          {action === 'scan' && '360° MULTI-SPECTRAL SWEEP'}
        </span>
      </div>

      {/* Interactive SVG Display */}
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
            <linearGradient id="coneTrot" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" style={{ stopColor: isHovered ? 'var(--accent)' : 'var(--teal)', stopOpacity: isHovered ? 0.85 : 0.45 }} />
              <stop offset="1" style={{ stopColor: isHovered ? 'var(--accent)' : 'var(--teal)', stopOpacity: 0 }} />
            </linearGradient>

            <linearGradient id="crouchBeam" x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity={isHovered ? 0.75 : 0.45} />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>

            <radialGradient id="scanPulseRadar">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.6" />
              <stop offset="60%" stopColor="var(--teal)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
            </radialGradient>
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
              animation: action === 'trot' ? (isHovered ? 'ground 0.7s linear infinite' : 'ground 1.2s linear infinite') : 'none'
            }}
          />
          <line
            x1="0"
            y1="330"
            x2="560"
            y2="330"
            strokeWidth="2"
            strokeDasharray="6 26"
            style={{
              stroke: 'var(--line)',
              animation: action === 'trot' ? 'ground 1.8s linear infinite' : 'none'
            }}
          />

          {/* ============================================================== */}
          {/* MODE 2: CROUCH VISUALS (Down-projected Inspection Lights)       */}
          {/* ============================================================== */}
          {action === 'crouch' && (
            <g>
              <polygon points="390,200 320,301 490,301" fill="url(#crouchBeam)" />
              <line x1="320" y1="301" x2="490" y2="301" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" />
              <text x="405" y="294" fill="var(--accent)" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                GROUND CLEARANCE 28 CM // STRAP NOMINAL
              </text>
            </g>
          )}

          {/* ============================================================== */}
          {/* MODE 3: SECTOR SCAN VISUALS (140° Multi-Range Radar Arc)       */}
          {/* ============================================================== */}
          {action === 'scan' && (
            <g>
              {/* Radar range rings */}
              <circle cx="296" cy="68" r="70" fill="none" stroke="var(--teal)" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
              <circle cx="296" cy="68" r="130" fill="none" stroke="var(--teal)" strokeWidth="1" opacity="0.3" strokeDasharray="6 6" />
              <circle cx="296" cy="68" r="200" fill="none" stroke="var(--teal)" strokeWidth="1" opacity="0.2" />

              {/* Wide Rotating Sweeping Radar Cone */}
              <g style={{ transformOrigin: '296px 68px' }}>
                <polygon points="296,68 560,0 560,180" fill="url(#scanPulseRadar)">
                  <animateTransform attributeName="transform" type="rotate" values="-15 296 68; 35 296 68; -15 296 68" dur="3s" repeatCount="indefinite" />
                </polygon>
              </g>

              {/* Target Anomaly Marker */}
              <g>
                <circle cx="490" cy="85" r={isHovered ? 14 : 10} fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="3 3">
                  <animate attributeName="r" values="8;16;8" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="490" cy="85" r="3" fill="var(--accent)" />
                <line x1="470" y1="85" x2="510" y2="85" stroke="var(--accent)" strokeWidth="1" />
                <line x1="490" y1="65" x2="490" y2="105" stroke="var(--accent)" strokeWidth="1" />
                <rect x="420" y="44" width="130" height="18" rx="3" fill="var(--accent)" opacity="0.9" />
                <text x="485" y="56" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  TARGET: T-02 HOTSPOT
                </text>
              </g>
            </g>
          )}

          {/* ============================================================== */}
          {/* MODE 1: TROT SCAN CONE                                         */}
          {/* ============================================================== */}
          {action === 'trot' && (
            <g style={{ transformOrigin: '296px 76px', animation: isHovered ? 'sweep 1.6s ease-in-out infinite' : 'sweep 3.4s ease-in-out infinite' }}>
              <polygon points={isHovered ? "296,76 560,0 560,190" : "296,76 556,8 556,152"} style={{ fill: 'url(#coneTrot)' }} />
            </g>
          )}

          {/* ============================================================== */}
          {/* QUADRUPED LEGS & CHASSIS (Rendered according to active stance) */}
          {/* ============================================================== */}

          {/* --- STANCE: TROT (Active Walking Gait) --- */}
          {action === 'trot' && (
            <g>
              {/* Hind Back Leg */}
              <g style={{ transformOrigin: '198px 168px', animation: isHovered ? 'swing 0.75s linear 0s infinite' : 'swing 1.2s linear 0s infinite' }}>
                <line x1="198" y1="168" x2="198" y2="232" strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
                <g style={{ transformOrigin: '198px 232px', animation: isHovered ? 'knee 0.75s linear 0s infinite' : 'knee 1.2s linear 0s infinite' }}>
                  <line x1="198" y1="232" x2="198" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
                  <circle cx="198" cy="304" r="8" style={{ fill: 'var(--muted)' }} />
                </g>
              </g>

              {/* Fore Back Leg */}
              <g style={{ transformOrigin: '388px 168px', animation: isHovered ? 'swing 0.75s linear -0.37s infinite' : 'swing 1.2s linear -0.6s infinite' }}>
                <line x1="388" y1="168" x2="388" y2="232" strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
                <g style={{ transformOrigin: '388px 232px', animation: isHovered ? 'knee 0.75s linear -0.37s infinite' : 'knee 1.2s linear -0.6s infinite' }}>
                  <line x1="388" y1="232" x2="388" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
                  <circle cx="388" cy="304" r="8" style={{ fill: 'var(--muted)' }} />
                </g>
              </g>

              {/* Main Chassis Body (Trot Height y=104) */}
              <rect x="140" y="104" width="270" height="72" rx="24" strokeWidth="3" style={{ fill: 'var(--surface)', stroke: isHovered ? 'var(--accent)' : 'var(--ink)', transition: 'stroke 0.25s ease' }} />
              <path d="M180 124h60M180 136h60M180 148h60" strokeWidth="3" strokeLinecap="round" style={{ stroke: 'var(--line)' }} />
              <circle cx="372" cy="128" r="4" style={{ fill: isHovered ? 'var(--accent)' : 'var(--teal)' }} />

              {/* Hind Fore Leg */}
              <g style={{ transformOrigin: '182px 168px', animation: isHovered ? 'swing 0.75s linear -0.37s infinite' : 'swing 1.2s linear -0.6s infinite' }}>
                <line x1="182" y1="168" x2="182" y2="232" strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
                <g style={{ transformOrigin: '182px 232px', animation: isHovered ? 'knee 0.75s linear -0.37s infinite' : 'knee 1.2s linear -0.6s infinite' }}>
                  <line x1="182" y1="232" x2="182" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
                  <circle cx="182" cy="304" r="8" style={{ fill: 'var(--ink)' }} />
                </g>
                <circle cx="182" cy="232" r="7" style={{ fill: 'var(--accent)' }} />
              </g>

              {/* Fore Fore Leg */}
              <g style={{ transformOrigin: '372px 168px', animation: isHovered ? 'swing 0.75s linear 0s infinite' : 'swing 1.2s linear 0s infinite' }}>
                <line x1="372" y1="168" x2="372" y2="232" strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
                <g style={{ transformOrigin: '372px 232px', animation: isHovered ? 'knee 0.75s linear 0s infinite' : 'knee 1.2s linear 0s infinite' }}>
                  <line x1="372" y1="232" x2="372" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
                  <circle cx="372" cy="304" r="8" style={{ fill: 'var(--ink)' }} />
                </g>
                <circle cx="372" cy="232" r="7" style={{ fill: 'var(--accent)' }} />
              </g>

              {/* Hip Bearings */}
              <circle cx="182" cy="168" r="10" style={{ fill: 'var(--ink)' }} />
              <circle cx="182" cy="168" r="4" style={{ fill: 'var(--accent)' }} />
              <circle cx="372" cy="168" r="10" style={{ fill: 'var(--ink)' }} />
              <circle cx="372" cy="168" r="4" style={{ fill: 'var(--accent)' }} />

              {/* Dorsal Turret at Nominal Trot */}
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
            </g>
          )}

          {/* --- STANCE: CROUCH (Deep Flexed Knees, Low Center of Gravity) --- */}
          {action === 'crouch' && (
            <g>
              {/* Hind Back Leg (Deep Crouch) */}
              <line x1="198" y1="200" x2="155" y2="254" strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
              <line x1="155" y1="254" x2="198" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
              <circle cx="198" cy="304" r="8" style={{ fill: 'var(--muted)' }} />

              {/* Fore Back Leg (Deep Crouch) */}
              <line x1="388" y1="200" x2="425" y2="254" strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
              <line x1="425" y1="254" x2="388" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
              <circle cx="388" cy="304" r="8" style={{ fill: 'var(--muted)' }} />

              {/* Main Chassis Body (Lowered to y=136) */}
              <rect x="140" y="136" width="270" height="72" rx="24" strokeWidth="3" style={{ fill: 'var(--surface)', stroke: 'var(--accent)' }} />
              <path d="M180 156h60M180 168h60M180 180h60" strokeWidth="3" strokeLinecap="round" style={{ stroke: 'var(--line)' }} />
              <circle cx="372" cy="160" r="4" style={{ fill: 'var(--accent)' }} />

              {/* Hind Fore Leg (Deep Crouch) */}
              <line x1="182" y1="200" x2="140" y2="254" strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <line x1="140" y1="254" x2="182" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <circle cx="182" cy="304" r="8" style={{ fill: 'var(--ink)' }} />
              <circle cx="140" cy="254" r="7" style={{ fill: 'var(--accent)' }} />

              {/* Fore Fore Leg (Deep Crouch) */}
              <line x1="372" y1="200" x2="410" y2="254" strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <line x1="410" y1="254" x2="372" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <circle cx="372" cy="304" r="8" style={{ fill: 'var(--ink)' }} />
              <circle cx="410" cy="254" r="7" style={{ fill: 'var(--accent)' }} />

              {/* Hip Bearings */}
              <circle cx="182" cy="200" r="10" style={{ fill: 'var(--ink)' }} />
              <circle cx="182" cy="200" r="4" style={{ fill: 'var(--accent)' }} />
              <circle cx="372" cy="200" r="10" style={{ fill: 'var(--ink)' }} />
              <circle cx="372" cy="200" r="4" style={{ fill: 'var(--accent)' }} />

              {/* Dorsal Turret Lowered */}
              <rect x="235" y="118" width="100" height="22" rx="6" style={{ fill: 'var(--ink)' }} />
              <circle cx="285" cy="108" r="20" strokeWidth="3" style={{ fill: 'var(--surface)', stroke: 'var(--ink)' }} />
              <circle cx="296" cy="108" r="8" style={{ fill: 'var(--ink)' }} />
              <circle cx="298" cy="106" r="2.4" style={{ fill: 'var(--accent)' }} />

              {/* LiDAR Ring in Crouch */}
              <circle cx="412" cy="160" r="9" style={{ fill: 'var(--ink)' }} />
              <circle cx="412" cy="160" r="9" fill="none" strokeWidth="2" style={{ stroke: 'var(--accent)' }} />
            </g>
          )}

          {/* --- STANCE: SCAN (Tall Elevated Platform, Wide Braced Tripod Legs) --- */}
          {action === 'scan' && (
            <g>
              {/* Hind Back Leg (Braced Outward) */}
              <line x1="198" y1="160" x2="175" y2="230" strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
              <line x1="175" y1="230" x2="160" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
              <circle cx="160" cy="304" r="8" style={{ fill: 'var(--muted)' }} />

              {/* Fore Back Leg (Braced Forward) */}
              <line x1="388" y1="160" x2="410" y2="230" strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
              <line x1="410" y1="230" x2="425" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--muted)' }} />
              <circle cx="425" cy="304" r="8" style={{ fill: 'var(--muted)' }} />

              {/* Main Chassis Body (Elevated Survey Height y=96) */}
              <rect x="140" y="96" width="270" height="72" rx="24" strokeWidth="3" style={{ fill: 'var(--surface)', stroke: 'var(--teal)' }} />
              <path d="M180 116h60M180 128h60M180 140h60" strokeWidth="3" strokeLinecap="round" style={{ stroke: 'var(--line)' }} />
              <circle cx="372" cy="120" r="4" style={{ fill: 'var(--teal)' }} />

              {/* Hind Fore Leg (Braced Outward) */}
              <line x1="182" y1="160" x2="158" y2="230" strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <line x1="158" y1="230" x2="142" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <circle cx="142" cy="304" r="8" style={{ fill: 'var(--ink)' }} />
              <circle cx="158" cy="230" r="7" style={{ fill: 'var(--teal)' }} />

              {/* Fore Fore Leg (Braced Forward) */}
              <line x1="372" y1="160" x2="395" y2="230" strokeWidth="12" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <line x1="395" y1="230" x2="412" y2="304" strokeWidth="9" strokeLinecap="round" style={{ stroke: 'var(--ink)' }} />
              <circle cx="412" cy="304" r="8" style={{ fill: 'var(--ink)' }} />
              <circle cx="395" cy="230" r="7" style={{ fill: 'var(--teal)' }} />

              {/* Hip Bearings */}
              <circle cx="182" cy="160" r="10" style={{ fill: 'var(--ink)' }} />
              <circle cx="182" cy="160" r="4" style={{ fill: 'var(--teal)' }} />
              <circle cx="372" cy="160" r="10" style={{ fill: 'var(--ink)' }} />
              <circle cx="372" cy="160" r="4" style={{ fill: 'var(--teal)' }} />

              {/* Elevated Rotating Dorsal Turret with Rotating Mast */}
              <rect x="235" y="78" width="100" height="22" rx="6" style={{ fill: 'var(--ink)' }} />
              <circle cx="285" cy="68" r="20" strokeWidth="3" style={{ fill: 'var(--surface)', stroke: 'var(--ink)' }} />
              <circle cx="296" cy="68" r="8" style={{ fill: 'var(--teal)' }} />
              <circle cx="298" cy="66" r="3" style={{ fill: 'var(--accent)' }} />

              {/* Active LiDAR Pulse Wave */}
              <circle cx="412" cy="120" r="9" style={{ fill: 'var(--ink)' }} />
              <circle cx="412" cy="120" r="9" fill="none" strokeWidth="2" style={{ stroke: 'var(--teal)', transformOrigin: '412px 120px', animation: 'ring 1.2s ease-out infinite' }} />
            </g>
          )}

          {/* Telemetry Annotation Label */}
          <text x="120" y="44" style={{ font: '500 11px var(--mono)', letterSpacing: '.12em', fill: isHovered ? 'var(--accent)' : 'var(--muted)' }}>
            {action === 'trot' && (isHovered ? 'TRACKING PROXIMITY ENGAGED' : 'RADIOMETRIC THERMAL PATROL')}
            {action === 'crouch' && 'LOW CLEARANCE GROUND TELEMETRY'}
            {action === 'scan' && '3D LIDAR POINT CLOUD CLUSTERING'}
          </text>
        </svg>
      </div>

      {/* Stance Selector Buttons */}
      <div style={{ marginTop: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>SELECT STANCE:</span>
          <span className="mono" style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 600 }}>INSPECTOR 12-DOF</span>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {[
            ['trot', 'Walking Trot'],
            ['crouch', 'Alert Crouch'],
            ['scan', 'Sector Scan']
          ].map(([a, label]) => {
            const isActive = action === a;
            return (
              <button
                key={a}
                onClick={() => setAction(a)}
                className={`btn ${isActive ? 'primary' : ''}`}
                style={{
                  minHeight: '34px',
                  padding: '0 14px',
                  fontSize: '12px',
                  background: isActive ? 'var(--accent)' : 'transparent',
                  borderColor: isActive ? 'var(--accent)' : 'var(--line)',
                  color: isActive ? '#fff' : 'var(--ink)'
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Stance Description */}
        <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.5, minHeight: '42px', margin: '0 0 14px 0' }}>
          {descriptions[action]}
        </p>

        {/* Live Stance Telemetry Matrix */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', borderTop: '1px solid var(--line)', paddingTop: '12px', fontSize: '12px' }}>
          <div>
            <span style={{ color: 'var(--muted)', display: 'block', fontSize: '10px' }}>VELOCITY</span>
            <span className="mono" style={{ fontWeight: 600, color: action === 'trot' ? 'var(--teal)' : 'var(--ink)' }}>
              {action === 'trot' ? (isHovered ? '1.8 m/s' : '1.2 m/s') : '0.0 m/s'}
            </span>
          </div>
          <div>
            <span style={{ color: 'var(--muted)', display: 'block', fontSize: '10px' }}>CLEARANCE</span>
            <span className="mono" style={{ fontWeight: 600, color: action === 'crouch' ? 'var(--accent)' : 'var(--ink)' }}>
              {action === 'crouch' ? '28 cm' : action === 'scan' ? '64 cm' : '52 cm'}
            </span>
          </div>
          <div>
            <span style={{ color: 'var(--muted)', display: 'block', fontSize: '10px' }}>SENSOR FOCUS</span>
            <span className="mono" style={{ fontWeight: 600, color: action === 'scan' ? 'var(--accent)' : 'var(--teal)' }}>
              {action === 'trot' ? 'Thermal FLIR' : action === 'crouch' ? 'Ground Cables' : '3D LiDAR Sweep'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
