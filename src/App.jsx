import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Raw from './components/Raw';
import Btn from './components/Btn';
import Reveal from './components/Reveal';
import Timeline from './components/Timeline';
import DynInteractive from './components/DynInteractive';
import MedicalInteractive from './components/MedicalInteractive';
import QuadrupedInteractive from './components/QuadrupedInteractive';
import RobotConfigurator from './components/RobotConfigurator';
import { markSvg } from './svg';
import { useRoute, useTheme } from './hooks';
import { Eyebrow, Band, Head, IconCard, Cta, PageHead, Pipeline } from './components/Parts';

const ROUTES = [
  ['home', 'Home'],
  ['dyn', 'Everyday Robots'],
  ['medical', 'Medical Robots'],
  ['inspector', 'Industrial Inspector'],
  ['platform', 'Platform'],
  ['company', 'Company'],
  ['contact', 'Contact']
];

// ==========================================
// VIEW 1: HOME
// ==========================================
function HomeView() {
  return (
    <>
      <Band grid hero>
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal y={20} delay={0.05}>
              <Eyebrow tone="t">Practical Robotics. Visakhapatnam, India</Eyebrow>
            </Reveal>
            <Reveal y={30} delay={0.15}>
              <h1>Robots for everyday purpose. Built for utility.</h1>
            </Reveal>
            <Reveal y={30} delay={0.25}>
              <p className="lede">
                Our primary mission is straightforward practical robotics for daily human work. We engineer dependable machines for carrying payloads, assisting in workshops, supporting clinic operations, and handling hazardous high-voltage rounds where people should not walk.
              </p>
            </Reveal>
            <Reveal y={20} delay={0.35}>
              <div className="btns">
                <Btn to="dyn" kind="primary">Explore Everyday Robots</Btn>
                <Btn to="medical">Medical and Clinic Robots</Btn>
                <Btn to="inspector">Industrial Inspector</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal y={40} delay={0.2} scale={0.96}>
            <DynInteractive />
          </Reveal>
        </div>
      </Band>

      {/* Three Pillars: Everyday, Medical, Extreme */}
      <Band>
        <Head
          eyebrow="Three purposeful platforms"
          title="From daily chores to hospital wards and industrial hazards."
          sub="A single shared perception architecture powers three distinct product lines built for practical human service."
        />
        <div className="cols3">
          <Reveal delay={0.1} y={30}>
            <div className="card line">
              <div className="cbody" style={{ padding: '28px' }}>
                <Eyebrow tone="t">Everyday Utility</Eyebrow>
                <h3>Dyn Series</h3>
                <p>
                  Built for workshops, retail stores, libraries, and classrooms. Carries up to 15 kg of tools or parts, maneuvers through narrow spaces quietly, and operates at pedestrian walking speeds.
                </p>
                <Btn to="dyn" kind="link">Meet Dyn Series</Btn>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={30}>
            <div className="card line">
              <div className="cbody" style={{ padding: '28px' }}>
                <Eyebrow tone="t">Healthcare and Clinical</Eyebrow>
                <h3>Cura Series</h3>
                <p>
                  Automates sterile medicine delivery, specimen transport, and routine corridor rounds in clinics and hospitals, relieving nursing staff from repetitive walking fatigue.
                </p>
                <Btn to="medical" kind="link">Explore Medical Line</Btn>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3} y={30}>
            <div className="card line">
              <div className="cbody" style={{ padding: '28px' }}>
                <Eyebrow>Extreme Environment</Eyebrow>
                <h3>Inspector Series</h3>
                <p>
                  When routine inspection exposes maintenance crews to 765kV arc flash electrocution or toxic gases, Inspector walks the round with radiometric thermography and automated reporting.
                </p>
                <Btn to="inspector" kind="link">Explore Inspector</Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </Band>

      {/* Interactive Robot Configurator */}
      <Band alt>
        <Head
          eyebrow="Interactive Configurator"
          title="Configure an everyday purpose robot"
          sub="Select your daily task, chassis geometry, and modular attachment to view specifications and pricing."
        />
        <Reveal y={24}>
          <RobotConfigurator />
        </Reveal>
      </Band>

      {/* Everyday Applications */}
      <Band>
        <Head
          eyebrow="Everyday Applications"
          title="Where our robots operate daily."
          sub="Practical robotics designed to solve real operational friction for businesses, community facilities, and industrial plants."
        />
        <div className="cols3">
          <Reveal delay={0.05} y={24}>
            <div className="card">
              <span className="mono" style={{ color: 'var(--teal)', fontSize: '13px', fontWeight: 700 }}>01. FABRICATION</span>
              <h3>Workshops and Makerspaces</h3>
              <p>Autonomous tool courier carrying drill bits, fasteners, and stock material between workstations so machinists stay at their benches.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15} y={24}>
            <div className="card">
              <span className="mono" style={{ color: 'var(--teal)', fontSize: '13px', fontWeight: 700 }}>02. HEALTHCARE</span>
              <h3>Clinics and Care Facilities</h3>
              <p>Transports medicine trays, laboratory specimens, and supplies quietly through corridors with continuous obstacle avoidance.</p>
            </div>
          </Reveal>
          <Reveal delay={0.25} y={24}>
            <div className="card">
              <span className="mono" style={{ color: 'var(--teal)', fontSize: '13px', fontWeight: 700 }}>03. COMMERCE</span>
              <h3>Offices and Retail Stores</h3>
              <p>Welcomes guests, guides visitors to conference areas, handles inter-departmental deliveries, and conducts scheduled evening room checks.</p>
            </div>
          </Reveal>
          <Reveal delay={0.35} y={24}>
            <div className="card">
              <span className="mono" style={{ color: 'var(--accent)', fontSize: '13px', fontWeight: 700 }}>04. UTILITIES</span>
              <h3>Substations and Refineries</h3>
              <p>Continuous radiometric thermal patrols across 400kV and 765kV switchyards, removing human crews from high-voltage hazards.</p>
            </div>
          </Reveal>
          <Reveal delay={0.45} y={24}>
            <div className="card">
              <span className="mono" style={{ color: 'var(--teal)', fontSize: '13px', fontWeight: 700 }}>05. EDUCATION</span>
              <h3>Classrooms and Universities</h3>
              <p>Accessible open-architecture robotics platform that allows engineering students to build and test ROS 2 programs hands on.</p>
            </div>
          </Reveal>
          <Reveal delay={0.55} y={24}>
            <div className="card">
              <span className="mono" style={{ color: 'var(--accent)', fontSize: '13px', fontWeight: 700 }}>06. STORAGE</span>
              <h3>Warehouses and Depots</h3>
              <p>Autonomous evening rounds verifying temperature sensors, security checkpoints, and structural perimeters across large facilities.</p>
            </div>
          </Reveal>
        </div>
      </Band>

      {/* RaaS ROI Calculator */}
      <Band alt>
        <Head
          eyebrow="Commercial Economics"
          title="Predictable economics for your facility"
          sub="Dyn is priced accessibly for outright purchase. For heavy industrial installations, Inspector is available under an operational service model."
        />
        <RoiCalculator />
      </Band>

      <Cta
        title="Tell us what you want to automate or build."
        text="Whether you run a workshop, manage a clinic, or oversee a high-voltage switchyard, we are ready to discuss your requirements."
        to="contact"
        label="Start a conversation"
      />
    </>
  );
}

// ==========================================
// ROI CALCULATOR COMPONENT
// ==========================================
function RoiCalculator() {
  const [sites, setSites] = useState(4);
  const [annualSpendPerSite, setAnnualSpendPerSite] = useState(45);

  const traditionalTotal = sites * annualSpendPerSite;
  const raasAnnualTotal = sites * 21.6;
  const netSavings = Math.max(0, traditionalTotal - raasAnnualTotal);

  return (
    <Reveal y={24}>
      <div className="two" style={{ background: 'var(--surface)', border: '1px solid var(--line)', padding: '36px', borderRadius: '8px' }}>
        <div>
          <h3 style={{ marginBottom: '20px' }}>Facility Parameters</h3>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Number of Facilities:</span>
              <strong className="mono" style={{ color: 'var(--accent)' }}>{sites} {sites === 1 ? 'Site' : 'Sites'}</strong>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={sites}
              style={{ width: '100%', accentColor: 'var(--accent)' }}
              onChange={(e) => setSites(parseInt(e.target.value))}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Current Annual Outage and Inspection Cost per Site:</span>
              <strong className="mono" style={{ color: 'var(--accent)' }}>₹{annualSpendPerSite} Lakhs</strong>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              step="5"
              value={annualSpendPerSite}
              style={{ width: '100%', accentColor: 'var(--accent)' }}
              onChange={(e) => setAnnualSpendPerSite(parseInt(e.target.value))}
            />
          </div>

          <div style={{ padding: '16px', background: 'var(--bg2)', borderRadius: '6px', fontSize: '14px', color: 'var(--muted)' }}>
            <strong>Operational Service Scope:</strong> Includes robot fleet deployment, autonomous weather-sealed docking stations, continuous maintenance, spare parts, and direct maintenance software integration.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '1px solid var(--line)', paddingLeft: '32px' }}>
          <div>
            <span className="mono">ESTIMATED NET ANNUAL SAVINGS</span>
            <div className="price" style={{ margin: '8px 0 16px', color: 'var(--accent)' }}>
              ₹{netSavings >= 100 ? (netSavings / 100).toFixed(2) + ' Cr' : netSavings.toFixed(1) + ' Lakhs'}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6 }}>
              Direct operational savings achieved by mitigating safety risks, reducing unplanned equipment shutdowns, and automating routine rounds.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--muted)' }}>Annual Manual Cost:</span>
              <span className="mono">₹{traditionalTotal >= 100 ? (traditionalTotal / 100).toFixed(2) + ' Cr' : traditionalTotal + ' L'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--muted)' }}>Unexpected Dynamics Service:</span>
              <span className="mono">₹{raasAnnualTotal >= 100 ? (raasAnnualTotal / 100).toFixed(2) + ' Cr' : raasAnnualTotal.toFixed(1) + ' L'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--muted)' }}>Hardware Capital Outlay:</span>
              <span className="mono" style={{ color: 'var(--teal)', fontWeight: 700 }}>₹0</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ==========================================
// VIEW 2: EVERYDAY ROBOTS (Dyn Series)
// ==========================================
function DynView() {
  const everydayDuties = [
    ['Tool and Parts Courier', 'Carries up to 15 kg of tools and hardware between technicians in workshops and fabrication yards.'],
    ['Clinic and Hospital Courier', 'Transports patient files, laboratory samples, and medicine trays quietly down corridors with collision-free navigation.'],
    ['Indoor Premises Patrol', 'Executes scheduled patrols after hours, verifying that warehouse doors and windows remain secured.'],
    ['Front-Desk Hospitality', 'Greets visitors, announces guest arrivals, and escorts clients to designated conference rooms.'],
    ['Library Stacker', 'Assists staff in returns sorting, carrying stacks of books across multi-room facilities.'],
    ['Open ROS 2 Sandbox', 'A fully customizable robotics platform for engineering institutions and developers to program custom behaviors.']
  ];

  return (
    <>
      <PageHead
        eyebrow="Everyday Service Robotics"
        tone="t"
        title="A capable assistant for regular human tasks."
        sub="Dyn is our approachable, modular robot built for everyday service: running errands, carrying payloads, and making small businesses and community facilities more productive."
        visual={<DynInteractive />}
        extra={<span className="chip">Available for Trials</span>}
      />

      <Band>
        <Head
          eyebrow="Everyday Utility"
          tone="t"
          title="Practical help where hands are needed."
          sub="Dyn is designed around safety, quiet movement, and reliable interaction. No intimidating mechanisms, simply honest utility."
        />
        <div className="cols3">
          {everydayDuties.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08} y={24}>
              <div className="card">
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      <Band alt>
        <Head
          eyebrow="Configure and Price"
          tone="t"
          title="Build your Dyn specification"
          sub="Choose attachments and payloads suited to your daily routine."
        />
        <Reveal y={24}>
          <RobotConfigurator />
        </Reveal>
      </Band>

      <Band>
        <div className="two">
          <div>
            <Head eyebrow="Human-Safe Engineering" tone="t" title="Safe to stand and work beside." />
            <ul className="checks t">
              <li><span><b>Soft Compliance: </b>Rounded bumpers, low operational center of gravity, and speed capped safely at 1.5 meters per second.</span></li>
              <li><span><b>Instant Halo Stop: </b>Dual ultrasonic and depth camera proximity zones halt the robot 50 cm before any human contact.</span></li>
              <li><span><b>Low Noise: </b>Direct-drive brushless hub motors produce less than 42 dB of sound, quieter than a home refrigerator.</span></li>
              <li><span><b>Modular Swap: </b>Trays, lockable storage boxes, tablet screens, and robotic grippers swap out in under 2 minutes.</span></li>
            </ul>
          </div>
          <div>
            <Head eyebrow="Technical Specifications" tone="t" title="Dyn Series 1 Specifications." />
            <dl className="spec" style={{ margin: 0 }}>
              <dt>Payload</dt>
              <dd>15 kg cargo tray or 30 kg towing capacity</dd>
              <dt>Runtime</dt>
              <dd>6 to 8 hours continuous operational cycle</dd>
              <dt>Navigation</dt>
              <dd>360 degree 2D LiDAR and Stereo Depth Camera</dd>
              <dt>Chassis</dt>
              <dd>Sealed aluminum unibody with low-friction urethane tires</dd>
              <dt>Software</dt>
              <dd>ROS 2 Humble, Python SDK, Web Remote Interface</dd>
              <dt>Price</dt>
              <dd>Starting at ₹42,000 for education and small business</dd>
            </dl>
          </div>
        </div>
      </Band>

      <Cta
        title="Bring Dyn into your workshop, clinic or lab."
        text="Tell us about the everyday chores your team handles. We will arrange a live demonstration."
        to="contact"
        label="Request a Demonstration"
      />
    </>
  );
}

// ==========================================
// VIEW 3: MEDICAL AND HEALTHCARE ROBOTS (Cura Series)
// ==========================================
function MedicalView() {
  const clinicalRoles = [
    ['Pharmacy to Ward Courier', 'Transports unit-dose prescription batches securely from central pharmacy to floor nursing stations with electronic PIN authentication.'],
    ['Pathology Specimen Transit', 'Rapidly shuttles blood samples, tissue cultures, and biopsy containers directly to diagnostic labs to preserve specimen integrity.'],
    ['Surgical Kit Logistics', 'Hauls sterile instrument trays and consumable packs from Central Sterile Supply Department to operation theatre preparation rooms.'],
    ['Autonomous UV-C Disinfection', 'Navigates trauma bays, ICUs, and treatment suites after patient discharge, delivering high-intensity ultraviolet decontamination.'],
    ['Linen and Waste Dispatch', 'Automates regular scheduled collection of clinical linens and designated waste, keeping hospital corridors clear and clean.'],
    ['Remote Specialist Telepresence', 'Enables senior medical consultants to conduct high-definition audio and visual rounds with bedside vital telemetry display.']
  ];

  return (
    <>
      <PageHead
        eyebrow="Healthcare Logistics and Care Support"
        tone="t"
        title="Automating hospital logistics so clinical teams can care."
        sub="The Cura Series is an autonomous clinical transport robot engineered for hospitals, medical colleges, and diagnostic labs in Visakhapatnam and across India. It eliminates routine transit fatigue for nursing staff."
        visual={<MedicalInteractive />}
        extra={
          <div className="btns">
            <Btn to="contact" kind="primary">Schedule a Hospital Walkthrough</Btn>
            <Btn to="platform">View Sensor Architecture</Btn>
          </div>
        }
      />

      <Band>
        <Head
          eyebrow="Clinical Logistics"
          tone="t"
          title="Targeted support for healthcare facilities."
          sub="Hospital nurses frequently walk 6 to 9 kilometers per shift simply transporting supplies. Cura takes over transit duty so staff remain at the patient bedside."
        />
        <div className="cols3">
          {clinicalRoles.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08} y={24}>
              <div className="card">
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      <Band alt>
        <div className="two">
          <div>
            <Head eyebrow="Hospital Standard Safety" tone="t" title="Engineered for clinical environments." />
            <ul className="checks t">
              <li><span><b>Sterile Surfaces: </b>Antimicrobial medical-grade composite body panels compatible with hospital hospital-grade disinfectant wipes.</span></li>
              <li><span><b>Quiet Corridor Glide: </b>Whisper-quiet electric drive operates under 38 dB, maintaining quiet rest periods in intensive care units.</span></li>
              <li><span><b>Elevator Integration: </b>Communicates with smart hospital elevators to travel autonomously across multi-story ward wings.</span></li>
              <li><span><b>Biometric Access: </b>Secure RFID keycard and touch-screen PIN authentication ensure medications are only accessed by licensed nurses.</span></li>
            </ul>
          </div>
          <div>
            <Head eyebrow="Cura Specifications" tone="t" title="Clinical Performance Specifications." />
            <dl className="spec" style={{ margin: 0 }}>
              <dt>Payload</dt>
              <dd>Up to 45 kg interior storage capacity</dd>
              <dt>Compartments</dt>
              <dd>Dual locking drawers with optional refrigerated core</dd>
              <dt>Navigation</dt>
              <dd>LiDAR SLAM with dynamic corridor crowd avoidance</dd>
              <dt>Battery Life</dt>
              <dd>10 hours continuous duty with opportunity fast charging</dd>
              <dt>Certification</dt>
              <dd>Hospital electrical safety and EMI/EMC compliance</dd>
              <dt>Deployment</dt>
              <dd>On-site mapping and staff training in under 48 hours</dd>
            </dl>
          </div>
        </div>
      </Band>

      <Cta
        title="Deploy clinical logistics at your hospital."
        text="We conduct initial corridor surveys and trial demonstrations for clinics and hospital networks."
        to="contact"
        label="Request Hospital Assessment"
      />
    </>
  );
}

// ==========================================
// VIEW 4: INDUSTRIAL INSPECTOR (Extreme Terrains)
// ==========================================
function InspectorView() {
  const [feedMode, setFeedMode] = useState('thermal');
  const [orderSent, setOrderSent] = useState(false);

  const hazards = [
    ['bolt', 'Electrical arc flash hazard', 'Switchyards from 220kV to 765kV expose human maintenance crews to high-voltage electrocution on routine rounds.'],
    ['cloud', 'Toxic fumes and heat stress', 'Refinery tank farms and coastal chemical units expose technicians to hydrocarbon vapor leaks and extreme summer temperatures.'],
    ['steps', 'Terrain that stops wheels', 'Loose ballast rock, curbs, 15cm cable gutters, and catwalk stairs are impassable for wheeled AMRs. Legs traverse everywhere.']
  ];

  return (
    <>
      <PageHead
        eyebrow="Extreme Environment Line"
        title="Hazardous inspection without human risk."
        sub="A rugged quadruped equipped with multi-spectral thermal, optical, and acoustic payloads for coastal substations, refineries, and steel plants in Visakhapatnam and nationwide."
        visual={<QuadrupedInteractive />}
        extra={
          <div className="btns">
            <Btn to="contact" kind="primary">Schedule a Substation Trial</Btn>
            <Btn to="platform">View Sensor Stack</Btn>
          </div>
        }
      />

      {/* Interactive Substation Simulator with 4 distinct views */}
      <Band>
        <Head
          eyebrow="Mission Simulation"
          title="Interactive Substation Inspection Console"
          sub="Click between camera feeds below to see the visual and sensory feed transform in real time."
        />
        <Reveal y={24}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: 'var(--bg2)', padding: '16px 24px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>ASSET: 400KV TRANSFORMER T-02, BAY 04</span>
                <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>VISAKHAPATNAM TRANSMISSION HUB</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[
                  ['thermal', 'Radiometric FLIR'],
                  ['optical', '30x Optical PTZ'],
                  ['lidar', '3D LiDAR Point Cloud'],
                  ['acoustic', 'Acoustic Ultrasound']
                ].map(([m, label]) => (
                  <button
                    key={m}
                    className={`btn ${feedMode === m ? 'primary' : ''}`}
                    style={{ minHeight: '36px', padding: '0 14px', fontSize: '13px' }}
                    onClick={() => setFeedMode(m)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 1fr)', minHeight: '380px' }}>
              {/* Dynamic Viewport Canvas */}
              <div style={{ background: feedMode === 'thermal' ? '#030712' : feedMode === 'optical' ? '#1c2430' : feedMode === 'lidar' ? '#050c18' : '#0c121e', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid var(--line)', transition: 'background 0.3s ease' }}>
                <div style={{ width: '100%', maxWidth: '520px' }}>
                  
                  {/* FEED 1: RADIOMETRIC FLIR THERMAL */}
                  {feedMode === 'thermal' && (
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(232, 71, 15, 0.2)', border: '1px solid var(--accent)', borderRadius: '4px', marginBottom: '14px' }}>
                        <span className="mono" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '12px' }}>HOTSPOT BUSHING PHASE B AT 88.4°C</span>
                      </div>
                      <Raw html={YARD_SVG} label="Thermal scanner showing bushing anomaly" />
                    </div>
                  )}

                  {/* FEED 2: 30X OPTICAL PTZ WITH DIAL OCR */}
                  {feedMode === 'optical' && (
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(11, 127, 134, 0.2)', border: '1px solid var(--teal)', borderRadius: '4px', marginBottom: '14px' }}>
                        <span className="mono" style={{ color: 'var(--teal)', fontWeight: 700, fontSize: '12px' }}>4K OPTICAL PTZ ZOOM. GAUGE OCR ACTIVE</span>
                      </div>
                      <svg viewBox="0 0 460 260" style={{ width: '100%', display: 'block', background: '#111824', borderRadius: '6px', border: '1px solid #334155' }}>
                        {/* Dial Gauge Housing */}
                        <circle cx="230" cy="130" r="85" fill="#1e293b" stroke="#64748b" strokeWidth="4" />
                        <circle cx="230" cy="130" r="72" fill="#0f172a" />
                        {/* Tick Marks */}
                        <path d="M175 130 h10 M275 130 h10 M230 75 v10 M190 95 l8 8 M270 95 l-8 8" stroke="#94a3b8" strokeWidth="2" />
                        {/* Gauge Needle pointing to 0.62 MPa */}
                        <line x1="230" y1="130" x2="255" y2="85" stroke="var(--teal)" strokeWidth="3.5" strokeLinecap="round" />
                        <circle cx="230" cy="130" r="6" fill="#f8fafc" />
                        <text x="230" y="160" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="sans-serif">SF6 PRESSURE</text>
                        {/* Active OCR Green Box */}
                        <rect x="145" y="45" width="170" height="170" fill="none" stroke="var(--teal)" strokeWidth="2" strokeDasharray="6 6" />
                        <text x="230" y="38" fill="var(--teal)" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">OCR READING: 0.62 MPa</text>
                        <text x="230" y="235" fill="var(--teal)" fontSize="10" textAnchor="middle" fontFamily="monospace">CONFIDENCE 99.1%</text>
                      </svg>
                    </div>
                  )}

                  {/* FEED 3: 3D LIDAR POINT CLOUD */}
                  {feedMode === 'lidar' && (
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(60, 203, 210, 0.2)', border: '1px solid var(--teal)', borderRadius: '4px', marginBottom: '14px' }}>
                        <span className="mono" style={{ color: 'var(--teal)', fontWeight: 700, fontSize: '12px' }}>FAST-LIO2 SOLID STATE LIDAR. 48,000 PTS PER SECOND</span>
                      </div>
                      <svg viewBox="0 0 460 260" style={{ width: '100%', display: 'block', background: '#020617', borderRadius: '6px', border: '1px solid #1e293b' }}>
                        {/* Radar Range Rings */}
                        <circle cx="230" cy="130" r="40" fill="none" stroke="#1e293b" strokeWidth="1" />
                        <circle cx="230" cy="130" r="80" fill="none" stroke="#1e293b" strokeWidth="1" />
                        <circle cx="230" cy="130" r="115" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                        {/* Point Cloud Clusters */}
                        <g fill="var(--teal)" opacity="0.8">
                          <circle cx="160" cy="110" r="2" /><circle cx="165" cy="115" r="2" /><circle cx="170" cy="108" r="2" />
                          <circle cx="225" cy="80" r="2" /><circle cx="230" cy="85" r="2" /><circle cx="235" cy="82" r="2" />
                          <circle cx="295" cy="112" r="2" /><circle cx="300" cy="116" r="2" /><circle cx="305" cy="110" r="2" />
                          <circle cx="190" cy="170" r="2" /><circle cx="230" cy="175" r="2" /><circle cx="270" cy="170" r="2" />
                        </g>
                        {/* Transformer Wireframe Skeleton */}
                        <rect x="180" y="110" width="100" height="80" fill="none" stroke="#334155" strokeWidth="1.5" />
                        <line x1="230" y1="130" x2="300" y2="114" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" />
                        <text x="230" y="245" fill="var(--teal)" fontSize="11" textAnchor="middle" fontFamily="monospace">BUSBAR CLEARANCE: 4.82 METERS SAFE</text>
                      </svg>
                    </div>
                  )}

                  {/* FEED 4: ACOUSTIC ULTRASOUND */}
                  {feedMode === 'acoustic' && (
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(232, 71, 15, 0.2)', border: '1px solid var(--accent)', borderRadius: '4px', marginBottom: '14px' }}>
                        <span className="mono" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '12px' }}>64-CHANNEL BEAMFORMING ULTRASOUND</span>
                      </div>
                      <svg viewBox="0 0 460 260" style={{ width: '100%', display: 'block', background: '#090d16', borderRadius: '6px', border: '1px solid #1e293b' }}>
                        {/* Concentric sound wave radiation */}
                        <circle cx="230" cy="115" r="25" fill="none" stroke="var(--accent)" strokeWidth="3" opacity="0.9" />
                        <circle cx="230" cy="115" r="50" fill="none" stroke="var(--accent)" strokeWidth="2" opacity="0.6" strokeDasharray="6 4" />
                        <circle cx="230" cy="115" r="80" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.35" strokeDasharray="4 4" />
                        {/* Acoustic Peak Bar */}
                        <rect x="110" y="195" width="240" height="30" rx="4" fill="#1e293b" />
                        <rect x="195" y="195" width="70" height="30" rx="4" fill="var(--accent)" opacity="0.8" />
                        <text x="230" y="214" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">PEAK 38.2 kHz</text>
                        <text x="230" y="248" fill="var(--accent)" fontSize="11" textAnchor="middle" fontFamily="monospace">CORONA PARTIAL DISCHARGE DETECTED</text>
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Dynamic Telemetry Sidebar */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--surface)' }}>
                <div>
                  <div style={{ background: 'var(--bg2)', padding: '14px', borderRadius: '6px', borderLeft: `3px solid ${feedMode === 'thermal' || feedMode === 'acoustic' ? 'var(--accent)' : 'var(--teal)'}`, marginBottom: '16px' }}>
                    <div className="mono" style={{ color: feedMode === 'thermal' || feedMode === 'acoustic' ? 'var(--accent)' : 'var(--teal)', fontWeight: 700, fontSize: '11px' }}>
                      {feedMode === 'thermal' ? 'THERMAL ANOMALY' : feedMode === 'optical' ? 'OPTICAL CONFIRMATION' : feedMode === 'lidar' ? 'SPATIAL TELEMETRY' : 'ACOUSTIC SIGNATURE'}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600, marginTop: '4px' }}>
                      {feedMode === 'thermal' ? 'Phase B Bushing Hotspot' : feedMode === 'optical' ? 'Dial OCR Verified' : feedMode === 'lidar' ? 'Spatial Grid Locked' : 'Corona Discharge Ping'}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>
                      {feedMode === 'thermal' && 'Delta: 43.2°C above ambient baseline of 45.2°C.'}
                      {feedMode === 'optical' && 'Pressure gauge needle steady at 0.62 MPa.'}
                      {feedMode === 'lidar' && 'Clearance to energized 400kV busbar is 4.82m.'}
                      {feedMode === 'acoustic' && 'Harmonic spike at 38.2 kHz indicates clamp looseness.'}
                    </div>
                  </div>

                  <dl className="spec" style={{ margin: 0, fontSize: '13px' }}>
                    {feedMode === 'thermal' && (
                      <>
                        <dt>Ambient Temp</dt><dd className="mono">45.2 °C</dd>
                        <dt>Hotspot Temp</dt><dd className="mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>88.4 °C</dd>
                        <dt>EMF Intensity</dt><dd className="mono">18.4 kV/m</dd>
                      </>
                    )}
                    {feedMode === 'optical' && (
                      <>
                        <dt>SF6 Pressure</dt><dd className="mono" style={{ color: 'var(--teal)', fontWeight: 700 }}>0.62 MPa</dd>
                        <dt>OCR Confidence</dt><dd className="mono">99.1%</dd>
                        <dt>Sight Glass</dt><dd className="mono">Oil Level Nominal</dd>
                      </>
                    )}
                    {feedMode === 'lidar' && (
                      <>
                        <dt>Point Density</dt><dd className="mono">48,000 pts/sec</dd>
                        <dt>Min Clearance</dt><dd className="mono" style={{ color: 'var(--teal)', fontWeight: 700 }}>4.82 meters</dd>
                        <dt>Odometry Drift</dt><dd className="mono">&lt; 1.2 cm</dd>
                      </>
                    )}
                    {feedMode === 'acoustic' && (
                      <>
                        <dt>Peak Frequency</dt><dd className="mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>38.2 kHz</dd>
                        <dt>Pressure Level</dt><dd className="mono">42 dBµV</dd>
                        <dt>Discharge Status</dt><dd className="mono">Confirmed Corona</dd>
                      </>
                    )}
                    <dt>Work Order</dt>
                    <dd className="mono">{orderSent ? 'SAP WO-9021 Sent' : 'Ready to Dispatch'}</dd>
                  </dl>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <button
                    className="btn primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => {
                      setOrderSent(true);
                      alert('Dispatched to SAP Plant Maintenance. Work Order: WO-VIZAG-400KV-9021. Priority: High. Assigned To: Substation Maintenance Division, Visakhapatnam.');
                    }}
                    disabled={orderSent}
                  >
                    {orderSent ? 'SAP Work Order Created' : 'Dispatch Emergency SAP Work Order'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Band>

      <Band alt>
        <Head eyebrow="The Hazards" title="What Inspector protects human crews from." />
        <div className="cols3">
          {hazards.map(([ico, t, d], i) => (
            <IconCard key={ico} icon={ico} title={t} text={d} delay={i * 0.1} />
          ))}
        </div>
      </Band>

      <Cta
        title="Schedule an on-site trial at your facility."
        text="We run on-site trials across transmission substations, steel plants, and refineries in Andhra Pradesh and nationwide."
        to="contact"
        label="Book a Field Survey"
      />
    </>
  );
}

// ==========================================
// VIEW 5: PLATFORM (Architecture)
// ==========================================
function PlatformView() {
  const cols = [
    ['Hardware Modularity', 'NVIDIA Jetson Orin compute, solid-state LiDAR, radiometric thermal cores, and brushless QDD actuators shared across Dyn, Cura, and Inspector lines.'],
    ['Unified Software Core', 'ROS 2 Humble with open Python SDKs, running FAST-LIO2 SLAM for GPS-denied environments and TensorRT-optimized neural nets for meter reading.'],
    ['Enterprise and Local APIs', 'From local web interface remote controls for workshop owners to direct SAP PM and IBM Maximo connectors for heavy industrial facilities.']
  ];

  const steps = [
    ['Sense', 'Thermal, optical, acoustic, and LiDAR data captured synchronously at every inspection or patrol waypoint.'],
    ['Perceive', 'Edge vision models detect obstacles, read analog needles, identify people, and locate thermal hotspots.'],
    ['Decide', 'Onboard compute re-plans collision-free trajectories around moving humans, vehicles, or equipment.'],
    ['Act', 'The robot walks, rolls, docks autonomously to recharge, or raises alerts when an anomaly exceeds thresholds.'],
    ['Report', 'Actionable reports, delivery confirmations, or emergency work orders dispatch directly to the user or plant ERP.']
  ];

  return (
    <>
      <PageHead
        eyebrow="Platform Architecture"
        title="One shared robotics stack. Countless purposes."
        sub="The perception algorithms keeping Inspector safe around 765kV busbars are the same algorithms keeping Dyn safe in your workshop and Cura safe in hospital hallways."
        visual={
          <div className="visual" style={{ display: 'grid', placeItems: 'center', minHeight: 280 }}>
            <Raw html={markSvg(160, true)} className="art" />
          </div>
        }
      />

      <Band>
        <Head eyebrow="Unified Pipeline" title="Five stages, entirely on-device autonomy." sub="Perception and local navigation run on the robot, ensuring continuous duty even during Wi-Fi or cellular dropouts." />
        <Pipeline steps={steps} />
      </Band>

      <Band alt>
        <Head eyebrow="Architecture" title="Engineered for longevity and repairability." />
        <div className="cols3">
          {cols.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1} y={24}>
              <div className="card">
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      <Band>
        <Head eyebrow="Engineering FAQ" title="Frequently asked technical questions." />
        <FaqSection />
      </Band>

      <Cta
        title="Explore our SDK and APIs."
        text="We provide open documentation, Python libraries, and ROS 2 workspaces for developers and students."
        to="contact"
        label="Talk to an Engineer"
      />
    </>
  );
}

// ==========================================
// FAQ COMPONENT
// ==========================================
function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    [
      'Why is Unexpected Dynamics focused on everyday purpose robotics instead of humanoids?',
      'Humanoids are complex and mechanically delicate for practical daily work. Real humans in workshops, clinics, and plants need dependable helpers that carry cargo, read meters, patrol floors, and survive everyday duty cycles without prohibitive costs.'
    ],
    [
      'Can Dyn and Cura operate safely around children, patients, and staff?',
      'Yes. Both are engineered with dual soft-limit bumpers, compliant wheel suspension, speed limited to walking pace, and instant ultrasonic cutoffs that halt motor drive if an obstacle approaches within 50 centimeters.'
    ],
    [
      'How does Inspector survive 765kV electromagnetic fields in electrical switchyards?',
      'The electronic core is enclosed in a precision aluminum Faraday cage with braided copper grounding straps and ferrite-choked bus lines. This eliminates RF noise and electrostatic resets induced by massive electromagnetic fields.'
    ],
    [
      'Can students or developers write custom software for Dyn?',
      'Yes. Dyn ships with full ROS 2 Humble compatibility, a lightweight Python SDK, and standard endpoints. You can write custom autonomous behaviors, attach third-party sensors, or integrate custom computer vision models.'
    ],
    [
      'How does autonomous charging work for our robots?',
      'All our robots use weather-resistant contact charging docks. The robots navigate to within 2 meters using LiDAR SLAM, then lock onto optical tags and infrared beacons to dock with precision without human assistance.'
    ]
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '820px', margin: '0 auto' }}>
      {faqs.map(([q, a], idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={q} style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '6px', overflow: 'hidden' }}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              style={{
                width: '100%',
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                color: 'var(--ink)',
                fontSize: '17px',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              <span>{q}</span>
              <span className="mono" style={{ color: 'var(--accent)', fontSize: '18px', marginLeft: '16px' }}>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 24px 20px', color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
                {a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ==========================================
// VIEW 6: COMPANY
// ==========================================
function CompanyView() {
  const road = [
    ['Months 0 to 3', 'Validation and Requirements', 'Field interviews with workshop owners, clinic administrators, and electrical transmission managers in Visakhapatnam to define modular payload requirements.'],
    ['Months 3 to 6', 'Alpha Prototypes and SDK', 'First functional batch of Dyn wheeled helpers, Cura clinical runners, and Inspector quadrupeds built with shared ROS 2 perception stack.'],
    ['Months 6 to 9', 'Live Multi-Site Pilots', 'Supervised pilot deployments in Visakhapatnam fabrication shops, hospitals, and 400kV regional transmission substations testing reliability.'],
    ['Months 9 to 12', 'Commercial Scale and Orders', 'Commence commercial deliveries for Dyn everyday service units, hospital trials for Cura, and annual service subscriptions across power and heavy industrial clients.']
  ];

  const how = [
    ['Utility over theatrics', 'We measure success by tasks completed and hazards eliminated, not by staged demonstrations.'],
    ['Commodity hardware', 'We utilize proven actuators and standard lithium cells, focusing our engineering on autonomy and perception.'],
    ['Built for local conditions', 'Designed for coastal humidity, monsoon rains, loose gravel, and high ambient summer temperatures.'],
    ['Accessible economics', 'Priced so local businesses and educational institutions can actually own and deploy real robotics.']
  ];

  return (
    <>
      <PageHead
        eyebrow="Company Vision"
        title="Building basic robotics for everyday human purposes."
        sub="Unexpected Dynamics is headquartered in Visakhapatnam, Andhra Pradesh. We believe capable robotics should not be restricted to elite research laboratories. It belongs in everyday workshops, stores, hospitals, and critical infrastructure."
        visual={
          <div className="visual" style={{ display: 'grid', placeItems: 'center', minHeight: 300 }}>
            <Raw html={markSvg(180, true)} className="art" />
          </div>
        }
      />

      <Band>
        <Head eyebrow="Roadmap" title="Twelve months from customer discovery to commercial rollout." sub="Scroll down to review the milestone progression." />
        <Timeline items={road} />
      </Band>

      <Band alt>
        <Head eyebrow="Core Principles" title="How we engineer." />
        <div className="cols4">
          {how.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08} y={24}>
              <div className="col">
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      <Band>
        <Head
          eyebrow="Brand Identity"
          title="The Unexpected Mark."
          sub="The outer D represents the protective chassis housing. The inner U represents an articulated leg joint. The two orange points signify high-torque drive actuators. Unexpected Dynamics: capability where you least expect it."
        />
        <div className="tiles">
          <Reveal delay={0.1} y={24}>
            <div className="tile light">
              <div className="lockup">
                <Raw html={markSvg(36)} className="mk" />
                <div className="wm"><b>Unexpected</b><i>Dynamics</i></div>
              </div>
              <span className="mono">On light</span>
            </div>
          </Reveal>
          <Reveal delay={0.2} y={24}>
            <div className="tile dark">
              <div className="lockup">
                <Raw html={markSvg(36)} className="mk" />
                <div className="wm"><b>Unexpected</b><i>Dynamics</i></div>
              </div>
              <span className="mono">On dark</span>
            </div>
          </Reveal>
          <Reveal delay={0.3} y={24}>
            <div className="tile">
              <Raw html={markSvg(48)} className="mk" />
              <span className="mono">Mark only</span>
            </div>
          </Reveal>
        </div>
      </Band>

      <Cta
        title="Interested in collaborating with our team?"
        text="We regularly speak with robotics developers, embedded engineers, and manufacturing partners in Andhra Pradesh."
        to="contact"
        label="Get in touch"
      />
    </>
  );
}

// ==========================================
// VIEW 7: CONTACT
// ==========================================
function ContactView() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHead
        eyebrow="Contact and Collaboration"
        title="Start an everyday pilot or substation trial."
        sub="Tell us about the deliveries, tasks, or inspections you want to automate. Our engineering team in Visakhapatnam replies within 24 hours."
        visual={
          <div className="card">
            <h3>Headquarters and Lab</h3>
            <dl className="spec" style={{ margin: 0 }}>
              <dt>Email</dt>
              <dd>contact@unexpecteddynamics.online</dd>
              <dt>Location</dt>
              <dd>Visakhapatnam, Andhra Pradesh, India</dd>
              <dt>Focus Areas</dt>
              <dd>Everyday Service Robots, Clinical Logistics, High-Voltage Transmission</dd>
            </dl>
          </div>
        }
      />

      <Band>
        <div className="two">
          <Reveal delay={0.1} y={24}>
            <div className="card">
              <Eyebrow tone="t">Everyday and Industrial Pilot Scope</Eyebrow>
              <h3>How we work with you:</h3>
              <p>We work directly with businesses, clinics, and utilities:</p>
              <ul className="checks t">
                <li><b>Dyn On-Site Trial: </b>Workshop parts courier, office assistance, or classroom robotics pilot.</li>
                <li><b>Cura Clinical Trial: </b>Hospital corridor medication transit or sterile supply room logistics.</li>
                <li><b>Inspector Substation Trial: </b>220kV to 765kV high-voltage switchyard radiometric thermal survey.</li>
                <li><b>Local Engineering Support: </b>Direct field support and spare parts from our Visakhapatnam base.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={24}>
            <div className="card">
              <Eyebrow>Direct Inquiry Form</Eyebrow>
              {submitted ? (
                <div style={{ padding: '32px 0', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '12px', color: 'var(--accent)' }}>✓</div>
                  <h3 style={{ color: 'var(--accent)' }}>Inquiry Received</h3>
                  <p style={{ marginTop: '8px', color: 'var(--muted)', fontSize: '15px' }}>
                    Our engineering team in Visakhapatnam will review your requirements and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Vikram Sharma"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 4, border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Work Email or Phone</label>
                    <input
                      type="text"
                      required
                      placeholder="vikram@enterprise.in or +91 98765 43210"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 4, border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Primary Application</label>
                    <select
                      required
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 4, border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    >
                      <option value="">Select your application</option>
                      <option value="dyn-workshop">Dyn for Workshop and Fabrication Parts Runner</option>
                      <option value="cura-clinic">Cura for Hospital and Clinic Medication Logistics</option>
                      <option value="dyn-store">Dyn for Retail and Office Assistance</option>
                      <option value="dyn-edu">Dyn for Robotics Education and Research</option>
                      <option value="inspector-substation">Inspector for 220kV to 765kV Substation Inspection</option>
                      <option value="inspector-refinery">Inspector for Refinery and Chemical Plant Patrol</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Tell us about the daily tasks you want to automate</label>
                    <textarea
                      rows={3}
                      placeholder="Need an autonomous courier robot to carry supplies between rooms without getting caught on thresholds."
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 4, border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    />
                  </div>
                  <button type="submit" className="btn primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Submit Pilot Request
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Band>
    </>
  );
}

// ==========================================
// MASTER APP SHELL
// ==========================================
export default function App() {
  const route = useRoute('home');
  const { toggle: toggleTheme } = useTheme();

  return (
    <>
      <Header route={route} toggleTheme={toggleTheme} routes={ROUTES} />
      <main>
        {route === 'home' && <HomeView />}
        {route === 'dyn' && <DynView />}
        {route === 'medical' && <MedicalView />}
        {route === 'inspector' && <InspectorView />}
        {route === 'platform' && <PlatformView />}
        {route === 'company' && <CompanyView />}
        {route === 'contact' && <ContactView />}
      </main>
      <Footer routes={ROUTES} />
    </>
  );
}
