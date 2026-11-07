import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Raw from './components/Raw';
import Btn from './components/Btn';
import Reveal from './components/Reveal';
import Timeline from './components/Timeline';
import DynInteractive from './components/DynInteractive';
import QuadrupedInteractive from './components/QuadrupedInteractive';
import RobotConfigurator from './components/RobotConfigurator';
import { markSvg, YARD_SVG, ICON } from './svg';
import { useRoute, useTheme } from './hooks';
import { Eyebrow, Band, Head, IconCard, Cta, PageHead, Pipeline } from './components/Parts';

const ROUTES = [
  ['home', 'Home'],
  ['dyn', 'Everyday Robots'],
  ['inspector', 'Industrial Inspector'],
  ['platform', 'Platform'],
  ['company', 'Company'],
  ['contact', 'Contact']
];

// ==========================================
// VIEW 1: HOME (Everyday Purpose & Vision)
// ==========================================
function HomeView() {
  return (
    <>
      <Band grid hero>
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal y={20} delay={0.05}>
              <Eyebrow tone="t">Practical Robotics · Visakhapatnam, India</Eyebrow>
            </Reveal>
            <Reveal y={30} delay={0.15}>
              <h1>Robots for everyday purpose. Hardworking by design.</h1>
            </Reveal>
            <Reveal y={30} delay={0.25}>
              <p className="lede">
                Our primary mission is not building expensive circus tricks or complex humanoids. We engineer dependable, approachable robotics for everyday human purposes — helping in workshops, carrying goods, assisting in clinics, and handling dangerous high-voltage rounds where humans shouldn't walk.
              </p>
            </Reveal>
            <Reveal y={20} delay={0.35}>
              <div className="btns">
                <Btn to="dyn" kind="primary">Explore Everyday Robots</Btn>
                <Btn to="inspector">See Industrial Line</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal y={40} delay={0.2} scale={0.96}>
            <DynInteractive />
          </Reveal>
        </div>
      </Band>

      {/* The Two Lines: Everyday and Hazardous */}
      <Band>
        <Head
          eyebrow="Two purposeful platforms"
          title="From daily chores to extreme hazards."
          sub="One core autonomy stack powers two distinct lines: friendly helper robots for everyday life, and ruggedized specialists for hazardous industrial sites."
        />
        <div className="two">
          <Reveal delay={0.1} y={30}>
            <div className="card line">
              <div className="cbody" style={{ padding: '32px' }}>
                <Eyebrow tone="t">Everyday Helper Line</Eyebrow>
                <h3>Dyn — The Everyday Purpose Robot</h3>
                <p>
                  Built for workshops, retail stores, libraries, clinics, and classrooms. Carries up to 15 kg of tools or medicines, welcomes guests, navigates indoor clutter safely, and costs less than a second-hand scooter. Simple to program, safe to stand beside.
                </p>
                <Btn to="dyn" kind="link">Meet Dyn & Everyday Tasks</Btn>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={30}>
            <div className="card line">
              <div className="cbody" style={{ padding: '32px' }}>
                <Eyebrow>Extreme Environment Line</Eyebrow>
                <h3>Inspector — The Hazardous Terrain Specialist</h3>
                <p>
                  When routine rounds expose human crews to 765kV arc-flash electrocution, toxic refinery gases, or jagged ballast gravel, Inspector takes the walkdown. Radiometric thermal scanning and autonomous SAP work-order dispatching.
                </p>
                <Btn to="inspector" kind="link">Explore Industrial Inspector</Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </Band>

      {/* Interactive Robot Configurator */}
      <Band alt>
        <Head
          eyebrow="Interactive Configurator"
          title="Build Your Everyday Purpose Robot"
          sub="Select your specific daily task, chassis type, and modular payload to configure an affordable robot tailored to your needs."
        />
        <Reveal y={24}>
          <RobotConfigurator />
        </Reveal>
      </Band>

      {/* Everyday Use Cases Grid */}
      <Band>
        <Head
          eyebrow="Everyday Applications"
          title="Where our robots work every single day."
          sub="Robotics should solve tangible everyday friction for small businesses, community clinics, and local manufacturers."
        />
        <div className="cols3">
          <Reveal delay={0.05} y={24}>
            <div className="card">
              <div className="ico t">📦</div>
              <h3>Workshops & Makerspaces</h3>
              <p>Autonomous tool courier running drill bits, fasteners, and parts between workbenches so craftspeople stay focused on making.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15} y={24}>
            <div className="card">
              <div className="ico t">🏥</div>
              <h3>Clinics & Care Facilities</h3>
              <p>Quietly transports medical supplies, specimen vials, and patient meals down corridors, giving healthcare workers more time with patients.</p>
            </div>
          </Reveal>
          <Reveal delay={0.25} y={24}>
            <div className="card">
              <div className="ico t">👋</div>
              <h3>Offices & Retail Stores</h3>
              <p>Welcomes visitors, provides indoor directions, runs inter-desk courier errands, and performs scheduled night room rounds.</p>
            </div>
          </Reveal>
          <Reveal delay={0.35} y={24}>
            <div className="card">
              <div className="ico">⚡</div>
              <h3>Substations & Refineries</h3>
              <p>Continuous 24/7 radiometric thermal scans in 400kV/765kV switchyards, keeping human technicians safe from lethal arc flash.</p>
            </div>
          </Reveal>
          <Reveal delay={0.45} y={24}>
            <div className="card">
              <div className="ico t">🎓</div>
              <h3>Classrooms & Universities</h3>
              <p>Accessible open-software ROS 2 platform that lets students learn robotics hands-on without requiring multi-lakh grant budgets.</p>
            </div>
          </Reveal>
          <Reveal delay={0.55} y={24}>
            <div className="card">
              <div className="ico">🌾</div>
              <h3>Warehouses & Agro Storage</h3>
              <p>Autonomous nightly rounds checking grain temperature sensors, rodent traps, and humidity indicators across large storage sheds.</p>
            </div>
          </Reveal>
        </div>
      </Band>

      {/* RaaS ROI Calculator Module */}
      <Band alt>
        <Head
          eyebrow="Commercial Viability"
          title="Predictable Economics: Buy or Rent as a Service"
          sub="For everyday small businesses, Dyn is priced affordably outright. For heavy industrial sites, Inspector operates as a monthly zero-CapEx service."
        />
        <RoiCalculator />
      </Band>

      <Cta
        title="Tell us what you want to automate, build or teach."
        text="Whether you run a workshop, manage a clinic, or oversee a 400kV switchyard in Visakhapatnam, we're ready to collaborate."
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
  const [annualSpendPerSite, setAnnualSpendPerSite] = useState(45); // in Lakhs INR

  const traditionalTotal = sites * annualSpendPerSite;
  const raasAnnualTotal = sites * 21.6; // ₹1.80L/mo * 12 = ₹21.6L/year per site
  const netSavings = Math.max(0, traditionalTotal - raasAnnualTotal);

  return (
    <Reveal y={24}>
      <div className="two" style={{ background: 'var(--surface)', border: '1px solid var(--line)', padding: '36px', borderRadius: '8px' }}>
        <div>
          <h3 style={{ marginBottom: '20px' }}>Facility Parameters</h3>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Number of Facilities / Sites:</span>
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
              <span>Current Annual Outage & Manual Inspection Cost / Site:</span>
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
            <strong>Zero Upfront CapEx:</strong> Includes robot fleet deployment, autonomous weather-sealed docking stations, continuous maintenance, spare parts, and direct ERP/SAP integration.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '1px solid var(--line)', paddingLeft: '32px' }}>
          <div>
            <span className="mono">ESTIMATED NET ANNUAL SAVINGS</span>
            <div className="price" style={{ margin: '8px 0 16px', color: 'var(--accent)' }}>
              ₹{netSavings >= 100 ? (netSavings / 100).toFixed(2) + ' Cr' : netSavings.toFixed(1) + ' Lakhs'}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6 }}>
              Direct operational savings achieved by eliminating human safety hazards, reducing unplanned shutdowns, and automating routine facility rounds.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--muted)' }}>Annual Manual Cost:</span>
              <span className="mono">₹{traditionalTotal >= 100 ? (traditionalTotal / 100).toFixed(2) + ' Cr' : traditionalTotal + ' L'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--muted)' }}>Unexpected Dynamics RaaS:</span>
              <span className="mono">₹{raasAnnualTotal >= 100 ? (raasAnnualTotal / 100).toFixed(2) + ' Cr' : raasAnnualTotal.toFixed(1) + ' L'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--muted)' }}>Hardware CapEx:</span>
              <span className="mono" style={{ color: 'var(--teal)', fontWeight: 700 }}>₹0 (Zero CapEx)</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ==========================================
// VIEW 2: EVERYDAY ROBOTS (Dyn Series Deep-Dive)
// ==========================================
function DynView() {
  const everydayDuties = [
    ['Tool & Parts Runner', 'Carries up to 15 kg of tools, CNC jigs, and hardware between technicians in workshops and fabrication yards.'],
    ['Clinic & Hospital Courier', 'Transports patient files, laboratory samples, and medicine trays down sterile corridors with collision-free navigation.'],
    ['Indoor Night Watch', 'Executes quiet scheduled patrols after hours, verifying that warehouse doors, gates, and windows are securely closed.'],
    ['Front-Desk Hospitality', 'Greets visitors, announces guest arrivals to team members, and escorts clients to designated conference rooms.'],
    ['Library & Archive Stacker', 'Assists librarians in shelving and returns sorting, carrying stacks of books across multi-floor facilities.'],
    ['Open ROS 2 Sandbox', 'A fully hackable robotics platform for engineering colleges, clubs, and researchers to develop custom AI behaviors.']
  ];

  return (
    <>
      <PageHead
        eyebrow="Everyday Service Robotics"
        tone="t"
        title="A capable assistant for regular human tasks."
        sub="Dyn is our approachable, modular robot built for everyday service: running errands, carrying payloads, and making small businesses and community facilities more productive."
        visual={<DynInteractive />}
        extra={<span className="chip">Available for Early Trials</span>}
      />

      <Band>
        <Head
          eyebrow="Everyday Utility"
          tone="t"
          title="Practical help where hands are needed."
          sub="Dyn is designed around safety, low noise, and gentle human interaction. No intimidating metallic exoskeletons — just honest utility."
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
          eyebrow="Configure & Price"
          tone="t"
          title="Build your Dyn specification."
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
              <li><span><b>Soft Compliance: </b>Rounded bumpers, low operational center of gravity, and speed capped safely at 1.5 m/s.</span></li>
              <li><span><b>Instant Halo Stop: </b>Dual ultrasonic and depth camera proximity zones stop the robot 50 cm before any human contact.</span></li>
              <li><span><b>Whisper Quiet: </b>Direct-drive brushless hub motors produce less than 42 dB of sound — quieter than a modern refrigerator.</span></li>
              <li><span><b>Modular Swap: </b>Trays, lockable medicine boxes, tablet screens, and robotic grippers swap out in under 2 minutes.</span></li>
            </ul>
          </div>
          <div>
            <Head eyebrow="Technical Specifications" tone="t" title="Dyn Series 1 Specifications." />
            <dl className="spec" style={{ margin: 0 }}>
              <dt>Payload</dt>
              <dd>15 kg cargo tray / 30 kg towing capacity</dd>
              <dt>Runtime</dt>
              <dd>6 to 8 hours continuous operational cycle</dd>
              <dt>Navigation</dt>
              <dd>360° 2D LiDAR + Stereo Depth Camera (No markers needed)</dd>
              <dt>Chassis</dt>
              <dd>Sealed aluminum unibody with low-friction urethane tires</dd>
              <dt>Software</dt>
              <dd>ROS 2 Humble / Python SDK / Web Remote UI</dd>
              <dt>Price</dt>
              <dd>Starting at ₹42,000 for education & small businesses</dd>
            </dl>
          </div>
        </div>
      </Band>

      <Cta
        title="Bring Dyn into your workshop, clinic or lab."
        text="Tell us about the everyday chores your team handles. We'll set up a live demonstration."
        to="contact"
        label="Request a Demonstration"
      />
    </>
  );
}

// ==========================================
// VIEW 3: INDUSTRIAL INSPECTOR (Extreme Terrains)
// ==========================================
function InspectorView() {
  const [feedMode, setFeedMode] = useState('thermal');
  const [orderSent, setOrderSent] = useState(false);

  const hazards = [
    ['bolt', 'Electrical arc-flash hazard', 'Switchyards from 220kV to 765kV expose human maintenance crews to fatal electrocution on routine rounds.'],
    ['cloud', 'Toxic fumes and heat stress', 'Refinery tank farms and coastal chemical units expose technicians to hydrocarbon vapor leaks and 48°C summer heat.'],
    ['steps', 'Terrain that stops wheels', 'Loose ballast rock, curbs, 15cm cable gutters, and catwalk stairs are impassable for wheeled AMRs. Legs walk everywhere.']
  ];

  return (
    <>
      <PageHead
        eyebrow="Extreme Environment Line"
        title="Hazardous inspection without human risk."
        sub="A rugged quadruped equipped with multi-spectral thermal, optical, and acoustic payloads for coastal substations, refineries, and heavy steel plants in Visakhapatnam and nationwide."
        visual={<QuadrupedInteractive />}
        extra={
          <div className="btns">
            <Btn to="contact" kind="primary">Schedule a Substation Trial</Btn>
            <Btn to="platform">View Sensor Stack</Btn>
          </div>
        }
      />

      {/* Interactive Substation Simulator */}
      <Band>
        <Head
          eyebrow="Mission Simulation"
          title="Interactive Substation Inspection Console"
          sub="Toggle between multi-spectral camera feeds to observe how Inspector pinpoints equipment degradation before arc flash occurs."
        />
        <Reveal y={24}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: 'var(--bg2)', padding: '16px 24px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>ASSET: 400KV TRANSFORMER T-02 (BAY 04)</span>
                <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>| VISAKHAPATNAM 400KV HUB</span>
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
              <div style={{ background: feedMode === 'thermal' ? '#030712' : '#0a1017', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid var(--line)' }}>
                <div style={{ width: '100%', maxWidth: '520px' }}>
                  {feedMode === 'thermal' && (
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(232, 71, 15, 0.15)', border: '1px solid var(--accent)', borderRadius: '4px', marginBottom: '16px' }}>
                        <span className="mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>HOTSPOT IDENTIFIED: BUSHING PHASE-B // +88.4°C</span>
                      </div>
                      <Raw html={YARD_SVG} label="Thermal scanner showing bushing anomaly" />
                    </div>
                  )}
                  {feedMode === 'optical' && (
                    <div style={{ textAlign: 'center', color: 'var(--muted)' }}>
                      <div className="mono" style={{ color: 'var(--teal)', marginBottom: '12px' }}>30X OPTICAL PTZ // DIAL OCR ACTIVE</div>
                      <p style={{ fontSize: '15px' }}>Analog SF6 Gauge Reading: <strong>0.62 MPa (NORMAL)</strong></p>
                      <p style={{ fontSize: '13px', marginTop: '4px' }}>OCR Confidence: 99.1% | Optical Image Timestamped & Logged</p>
                    </div>
                  )}
                  {feedMode === 'lidar' && (
                    <div style={{ textAlign: 'center', color: 'var(--muted)' }}>
                      <div className="mono" style={{ color: 'var(--teal)', marginBottom: '12px' }}>FAST-LIO2 SOLID STATE LIDAR // 48,000 PTS/SEC</div>
                      <p style={{ fontSize: '15px' }}>GPS-Denied Switchyard SLAM: <strong>LOCKED</strong></p>
                      <p style={{ fontSize: '13px', marginTop: '4px' }}>Clearance to High-Voltage Busbar: <strong>4.82m (SAFE)</strong></p>
                    </div>
                  )}
                  {feedMode === 'acoustic' && (
                    <div style={{ textAlign: 'center', color: 'var(--muted)' }}>
                      <div className="mono" style={{ color: 'var(--accent)', marginBottom: '12px' }}>64-CHANNEL ULTRASONIC MICROPHONE ARRAY</div>
                      <p style={{ fontSize: '15px' }}>Corona Partial Discharge: <strong>38.2 kHz (WARNING)</strong></p>
                      <p style={{ fontSize: '13px', marginTop: '4px' }}>Micro-arcing detected near Phase-B terminal connector clamp.</p>
                    </div>
                  )}
                </div>
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--surface)' }}>
                <div>
                  <div style={{ background: 'var(--bg2)', padding: '14px', borderRadius: '6px', borderLeft: '3px solid var(--accent)', marginBottom: '16px' }}>
                    <div className="mono" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '11px' }}>ANOMALY ALERT</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, marginTop: '4px' }}>Phase-B Bushing Hotspot</div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>Delta: +43.2°C above ambient baseline (45.2°C).</div>
                  </div>

                  <dl className="spec" style={{ margin: 0, fontSize: '13px' }}>
                    <dt>Ambient Temp</dt>
                    <dd className="mono">45.2 °C</dd>
                    <dt>Hotspot Temp</dt>
                    <dd className="mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>88.4 °C</dd>
                    <dt>EMF Intensity</dt>
                    <dd className="mono">18.4 kV/m (SAFE)</dd>
                    <dt>Work Order</dt>
                    <dd className="mono">{orderSent ? 'SAP #WO-9021 (SENT)' : 'Ready to Dispatch'}</dd>
                  </dl>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <button
                    className="btn primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => {
                      setOrderSent(true);
                      alert('✓ Dispatched to SAP Plant Maintenance!\\n\\nNotification: #NOTIF-8921-EHV\\nWork Order: #WO-VIZAG-400KV-9021\\nPriority: High (Hotspot Escalation)\\nAssigned To: Substation Maintenance Division, Visakhapatnam');
                    }}
                    disabled={orderSent}
                  >
                    {orderSent ? '✓ SAP Work Order Created' : 'Dispatch Emergency SAP Work Order'}
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
        title="Schedule a 30-day trial at your facility."
        text="We run on-site trials across transmission substations, steel plants, and refineries in Andhra Pradesh and nationwide."
        to="contact"
        label="Book a Field Survey"
      />
    </>
  );
}

// ==========================================
// VIEW 4: PLATFORM (Technology & Shared Brain)
// ==========================================
function PlatformView() {
  const cols = [
    ['Hardware Modularity', 'NVIDIA Jetson Orin compute, solid-state LiDAR, radiometric thermal cores, and brushless QDD actuators shared across both Dyn and Inspector lines.'],
    ['Unified Software Core', 'ROS 2 Humble with open Python SDKs, running FAST-LIO2 SLAM for GPS-denied environments and TensorRT-optimized neural nets for gauge OCR.'],
    ['Enterprise & Local APIs', 'From local web UI remote controls for workshop owners to direct SAP PM and IBM Maximo connectors for heavy industrial facilities.']
  ];

  const steps = [
    ['Sense', 'Thermal, optical, acoustic, and LiDAR data captured synchronously at every inspection or patrol point.'],
    ['Perceive', 'Edge vision models detect obstacles, read analog dial needles, identify people, and locate thermal hotspots.'],
    ['Decide', 'Onboard compute re-plans collision-free trajectories around moving humans, vehicles, or switchyard equipment.'],
    ['Act', 'The robot walks, rolls, docks autonomously to recharge, or raises alarms when an anomaly exceeds thresholds.'],
    ['Report', 'Actionable reports, delivery confirmations, or emergency work orders dispatch directly to the user or plant ERP.']
  ];

  return (
    <>
      <PageHead
        eyebrow="Platform Architecture"
        title="One shared robotics stack. Countless purposes."
        sub="The perception algorithms keeping Inspector safe around 765kV busbars are the exact same algorithms keeping Dyn safe as it maneuvers past technicians in your workshop."
        visual={
          <div className="visual" style={{ display: 'grid', placeItems: 'center', minHeight: 280 }}>
            <Raw html={markSvg(160, true)} className="art" />
          </div>
        }
      />

      <Band>
        <Head eyebrow="Unified Pipeline" title="Five stages, 100% on-device autonomy." sub="Perception and local navigation run on the robot, ensuring continuous duty even during Wi-Fi or cellular blackouts." />
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

      {/* Technical FAQ */}
      <Band>
        <Head eyebrow="Engineering FAQ" title="Frequently Asked Technical Questions" />
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
// FAQ ACCORDION COMPONENT
// ==========================================
function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    [
      'Why is Unexpected Dynamics focused on everyday purpose robotics instead of humanoids?',
      'Humanoids are visually impressive but prohibitively expensive, mechanically fragile, and inefficient for 99% of practical tasks. Real humans in workshops, clinics, and plants need dependable helpers that carry cargo, read meters, patrol floors, and survive everyday wear without costing tens of lakhs.'
    ],
    [
      'Can Dyn operate safely around children, patients, and pets?',
      'Yes. Dyn is engineered with dual soft-limit bumpers, compliant wheel suspension, speed limited to comfortable walking pace (1.2–1.5 m/s), and instant ultrasonic halo cutoffs that disengage motor drive if an obstacle approaches within 50 centimeters.'
    ],
    [
      'How does Inspector survive 765kV electromagnetic fields in electrical switchyards?',
      'The electronic core is enclosed in a precision aluminum Faraday cage with braided copper grounding straps and ferrite-choked CAN bus lines. This eliminates RF noise and electrostatic resets induced by massive EHV electromagnetic fields.'
    ],
    [
      'Can students or developers write custom software for Dyn?',
      'Absolutely. Dyn ships with full ROS 2 Humble compatibility, a lightweight Python SDK, and standard MQTT/Websocket endpoints. You can write custom autonomous behaviors, attach third-party cameras, or integrate your own computer vision models.'
    ],
    [
      'How does autonomous charging work for both robots?',
      'Both Dyn and Inspector use weather-resistant contact charging docks. The robots navigate to within 2 meters using LiDAR SLAM, then lock onto optical AprilTags and infrared beacons to dock within ±15mm accuracy without human intervention.'
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
// VIEW 5: COMPANY (Vision, Roadmap, Identity)
// ==========================================
function CompanyView() {
  const road = [
    ['Months 0 to 3', 'Everyday & Industrial Validation', 'Field interviews with workshop owners, clinic administrators, and electrical transmission managers in Visakhapatnam and coastal Andhra Pradesh to define modular payload requirements.'],
    ['Months 3 to 6', 'Alpha Prototypes & SDK', 'First functional batch of Dyn wheeled helpers and Inspector quadrupeds built with shared ROS 2 perception stack and modular battery charging docks.'],
    ['Months 6 to 9', 'Live Multi-Site Pilots', 'Supervised pilot deployments in local Visakhapatnam fabrication shops, hospitals, and 400kV regional transmission substations testing coastal heat and reliability.'],
    ['Months 9 to 12', 'Commercial Scale & Orders', 'Commence commercial orders for Dyn everyday service units and expand annual RaaS subscriptions across power and heavy industrial clients.']
  ];

  const how = [
    ['Utility over theatrics', 'We measure success by chores completed and hazards eliminated, not by viral backflips.'],
    ['Commodity hardware', 'We utilize proven actuators and off-the-shelf lithium cells, investing our engineering into autonomy and perception.'],
    ['Built for Indian conditions', 'Designed from the ground up for coastal humidity, monsoon rains, loose gravel, and 48°C ambient heat.'],
    ['Accessible economics', 'Priced so local small businesses and educational labs can actually own and deploy real robotics.']
  ];

  return (
    <>
      <PageHead
        eyebrow="Company Vision"
        title="Building basic robotics for everyday human purposes."
        sub="Unexpected Dynamics is headquartered in Visakhapatnam (Vizag), Andhra Pradesh. We believe capable robotics shouldn't be reserved for elite research labs — it belongs in everyday workshops, stores, hospitals, and critical infrastructure."
        visual={
          <div className="visual" style={{ display: 'grid', placeItems: 'center', minHeight: 300 }}>
            <Raw html={markSvg(180, true)} className="art" />
          </div>
        }
      />

      <Band>
        <Head eyebrow="Roadmap" title="Twelve months from customer discovery to commercial rollout." sub="Scroll down to follow the execution milestones." />
        <Timeline items={road} />
      </Band>

      <Band alt>
        <Head eyebrow="Core Principles" title="How we think and engineer." />
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
        title="Interested in collaborating or joining our team?"
        text="We regularly speak with robotics developers, embedded engineers, and local manufacturing partners in Andhra Pradesh."
        to="contact"
        label="Get in touch"
      />
    </>
  );
}

// ==========================================
// VIEW 6: CONTACT (Visakhapatnam Base)
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
        eyebrow="Contact & Collaboration"
        title="Start an everyday pilot or substation trial."
        sub="Tell us about the chores, deliveries, or inspections you want to automate. Our engineering team in Visakhapatnam replies within 24 hours."
        visual={
          <div className="card">
            <h3>Headquarters & Lab</h3>
            <dl className="spec" style={{ margin: 0 }}>
              <dt>Email</dt>
              <dd>contact@unexpecteddynamics.online</dd>
              <dt>Location</dt>
              <dd>Visakhapatnam (Vizag), Andhra Pradesh, India</dd>
              <dt>Focus Areas</dt>
              <dd>Everyday Service AMRs, Workshops, High-Voltage Transmission</dd>
            </dl>
          </div>
        }
      />

      <Band>
        <div className="two">
          <Reveal delay={0.1} y={24}>
            <div className="card">
              <Eyebrow tone="t">Everyday & Industrial Pilot Scope</Eyebrow>
              <h3>How we work with you:</h3>
              <p>We work directly with local businesses and enterprise utilities:</p>
              <ul className="checks t">
                <li><b>Dyn On-Site Trial: </b>Workshop parts running, clinic courier rounds, or office hospitality pilot.</li>
                <li><b>Inspector Substation Trial: </b>220kV to 765kV high-voltage switchyard radiometric thermal survey.</li>
                <li><b>Custom Attachment Design: </b>Specialized tool racks, trays, or camera mounts built for your specific workflow.</li>
                <li><b>Local Field Support: </b>Same-day engineering support and spares from our Visakhapatnam base.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={24}>
            <div className="card">
              <Eyebrow>Direct Inquiry Form</Eyebrow>
              {submitted ? (
                <div style={{ padding: '32px 0', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '12px', color: 'var(--accent)' }}>✓</div>
                  <h3 style={{ color: 'var(--accent)' }}>Inquiry Received!</h3>
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
                      placeholder="e.g. Vikram Sharma"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 4, border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Work Email / Phone</label>
                    <input
                      type="text"
                      required
                      placeholder="vikram@enterprise.in / +91 98765 43210"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 4, border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Primary Application</label>
                    <select
                      required
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 4, border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    >
                      <option value="">Select your application...</option>
                      <option value="dyn-workshop">Dyn — Workshop & Fabrication Parts Runner</option>
                      <option value="dyn-clinic">Dyn — Clinic / Hospital Medicine & File Courier</option>
                      <option value="dyn-store">Dyn — Retail / Office Hospitality & Patrol</option>
                      <option value="dyn-edu">Dyn — Robotics Lab & Classroom Education</option>
                      <option value="inspector-substation">Inspector — 220kV–765kV Substation Inspection</option>
                      <option value="inspector-refinery">Inspector — Refinery / Chemical Plant Patrol</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Tell us about the daily tasks you want to automate</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need an autonomous tray robot to carry 10kg parts between assembly benches without getting stuck on door sills..."
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
        {route === 'inspector' && <InspectorView />}
        {route === 'platform' && <PlatformView />}
        {route === 'company' && <CompanyView />}
        {route === 'contact' && <ContactView />}
      </main>
      <Footer routes={ROUTES} />
    </>
  );
}
