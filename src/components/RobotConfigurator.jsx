import React, { useState } from 'react';

export default function RobotConfigurator() {
  const [purpose, setPurpose] = useState('workshop'); // 'workshop' | 'store' | 'clinic' | 'industrial'
  const [chassis, setChassis] = useState('wheeled'); // 'wheeled' | 'legged'
  const [payload, setPayload] = useState('tray'); // 'tray' | 'vision' | 'arm'

  const purposes = [
    { id: 'workshop', name: '🔧 Workshop & Maker Assistant', desc: 'Runs parts between workbenches, fetches tools, and monitors CNC/3D print jobs.' },
    { id: 'store', name: '👋 Retail & Office Greeter', desc: 'Welcomes guests, guides visitors to desks, and performs nightly indoor inventory checks.' },
    { id: 'clinic', name: '🏥 Clinic & Hospital Cart Runner', desc: 'Transports medicines, files, and sample vials quietly down corridors without fatigue.' },
    { id: 'industrial', name: '⚡ High-Voltage Industrial Inspector', desc: 'Conducts autonomous walkdowns across 220kV–765kV switchyards and coastal refineries.' }
  ];

  const chassisTypes = [
    { id: 'wheeled', name: 'Wheeled Differential Drive', terrain: 'Indoor floors, tiles, ramps, low thresholds', speed: 'Up to 1.8 m/s', priceAdd: 0 },
    { id: 'legged', name: '12-DOF Legged Quadruped', terrain: 'Loose gravel, steps, curbs, cable gutters', speed: 'Up to 1.2 m/s', priceAdd: 60000 }
  ];

  const payloads = [
    { id: 'tray', name: '📦 15kg Cargo Tray & Bin', desc: 'Lockable flatbed for tools, parts, medicine boxes, or documents.', priceAdd: 8000 },
    { id: 'vision', name: '👁 Depth AI & LiDAR Rig', desc: 'Autonomous indoor obstacle avoidance, person-following, and gauge OCR.', priceAdd: 18000 },
    { id: 'arm', name: '🦾 Lightweight Gripper Arm', desc: 'Picks up small tools, pushes buttons, and opens light lever doors.', priceAdd: 24000 }
  ];

  // Dynamic calculation
  const baseCost = purpose === 'industrial' ? 180000 : 42000;
  const currentChassis = chassisTypes.find(c => c.id === chassis);
  const currentPayload = payloads.find(p => p.id === payload);
  const totalCost = baseCost + (currentChassis ? currentChassis.priceAdd : 0) + (currentPayload ? currentPayload.priceAdd : 0);

  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '12px', padding: '32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(300px, 1fr)', gap: '32px' }}>
        <div>
          {/* Step 1: Purpose */}
          <div style={{ marginBottom: '24px' }}>
            <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>STEP 1: CHOOSE EVERYDAY PURPOSE</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
              {purposes.map(p => (
                <button
                  key={p.id}
                  onClick={() => {
                    setPurpose(p.id);
                    if (p.id === 'industrial') setChassis('legged');
                  }}
                  className={`btn ${purpose === p.id ? 'primary' : ''}`}
                  style={{
                    padding: '12px 14px',
                    fontSize: '13px',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    minHeight: '44px',
                    border: '1px solid',
                    borderColor: purpose === p.id ? 'var(--accent)' : 'var(--line)',
                    background: purpose === p.id ? 'var(--accent)' : 'transparent',
                    color: purpose === p.id ? 'var(--on-accent)' : 'var(--ink)'
                  }}
                >
                  {p.name}
                </button>
              ))}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '8px' }}>
              {purposes.find(p => p.id === purpose)?.desc}
            </p>
          </div>

          {/* Step 2: Mobility Chassis */}
          <div style={{ marginBottom: '24px' }}>
            <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>STEP 2: CHOOSE MOBILITY CHASSIS</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
              {chassisTypes.map(c => (
                <button
                  key={c.id}
                  onClick={() => setChassis(c.id)}
                  className={`btn ${chassis === c.id ? 'primary' : ''}`}
                  style={{
                    padding: '12px 14px',
                    fontSize: '13px',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    border: '1px solid',
                    borderColor: chassis === c.id ? 'var(--teal)' : 'var(--line)',
                    background: chassis === c.id ? 'var(--teal)' : 'transparent',
                    color: chassis === c.id ? '#fff' : 'var(--ink)'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600 }}>{c.name}</div>
                    <div style={{ fontSize: '11px', opacity: 0.85 }}>{c.terrain}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Payload & Tools */}
          <div>
            <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>STEP 3: CHOOSE ATTACHMENT OR PAYLOAD</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '8px' }}>
              {payloads.map(tool => (
                <button
                  key={tool.id}
                  onClick={() => setPayload(tool.id)}
                  className={`btn ${payload === tool.id ? 'primary' : ''}`}
                  style={{
                    padding: '10px 12px',
                    fontSize: '12px',
                    justifyContent: 'center',
                    border: '1px solid',
                    borderColor: payload === tool.id ? 'var(--accent)' : 'var(--line)',
                    background: payload === tool.id ? 'var(--accent)' : 'transparent',
                    color: payload === tool.id ? 'var(--on-accent)' : 'var(--ink)'
                  }}
                >
                  {tool.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Config Summary Box */}
        <div style={{ background: 'var(--bg2)', padding: '24px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span className="mono" style={{ color: 'var(--muted)', fontSize: '11px' }}>CONFIGURED ROBOT PROFILE</span>
            <h3 style={{ fontSize: '20px', margin: '8px 0 12px' }}>
              {purpose === 'industrial' ? 'Vajra-Inspector Industrial' : 'Dyn Everyday Service Assistant'}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', borderTop: '1px solid var(--line)', paddingTop: '12px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--muted)' }}>Chassis:</span>
                <strong>{currentChassis?.name}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--muted)' }}>Attachment:</span>
                <strong>{currentPayload?.name}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--muted)' }}>Battery Runtime:</span>
                <span className="mono">4.5–6 Hours (Auto-Dock)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--muted)' }}>Software SDK:</span>
                <span className="mono">ROS 2 Humble / Python</span>
              </div>
            </div>
          </div>

          <div>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '14px', marginBottom: '14px' }}>
              <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>INDICATIVE PRICING</span>
              <div className="price" style={{ margin: '4px 0', fontSize: '32px' }}>
                {purpose === 'industrial' ? '₹1.80L / mo (RaaS)' : `₹${(totalCost / 1000).toFixed(0)},000`}
              </div>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                {purpose === 'industrial' ? 'Comprehensive operational subscription' : 'Outright purchase with warranty & guides'}
              </span>
            </div>

            <a href="#contact" className="btn primary" style={{ width: '100%', justifyContent: 'center' }}>
              Inquire About This Build
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
