import React, { useState } from 'react';

export default function MedicalInteractive() {
  const [isHovered, setIsHovered] = useState(false);
  const [mode, setMode] = useState('pharmacy'); // 'pharmacy' | 'specimen' | 'uvc' | 'vitals'

  const modeDescriptions = {
    pharmacy: 'Secure RFID and PIN locked drawers carrying scheduled medications from central pharmacy to nursing stations.',
    specimen: 'Temperature-stabilized transport for blood vials, biopsy samples, and pathology specimens between wards and labs.',
    uvc: 'Autonomous UV-C ultraviolet disinfection for operation theatres, trauma rooms, and isolation units between procedures.',
    vitals: 'Telepresence cart with vital sign sensor integration, facilitating remote specialist rounds and patient monitoring.'
  };

  return (
    <div
      className={`medical-interactive-card ${isHovered ? 'hovered' : ''}`}
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
      {/* Header status indicator */}
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
              transition: 'all 0.2s ease'
            }}
          />
          <span className="mono" style={{ fontSize: '11px', color: isHovered ? 'var(--teal)' : 'var(--muted)', fontWeight: 600 }}>
            {isHovered ? 'CLINICAL PROXIMITY ACTIVE' : 'HOSPITAL CORRIDOR PATROL'}
          </span>
        </div>
        <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>
          CURA MODEL 01
        </span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <svg
          viewBox="0 0 340 380"
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
            cx="170"
            cy="355"
            rx={isHovered ? '85' : '72'}
            ry="9"
            style={{
              fill: 'var(--ink)',
              opacity: isHovered ? 0.22 : 0.12,
              transition: 'all 0.3s ease'
            }}
          />

          {/* UV-C Glow Radius when in UVC mode */}
          {mode === 'uvc' && (
            <g>
              <circle cx="170" cy="200" r={isHovered ? '135' : '120'} fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6">
                <animateTransform attributeName="transform" type="rotate" from="0 170 200" to="360 170 200" dur="8s" repeatCount="indefinite" />
              </circle>
              <circle cx="170" cy="200" r="95" fill="none" stroke="var(--teal)" strokeWidth="1" opacity="0.4" />
            </g>
          )}

          {/* Omni-Directional Wheel Base */}
          <rect x="110" y="325" width="120" height="24" rx="12" fill="var(--ink)" />
          <circle cx="135" cy="337" r="11" fill="var(--surface)" stroke="var(--line)" strokeWidth="2" />
          <circle cx="205" cy="337" r="11" fill="var(--surface)" stroke="var(--line)" strokeWidth="2" />
          <line x1="120" y1="344" x2="220" y2="344" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />

          {/* Sterile Tower Chassis */}
          <rect
            x="120"
            y="130"
            width="100"
            height="195"
            rx="20"
            fill="var(--surface)"
            stroke={isHovered ? 'var(--teal)' : 'var(--ink)'}
            strokeWidth="3"
            style={{ transition: 'stroke 0.25s ease' }}
          />

          {/* Compartment 1: Upper Secure Drawer */}
          <rect x="132" y="145" width="76" height="42" rx="6" fill={mode === 'pharmacy' ? 'var(--bg2)' : 'var(--surface)'} stroke="var(--line)" strokeWidth="1.5" />
          <line x1="145" y1="166" x2="195" y2="166" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="170" cy="155" r="3" fill={mode === 'pharmacy' ? 'var(--accent)' : 'var(--muted)'} />

          {/* Compartment 2: Lower Insulated Cargo Bay */}
          <rect x="132" y="196" width="76" height="58" rx="6" fill={mode === 'specimen' ? 'var(--bg2)' : 'var(--surface)'} stroke="var(--line)" strokeWidth="1.5" />
          <line x1="145" y1="225" x2="195" y2="225" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
          {mode === 'specimen' && (
            <text x="170" y="244" fill="var(--teal)" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">4°C COOL</text>
          )}

          {/* Status Display Strip */}
          <rect x="132" y="264" width="76" height="20" rx="4" fill="#030712" />
          <circle cx="145" cy="274" r="3" fill="var(--teal)" />
          <text x="176" y="278" fill="var(--teal)" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            {isHovered ? 'ENGAGED' : 'READY'}
          </text>

          {/* Neck mount */}
          <rect x="156" y="104" width="28" height="28" rx="6" fill="var(--ink)" />

          {/* Friendly Medical Visor Head */}
          <g style={{ transformOrigin: '170px 100px', animation: isHovered ? 'tilt 2s ease-in-out infinite' : 'none' }}>
            <rect x="122" y="55" width="96" height="56" rx="24" fill="var(--surface)" stroke="var(--ink)" strokeWidth="3" />
            <rect x="134" y="66" width="72" height="34" rx="14" fill="#030712" />

            {/* Digital Medical Eyes */}
            {isHovered ? (
              <>
                <circle cx="154" cy="83" r="7" fill="var(--teal)" />
                <circle cx="186" cy="83" r="7" fill="var(--teal)" />
                <circle cx="156" cy="81" r="2.5" fill="#ffffff" />
                <circle cx="188" cy="81" r="2.5" fill="#ffffff" />
              </>
            ) : (
              <>
                <ellipse cx="154" cy="83" rx="6" ry="8" fill="var(--teal)" />
                <ellipse cx="186" cy="83" rx="6" ry="8" fill="var(--teal)" />
              </>
            )}

            {/* Top 360 Degree LiDAR Dome */}
            <rect x="158" y="38" width="24" height="18" rx="6" fill="var(--ink)" />
            <circle cx="170" cy="40" r="5" fill={isHovered ? 'var(--accent)' : 'var(--teal)'} />
          </g>
        </svg>
      </div>

      {/* Mode Switcher Buttons */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>CLINICAL CAPABILITY:</span>
          <span className="mono" style={{ fontSize: '11px', color: 'var(--teal)', fontWeight: 600 }}>CURA SERIES</span>
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {[
            ['pharmacy', 'Medication Delivery'],
            ['specimen', 'Lab Specimens'],
            ['uvc', 'UV-C Sterilization'],
            ['vitals', 'Telepresence Cart']
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
