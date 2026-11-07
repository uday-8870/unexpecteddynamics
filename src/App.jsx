import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Raw from './components/Raw';
import Btn from './components/Btn';
import Reveal from './components/Reveal';
import Timeline from './components/Timeline';
import { markSvg, QUAD_SVG, YARD_SVG, DYN_SVG, ICON } from './svg';
import { useRoute, useTheme } from './hooks';
import { Eyebrow, Band, Head, IconCard, Cta, PageHead, Pipeline } from './components/Parts';

const ROUTES = [
  ['home', 'Home'],
  ['inspector', 'Inspector'],
  ['dyn', 'Dyn'],
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
              <Eyebrow>Robotics · Visakhapatnam, India</Eyebrow>
            </Reveal>
            <Reveal y={30} delay={0.15}>
              <h1>Legged robots for work that cannot wait.</h1>
            </Reveal>
            <Reveal y={30} delay={0.25}>
              <p className="lede">
                Unexpected Dynamics builds inspection robots for 220kV–765kV high-voltage switchyards, refineries, and heavy coastal plants in Visakhapatnam and across India, alongside an approachable robotics line for makers and classrooms.
              </p>
            </Reveal>
            <Reveal y={20} delay={0.35}>
              <div className="btns">
                <Btn to="inspector" kind="primary">Explore Inspector</Btn>
                <Btn to="dyn">Meet Dyn</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal y={40} delay={0.2} scale={0.96}>
            <figure className="visual">
              <Raw html={QUAD_SVG} className="art" label="Animated Inspector quadruped robot walking while sensor head scans" />
              <figcaption>Inspector on patrol. Autonomous 400kV substation round.</figcaption>
            </figure>
          </Reveal>
        </div>
      </Band>

      {/* Two Product Lines */}
      <Band>
        <Head
          eyebrow="Two product lines"
          title="Start where you are."
          sub="One company, two ways in. Inspector takes people out of dangerous high-voltage rounds. Dyn puts a capable first robot in more hands."
        />
        <div className="two">
          <Reveal delay={0.1} y={30}>
            <div className="card line">
              <div className="art">
                <Raw html={YARD_SVG} label="Illustration of a switchyard with a thermal hotspot being flagged" />
              </div>
              <div className="cbody">
                <Eyebrow>Industrial</Eyebrow>
                <h3>Inspector</h3>
                <p>
                  Legged inspection robots for substations, coastal refineries, and heavy steel plants. Thermal, optical, and acoustic sensing, edge autonomy that navigates GPS-denied switchyards, and automated work orders for SAP and Maximo.
                </p>
                <Btn to="inspector" kind="link">See Inspector</Btn>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={30}>
            <div className="card line">
              <div className="art">
                <Raw html={DYN_SVG} className="small" label="Animated illustration of Dyn, a small friendly wheeled robot waving" />
              </div>
              <div className="cbody">
                <Eyebrow tone="t">Entry level</Eyebrow>
                <h3>Dyn</h3>
                <p>
                  An approachable robot line for classrooms, robotics clubs, makers, and workshops. Simple to start with, open to build on, and designed around the same perception principles as Inspector.
                </p>
                <Btn to="dyn" kind="link">Meet Dyn</Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </Band>

      {/* Value Pillars */}
      <Band alt>
        <Head eyebrow="What sets us apart" title="Built for real Indian industrial conditions." />
        <div className="cols3">
          <Reveal delay={0.05} y={24}>
            <div className="col">
              <h3>Legs where wheels stop</h3>
              <p>Gravel ballast, curbs, cable trenches, and steps are standard in Indian yards. Legged quadrupeds conquer them without ramps.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15} y={24}>
            <div className="col">
              <h3>Edge autonomy without cloud lag</h3>
              <p>Perception and navigation run 100% on the onboard Jetson Orin compute, so patrols continue even during network dropouts.</p>
            </div>
          </Reveal>
          <Reveal delay={0.25} y={24}>
            <div className="col">
              <h3>Hardened for 765kV & coastal heat</h3>
              <p>Faraday shielding and sealed enclosures protect against high-EMF electrical noise, heavy monsoons, and saline coastal air.</p>
            </div>
          </Reveal>
        </div>
      </Band>

      {/* Live RaaS ROI Calculator Module */}
      <Band>
        <Head
          eyebrow="Interactive Economics"
          title="Calculate Your Plant's Inspection Savings"
          sub="See how switching from manual walkdowns to Robotics-as-a-Service (RaaS) eliminates upfront CapEx and delivers instant positive ROI."
        />
        <RoiCalculator />
      </Band>

      <Cta
        title="Tell us what you want to inspect, automate or teach."
        text="We reply to every inquiry from plant managers, electrical engineers, and students."
        to="platform"
        label="Read about the platform"
      />
    </>
  );
}

// ==========================================
// INTERACTIVE ROI CALCULATOR COMPONENT
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
              <span>Number of Substations / Plant Units:</span>
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
            <strong>Predictable OpEx:</strong> Includes 1x Vajra/Inspector quadruped per site, autonomous all-weather docking station, sensor payload maintenance, and automated SAP work order dispatch.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '1px solid var(--line)', paddingLeft: '32px' }}>
          <div>
            <span className="mono">ESTIMATED NET ANNUAL SAVINGS</span>
            <div className="price" style={{ margin: '8px 0 16px', color: 'var(--accent)' }}>
              ₹{netSavings >= 100 ? (netSavings / 100).toFixed(2) + ' Cr' : netSavings.toFixed(1) + ' Lakhs'}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6 }}>
              Direct savings from reduced unplanned arc-flash shutdowns, lower third-party inspection costs, and eliminated human safety liabilities.
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
              <span style={{ color: 'var(--muted)' }}>Upfront Hardware CapEx:</span>
              <span className="mono" style={{ color: 'var(--teal)', fontWeight: 700 }}>₹0 (Zero CapEx)</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ==========================================
// VIEW 2: INSPECTOR (Live Mission Control Console)
// ==========================================
function InspectorView() {
  const [feedMode, setFeedMode] = useState('thermal'); // 'thermal' | 'optical' | 'lidar' | 'acoustic'
  const [orderSent, setOrderSent] = useState(false);

  const hazards = [
    ['bolt', 'Electrical hazard', 'Switchyards from 220kV to 765kV expose crews to electrocution and arc flash on every round.'],
    ['cloud', 'Toxic gas and heat', 'Refinery tank farms and process units add toxic gas leaks and heat stroke to routine inspections.'],
    ['steps', 'Terrain that stops wheels', 'Loose ballast rock, curbs, cable trenches, and steps are everywhere. Legs go where wheels cannot.']
  ];

  const pay = [
    ['thermo', 'Radiometric thermal', 'Finds hotspots on joints, bushings, and breakers before catastrophic flashover.'],
    ['zoom', '30x Optical zoom', 'Close inspection from a safe distance, with high-resolution imagery saved as audit evidence.'],
    ['gauge', 'Gauge and dial reading', 'Edge neural nets read analog needles and level glasses, bringing legacy equipment online.'],
    ['wave', 'Acoustic detection', 'Listens for partial discharge and abnormal sounds from valves, pipes, and rotating equipment.'],
    ['radar', 'LiDAR navigation', 'Maps the site and navigates without GPS, with Faraday shielding for high-EMF switchyards.'],
    ['doc', 'Work order generation', 'Findings become work orders in SAP or Maximo with the radiometric evidence attached.']
  ];

  const flow = [
    ['Patrol', 'Scheduled autonomous routes, with automatic return to outdoor dock to recharge.'],
    ['Capture', 'Thermal, optical, and acoustic readings recorded at every critical inspection point.'],
    ['Analyse', 'Gauges are read and temperatures compared against baseline thresholds on the edge compute.'],
    ['Act', 'Anomalies trigger instant work orders with evidence for the maintenance team.']
  ];

  return (
    <>
      <PageHead
        eyebrow="Inspector · Industrial line"
        title="Inspection without the walk-down."
        sub="A legged inspection robot with a multi-modal payload for substations, refineries, and heavy plants. It walks the rounds so people stay clear of the hazard."
        visual={
          <figure className="visual">
            <Raw html={YARD_SVG} className="art" label="Illustration of a switchyard with a scanning line and thermal hotspot" />
            <figcaption>Substation live telemetry feed. Radiometric hotspot identified.</figcaption>
          </figure>
        }
        extra={
          <div className="btns">
            <Btn to="contact" kind="primary">Request a pilot</Btn>
            <Btn to="platform">See the stack</Btn>
          </div>
        }
      />

      {/* Interactive Substation Mission Simulator Console */}
      <Band>
        <Head
          eyebrow="Interactive Console"
          title="Simulate a Live Substation Round"
          sub="Switch between the sensor feeds below to see how Inspector detects equipment degradation before failure occurs."
        />
        <Reveal y={24}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: 'var(--bg2)', padding: '16px 24px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>ASSET: 400KV TRANSFORMER T-02 (BAY 04)</span>
                <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>| VIZAG INDUSTRIAL GRID</span>
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
              <div style={{ background: feedMode === 'thermal' ? '#030712' : '#0a1017', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid var(--line)', position: 'relative' }}>
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

      {/* Hazards Breakdown */}
      <Band alt>
        <Head eyebrow="The risk" title="Routine rounds put people in harm’s way." />
        <div className="cols3">
          {hazards.map(([ico, t, d], i) => (
            <IconCard key={ico} icon={ico} title={t} text={d} delay={i * 0.1} />
          ))}
        </div>
      </Band>

      {/* Multi-Modal Payload Specs */}
      <Band>
        <Head
          eyebrow="Payload"
          title="Six capabilities in one sealed unit."
          sub="Our engineering focuses on what makes an inspection valuable: sensing, autonomy, and actionable analytics. The walking base is rugged commercial hardware."
        />
        <div className="cols3">
          {pay.map(([ico, t, d], i) => (
            <IconCard key={ico} icon={ico} title={t} text={d} delay={i * 0.08} />
          ))}
        </div>
      </Band>

      {/* Workflow */}
      <Band alt>
        <Head eyebrow="Workflow" title="From patrol to fix, without a person in the yard." />
        <div className="steps">
          {flow.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.1} y={20}>
              <div className="step">
                <span className="mono">Step {i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* Commercial RaaS Model */}
      <Band>
        <div className="two">
          <Reveal delay={0.1} y={24}>
            <div className="card">
              <Eyebrow>Commercial model</Eyebrow>
              <h3>Robotics as a Service</h3>
              <p>Plants pay from their operating maintenance budget. No large capital expenditure line item for unproven hardware.</p>
              <div className="price">
                ₹1.5L to ₹2.5L <small>per month, indicative</small>
              </div>
              <ul className="checks">
                <li>Robot, sensor payload, and outdoor docking station</li>
                <li>Comprehensive maintenance, battery swaps, and local spares</li>
                <li>Continuous software, SLAM, and defect model updates</li>
                <li>Direct SAP PM and Maximo work-order integration</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={24}>
            <div className="card">
              <Eyebrow>Built for</Eyebrow>
              <h3>Where a missed fault is expensive</h3>
              <p>Power transmission utilities, coastal petrochemical refineries, and heavy steel/chemical plants.</p>
              <ul className="checks">
                <li>AIS and GIS substations from 220kV to 765kV</li>
                <li>Refineries, petrochemical units, and tank storage farms</li>
                <li>Integrated steel manufacturing and port material handling</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Band>

      <Cta
        title="Run a pilot at your site."
        text="Tell us about your substation or plant and the rounds your team walks today. We scope a pilot around them."
        to="company"
        label="See the roadmap"
      />
    </>
  );
}

// ==========================================
// VIEW 3: DYN (Mechatronics & Gait Simulator)
// ==========================================
function DynView() {
  const [trotFreq, setTrotFreq] = useState(1.2);
  const [stepHeight, setStepHeight] = useState(12);
  const [terrain, setTerrain] = useState('gravel');

  const who = [
    ['Classrooms and clubs', 'A robot students can drive on day one and program as they learn.'],
    ['Makers and developers', 'A friendly base to add sensors, run ROS 2 nodes, and change how it behaves.'],
    ['Small businesses', 'Light duties such as greeting visitors, patrolling a workshop, or checking on a lab.']
  ];
  const grow = [
    ['Learn', 'Drive it, then program it with visual blocks or Python.'],
    ['Build', 'Add sensors and write custom behaviours with open robotics tools.'],
    ['Deploy', 'Give it a real job in your workshop, shop, or laboratory.']
  ];
  const goals = [
    ['Open software', 'Friendly to ROS 2 and standard robotics tools, so skills carry over.'],
    ['Safe by default', 'Soft edges, limited speed, and clear physical stop.'],
    ['Repairable', 'Modular parts that can be swapped, with open guides to match.'],
    ['Shared brain', 'Perception software built on the exact same ideas as Inspector.']
  ];

  const terrainSpecs = {
    gravel: { name: 'Switchyard Ballast Gravel', slip: '0.8%', power: (180 + trotFreq * 80).toFixed(0) },
    trench: { name: '15cm Cable Gutter / Trench', slip: '1.2%', power: (210 + trotFreq * 95).toFixed(0) },
    catwalk: { name: '35° Incline Metal Grating', slip: '0.4%', power: (240 + trotFreq * 110).toFixed(0) },
    mud: { name: 'Coastal Monsoon Silt', slip: '2.5%', power: (260 + trotFreq * 120).toFixed(0) }
  };

  return (
    <>
      <PageHead
        eyebrow="Dyn · Entry level line"
        tone="t"
        title="A first robot that is easy to start with."
        sub="Dyn is our approachable robot line for classrooms, robotics clubs, makers, and small businesses. Capable enough to keep, simple enough to begin."
        visual={
          <figure className="visual">
            <Raw html={DYN_SVG} className="art small" label="Animated illustration of Dyn, a friendly wheeled robot waving and blinking" />
            <figcaption>Dyn concept robot. Interactive wheeled prototype.</figcaption>
          </figure>
        }
        extra={<span className="chip">Concept Stage</span>}
      />

      {/* Interactive Gait & Terrain Tuner */}
      <Band>
        <Head
          eyebrow="Interactive Simulation"
          tone="t"
          title="Quadruped Gait & Terrain Controller"
          sub="Adjust gait frequency, step obstacle clearance, and terrain presets to view simulated power draw and kinematics."
        />
        <Reveal y={24}>
          <div className="two" style={{ background: 'var(--surface)', border: '1px solid var(--line)', padding: '36px', borderRadius: '8px' }}>
            <div>
              <h3 style={{ marginBottom: '20px' }}>Gait Tuning Parameters</h3>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Trot Frequency:</span>
                  <strong className="mono" style={{ color: 'var(--teal)' }}>{trotFreq} Hz</strong>
                </div>
                <input
                  type="range"
                  min="0.6"
                  max="2.2"
                  step="0.1"
                  value={trotFreq}
                  style={{ width: '100%', accentColor: 'var(--teal)' }}
                  onChange={(e) => setTrotFreq(parseFloat(e.target.value))}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Step Obstacle Clearance:</span>
                  <strong className="mono" style={{ color: 'var(--teal)' }}>{stepHeight} cm</strong>
                </div>
                <input
                  type="range"
                  min="5"
                  max="22"
                  step="1"
                  value={stepHeight}
                  style={{ width: '100%', accentColor: 'var(--teal)' }}
                  onChange={(e) => setStepHeight(parseInt(e.target.value))}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>Terrain Preset:</label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {Object.entries(terrainSpecs).map(([k, v]) => (
                    <button
                      key={k}
                      className={`btn ${terrain === k ? 'primary' : ''}`}
                      style={{ minHeight: '34px', padding: '0 12px', fontSize: '12px' }}
                      onClick={() => setTerrain(k)}
                    >
                      {v.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '1px solid var(--line)', paddingLeft: '32px' }}>
              <div>
                <span className="mono">KINEMATIC SOLVER FEEDBACK</span>
                <div style={{ margin: '14px 0 20px', padding: '16px', background: 'var(--bg2)', borderRadius: '6px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>{terrainSpecs[terrain].name}</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>
                    {stepHeight >= 15 ? '✓ Full clearance over 15cm cable gutters.' : '⚠ Low clearance (<15cm) — risk of curb impact.'}
                  </div>
                </div>
              </div>

              <dl className="spec" style={{ margin: 0, fontSize: '13px' }}>
                <dt>Motor Power Draw</dt>
                <dd className="mono">{terrainSpecs[terrain].power} W</dd>
                <dt>Ground Slip Ratio</dt>
                <dd className="mono" style={{ color: 'var(--teal)' }}>{terrainSpecs[terrain].slip}</dd>
                <dt>Foot Stability</dt>
                <dd className="mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>100% Zero-Slip</dd>
              </dl>
            </div>
          </div>
        </Reveal>
      </Band>

      <Band alt>
        <Head eyebrow="Who it is for" tone="t" title="Robots for more than factories." />
        <div className="cols3">
          {who.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.1} y={24}>
              <div className="card">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      <Band>
        <Head eyebrow="Path" tone="t" title="Room to grow." sub="What we are designing Dyn to support as you scale." />
        <div className="steps">
          {grow.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.12} y={20}>
              <div className="step">
                <span className="mono">Stage {i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      <Band alt>
        <div className="two">
          <div>
            <Head eyebrow="Design goals" tone="t" title="What Dyn is built around." />
            <ul className="checks t">
              {goals.map(([title, desc]) => (
                <li key={title}>
                  <span><b>{title}. </b>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Head eyebrow="Spec sheet" tone="t" title="Preliminary architecture." />
            <dl className="spec" style={{ margin: 0 }}>
              <dt>Drive</dt>
              <dd>Differential drive with high-traction wheels</dd>
              <dt>Sensors</dt>
              <dd>2D LiDAR + Depth camera + Ultrasonic</dd>
              <dt>Software</dt>
              <dd>ROS 2 Humble / Python SDK</dd>
              <dt>Price</dt>
              <dd>Targeted under ₹60,000 for schools</dd>
              <dt>Availability</dt>
              <dd>Alpha kits Q3 2027</dd>
            </dl>
          </div>
        </div>
      </Band>

      <Cta
        title="Want Dyn in your classroom, club or shop?"
        text="Tell us what you would do with it. Your input directly shapes what we build first."
        to="inspector"
        label="See the industrial line"
      />
    </>
  );
}

// ==========================================
// VIEW 4: PLATFORM (Engineering & Architecture)
// ==========================================
function PlatformView() {
  const cols = [
    ['Hardware', 'NVIDIA Jetson Orin compute, 3D LiDAR, radiometric thermal core, optical PTZ camera, and acoustic sensing on a commercial legged base.'],
    ['Software', 'ROS 2 Humble for the robot stack, with detection and OCR models trained in cloud simulation (Isaac Sim, Gazebo, MuJoCo) before field trials.'],
    ['Integrations', 'Inspection findings flow into SAP PM and IBM Maximo as automated work orders, with radiometric images and coordinate data attached.']
  ];
  const hard = [
    ['Shielded for high EMF', 'Braided grounding straps, shielded twisted pair cabling, and aluminum Faraday enclosures keep controllers and LiDAR steady near 400kV and above.'],
    ['Sealed for coastal sites', 'IP65 enclosures and a weather-sealed charging dock protect against fine industrial dust, heavy coastal monsoons, and ambient heat.'],
    ['Ready for supply shocks', 'Modular architecture allows actuators, sensors, and compute boards to be swapped when import lead times stretch.']
  ];
  const steps = [
    ['Sense', 'Thermal, optical, acoustic, and LiDAR data captured synchronously at every inspection waypoint.'],
    ['Perceive', 'Edge neural nets detect equipment, read analog gauges via OCR, and locate thermal hotspots.'],
    ['Decide', 'Onboard computer plans routes, navigates around obstacles without GPS, and flags anomalies.'],
    ['Act', 'The quadruped traverses gravel, climbs steps, zooms in, and re-inspects if a reading looks abnormal.'],
    ['Report', 'Verified findings and timestamped evidence flow straight into your plant ERP as actionable work orders.']
  ];

  return (
    <>
      <PageHead
        eyebrow="Platform"
        title="One stack from sensor to work order."
        sub="Every Unexpected Dynamics robot shares the same approach: sense, perceive, decide, act, and report. Inspector runs the full chain. Dyn runs a lightweight variant."
        visual={
          <div className="visual" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Raw html={QUAD_SVG} className="art" />
            <div className="mono">SENSING AND REPORTING PIPELINE</div>
          </div>
        }
      />

      <Band>
        <Head eyebrow="Pipeline" title="Five stages, all on the robot except the last." sub="Perception and path planning run entirely on the onboard edge compute. Only the final work order leaves the plant site." />
        <Pipeline steps={steps} />
      </Band>

      <Band alt>
        <Head eyebrow="Stack" title="Proven parts, our own intelligence." />
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
        <Head eyebrow="Hardened for India" title="Designed for the sites we actually have." />
        <div className="cols3">
          {hard.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1} y={24}>
              <div className="col">
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* Engineering FAQ Accordion */}
      <Band alt>
        <Head eyebrow="Technical FAQ" title="Frequently Asked Engineering Questions" />
        <FaqSection />
      </Band>

      <Cta
        title="See it on your site."
        text="We start with one inspection route and grow from there."
        to="inspector"
        label="See Inspector"
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
      'Can the robot operate safely in 400kV and 765kV live switchyards?',
      'Yes. The electronic core (NVIDIA Jetson Orin AGX and flight controllers) is housed inside a custom aluminum Faraday cage with braided grounding straps and ferrite-choked CAN buses. This prevents the high electromagnetic fields and corona discharge common in 400kV/765kV switchyards from resetting the system.'
    ],
    [
      'How does it localize and navigate without reliable GPS in switchyards?',
      'Switchyards create multi-path GPS interference due to towering steel towers and high-voltage busbars. We use FAST-LIO2 solid-state LiDAR odometry paired with wheel/leg IMU odometry to build real-time 3D spatial point clouds and navigate autonomously with centimeter-level precision.'
    ],
    [
      'How does it handle extreme Indian summers and coastal monsoon rains?',
      'The robot has an IP65 ingress rating against heavy coastal monsoons and abrasive dust. Internal heat from the Jetson Orin compute is routed through copper vapor chambers to the aluminum belly pan, allowing continuous operation up to 48°C ambient air temperatures.'
    ],
    [
      'What happens when the battery runs low during an inspection patrol?',
      'When state-of-charge drops below 20%, the robot autonomously navigates back to its outdoor contact charging dock using visual AprilTags and reflective LiDAR targets. It fast-charges from 20% to 80% in 45 minutes before resuming its scheduled route.'
    ],
    [
      'How does it integrate with our plant maintenance software (SAP PM / Maximo)?',
      'The robot publishes standardized JSON payloads over secure local Wi-Fi, private 5G, or wired dock Ethernet. When a hotspot exceeds the configured threshold, a REST/MQTT API triggers a draft or high-priority maintenance order in SAP S/4HANA PM or IBM Maximo with exact GPS coordinates and radiometric photos attached.'
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
// VIEW 5: COMPANY (Roadmap, Identity & Team)
// ==========================================
function CompanyView() {
  const road = [
    ['Months 0 to 3', 'Validate & Model', 'Customer discovery with plant managers in Visakhapatnam and southern regional transmission circles, high-EMF requirements, and Isaac Sim physics simulation.'],
    ['Months 3 to 6', 'Alpha Prototype', 'Sensor payload and ROS 2 autonomy stack integrated onto commercial quadruped base with custom Faraday enclosure and coastal corrosion seals.'],
    ['Months 6 to 9', 'Field Trials & Docking', 'Live supervised runs at an anchor utility switchyard, testing 48°C ambient heat and autonomous contact charging dock.'],
    ['Months 9 to 12', 'Paid Pilot & Scale', 'Convert trial into annual RaaS contract (₹1.8L/mo), live SAP work order integration, and scale commercial deployments.']
  ];
  const how = [
    ['Start narrow', 'One painful problem with paying customers beats a general-purpose humanoid.'],
    ['Buy the commodity', 'Use proven actuator bases. Focus engineering on sensing, autonomy, and defect analytics.'],
    ['Prove it on site', 'Paid pilots at real operational plants before scaling manufacturing batches.'],
    ['Sell as a service', 'Charge from operational maintenance budgets (OpEx) so plant heads can easily say yes.']
  ];

  return (
    <>
      <PageHead
        eyebrow="Company"
        title="Dangerous and repetitive work should be done by machines built here."
        sub="Unexpected Dynamics is an Indian robotics company headquartered in Visakhapatnam, Andhra Pradesh. We start with industrial inspection and build toward robots that more people can own, teach, and build on."
        visual={
          <div className="visual" style={{ display: 'grid', placeItems: 'center', minHeight: 300 }}>
            <Raw html={markSvg(180, true)} className="art" />
          </div>
        }
      />

      <Band>
        <Head eyebrow="Roadmap" title="Twelve months from customer discovery to paid pilot." sub="Scroll down to follow the execution milestones." />
        <Timeline items={road} />
      </Band>

      <Band alt>
        <Head eyebrow="Principles" title="How we operate." />
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
          eyebrow="Identity"
          title="The mark."
          sub="The D is a housing. The U is a leg with a joint at each end. The two orange dots are actuators, and the name is the point: the dynamics you did not expect from a machine this small."
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
        title="Building something similar, or want to collaborate?"
        text="We regularly talk to plant engineers, transmission supervisors, robotics developers, and researchers."
        to="platform"
        label="Read the platform"
      />
    </>
  );
}

// ==========================================
// VIEW 6: CONTACT & PILOT APPLICATION
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
        eyebrow="Contact"
        title="Start a pilot, or follow Dyn."
        sub="Tell us where you work and what you would like a robot to do. Our engineering team in Visakhapatnam replies within 24 hours."
        visual={
          <div className="card">
            <h3>Direct Contact</h3>
            <dl className="spec" style={{ margin: 0 }}>
              <dt>Email</dt>
              <dd>contact@unexpecteddynamics.online</dd>
              <dt>Location</dt>
              <dd>Visakhapatnam (Vizag), Andhra Pradesh, India</dd>
              <dt>Focus Sectors</dt>
              <dd>High-Voltage Transmission, Refineries, Coastal Heavy Industry</dd>
            </dl>
          </div>
        }
      />

      <Band>
        <div className="two">
          <Reveal delay={0.1} y={24}>
            <div className="card">
              <Eyebrow>Industrial</Eyebrow>
              <h3>Pilot Inspector at your site</h3>
              <p>Tell us about your facility:</p>
              <ul className="checks">
                <li>Substation voltage (220kV, 400kV, 765kV AIS/GIS) or refinery unit</li>
                <li>Inspection round frequency and current technician pain points</li>
                <li>Specific hazards (arc flash, toxic gas, ballast gravel terrain)</li>
                <li>Your maintenance system (SAP PM, IBM Maximo, or proprietary SCADA)</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={24}>
            <div className="card">
              <Eyebrow tone="t">Pilot Application</Eyebrow>
              {submitted ? (
                <div style={{ padding: '32px 0', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '12px', color: 'var(--accent)' }}>✓</div>
                  <h3 style={{ color: 'var(--accent)' }}>Assessment Request Received</h3>
                  <p style={{ marginTop: '8px', color: 'var(--muted)', fontSize: '15px' }}>
                    Our field engineering team based in Visakhapatnam will contact you within 24 hours to schedule the site feasibility survey.
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
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="v.sharma@powerutility.in"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 4, border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Facility Classification & Voltage</label>
                    <select
                      required
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 4, border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    >
                      <option value="">Select facility classification...</option>
                      <option value="765kv">765kV / 400kV Ultra High-Voltage AIS/GIS</option>
                      <option value="220kv">220kV / 132kV Transmission Substation</option>
                      <option value="refinery">Petrochemical Refinery / Tank Storage Farm</option>
                      <option value="steel">Integrated Steel Plant / Coastal Heavy Industry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Inspection Priorities</label>
                    <textarea
                      rows={3}
                      placeholder="400kV switchyard transformer bushing hot spots, SF6 gas leakage tracking, loose gravel accessibility..."
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 4, border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    />
                  </div>
                  <button type="submit" className="btn primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Submit Pilot Assessment Request
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
        {route === 'inspector' && <InspectorView />}
        {route === 'dyn' && <DynView />}
        {route === 'platform' && <PlatformView />}
        {route === 'company' && <CompanyView />}
        {route === 'contact' && <ContactView />}
      </main>
      <Footer routes={ROUTES} />
    </>
  );
}
