import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Raw from './components/Raw';
import Btn from './components/Btn';
import Reveal from './components/Reveal';
import Timeline from './components/Timeline';
import { markSvg, QUAD_SVG, YARD_SVG, DYN_SVG } from './svg';
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

function HomeView() {
  return (
    <>
      <Band grid hero>
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal y={20} delay={0.05}>
              <Eyebrow>Robotics · India</Eyebrow>
            </Reveal>
            <Reveal y={30} delay={0.15}>
              <h1>Legged robots for work that cannot wait.</h1>
            </Reveal>
            <Reveal y={30} delay={0.25}>
              <p className="lede">
                Unexpected Dynamics builds inspection robots for high-voltage yards and heavy plants, and an entry-level robot line for classrooms, makers, and small businesses.
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

      <Band>
        <Head
          eyebrow="Two product lines"
          title="Start where you are."
          sub="One company, two ways in. Inspector takes people out of dangerous inspection rounds. Dyn puts a capable first robot in more hands."
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
                  Legged inspection robots for substations, refineries, and heavy plants. Thermal, optical, and acoustic sensing, autonomy that runs on the robot, and findings that land directly in your SAP/Maximo maintenance system.
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
                  An approachable robot line for classrooms, robotics clubs, makers, and small businesses. Simple to start with, open to build on, and designed around the same perception ideas as Inspector.
                </p>
                <Btn to="dyn" kind="link">Meet Dyn</Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </Band>

      <Band alt>
        <Head eyebrow="What sets us apart" title="Built for the conditions here." />
        <div className="cols3">
          <Reveal delay={0.05} y={24}>
            <div className="col">
              <h3>Legs where wheels stop</h3>
              <p>Gravel, curbs, cable trenches, and steps are normal on Indian sites. Legged platforms handle them without special ramps.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15} y={24}>
            <div className="col">
              <h3>The robot does the thinking</h3>
              <p>Navigation and perception run on the robot, so a patrol keeps working without GPS or a steady network.</p>
            </div>
          </Reveal>
          <Reveal delay={0.25} y={24}>
            <div className="col">
              <h3>Open to the next step</h3>
              <p>We buy proven hardware and put our effort into sensing, autonomy, and analytics, so the stack carries from Dyn up to Inspector.</p>
            </div>
          </Reveal>
        </div>
      </Band>

      <Cta
        title="Tell us what you want to inspect, teach or automate."
        text="We reply to every message from plants, schools, and builders."
        to="platform"
        label="Read about the platform"
      />
    </>
  );
}

function InspectorView() {
  const hazards = [
    ['bolt', 'Electrical hazard', 'Switchyards from 220kV to 765kV expose crews to electrocution and arc flash on every round.'],
    ['cloud', 'Toxic gas and heat', 'Tank farms and process areas add toxic gas exposure and heat stroke to routine inspections.'],
    ['steps', 'Terrain that stops wheels', 'Loose gravel, curbs, cable trenches, and steps are everywhere. Legs go where wheels cannot.']
  ];

  const pay = [
    ['thermo', 'Radiometric thermal', 'Finds hotspots on joints, bushings, and breakers before catastrophic flashover.'],
    ['zoom', '30x Optical zoom', 'Close inspection from a safe distance, with images saved as verifiable evidence.'],
    ['gauge', 'Gauge and dial reading', 'Vision models read analog gauges and level glasses, bringing legacy assets into the data stream.'],
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

      <Band>
        <Head eyebrow="The risk" title="Routine rounds put people in harm’s way." />
        <div className="cols3">
          {hazards.map(([ico, t, d], i) => (
            <IconCard key={ico} icon={ico} title={t} text={d} delay={i * 0.1} />
          ))}
        </div>
      </Band>

      <Band alt>
        <Head
          eyebrow="Payload"
          title="Six capabilities in one sealed unit."
          sub="Our engineering goes into what makes an inspection useful: sensing, autonomy, and analytics. The walking base is proven commercial hardware."
        />
        <div className="cols3">
          {pay.map(([ico, t, d], i) => (
            <IconCard key={ico} icon={ico} title={t} text={d} delay={i * 0.08} />
          ))}
        </div>
      </Band>

      <Band>
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

      <Band alt>
        <div className="two">
          <Reveal delay={0.1} y={24}>
            <div className="card">
              <Eyebrow>Commercial model</Eyebrow>
              <h3>Robotics as a Service</h3>
              <p>Plants pay from the operating budget. No large capital expenditure line item for unproven technology.</p>
              <div className="price">
                ₹1.5L to ₹2.5L <small>per month, indicative</small>
              </div>
              <ul className="checks">
                <li>Robot, sensor payload, and outdoor docking station</li>
                <li>Maintenance, battery swaps, and spare parts</li>
                <li>Continuous software and defect model updates</li>
                <li>Instant SAP and Maximo work-order integration</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={24}>
            <div className="card">
              <Eyebrow>Built for</Eyebrow>
              <h3>Where a missed fault is expensive</h3>
              <p>Power transmission utilities, oil and gas refineries, tank farms, and heavy steel/chemical plants.</p>
              <ul className="checks">
                <li>AIS and GIS substations from 220kV to 765kV</li>
                <li>Petrochemical refineries and tank storage farms</li>
                <li>Steel, smelting, and cement production lines</li>
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

function DynView() {
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

      <Band>
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

      <Band alt>
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

      <Band>
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

function PlatformView() {
  const cols = [
    ['Hardware', 'NVIDIA Jetson Orin compute, 3D LiDAR, radiometric thermal core, optical PTZ camera, and acoustic sensing on a commercial legged base.'],
    ['Software', 'ROS 2 Humble for the robot stack, with detection and OCR models trained in cloud simulation (Isaac Sim, Gazebo, MuJoCo) before field trials.'],
    ['Integrations', 'Inspection findings flow into SAP PM and IBM Maximo as automated work orders, with radiometric images and coordinate data attached.']
  ];
  const hard = [
    ['Shielded for high EMF', 'Braided grounding straps, shielded twisted pair cabling, and aluminum Faraday enclosures keep controllers and LiDAR steady near 400kV and above.'],
    ['Sealed for the site', 'IP65 enclosures and a weather-sealed charging dock protect against fine Indian dust, monsoons, and extreme heat.'],
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

      <Cta
        title="See it on your site."
        text="We start with one inspection route and grow from there."
        to="inspector"
        label="See Inspector"
      />
    </>
  );
}

function CompanyView() {
  const road = [
    ['Months 0 to 3', 'Validate & Model', 'Customer discovery with 25+ plant and substation managers, high-EMF requirements, and Isaac Sim physics validation.'],
    ['Months 3 to 6', 'Alpha Prototype', 'Sensor payload and ROS 2 autonomy stack integrated onto commercial quadruped base with Faraday enclosure.'],
    ['Months 6 to 9', 'Field Trials & Docking', 'Live supervised runs at an anchor utility switchyard, testing 48°C heat and autonomous contact charging dock.'],
    ['Months 9 to 12', 'Paid Pilot & Seed', 'Convert trial into annual RaaS contract (₹1.8L/mo), SAP integration live, and raise pre-seed from deep tech VCs.']
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
        sub="Unexpected Dynamics is an Indian robotics company. We start with industrial inspection and build toward robots that more people can own, teach, and build on."
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
        title="Building something similar, or want to help?"
        text="We regularly talk to engineers, plant teams, teachers, and investors."
        to="platform"
        label="Read the platform"
      />
    </>
  );
}

function ContactView() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHead
        eyebrow="Contact"
        title="Start a pilot, or follow Dyn."
        sub="Tell us where you work and what you would like a robot to do. Our engineering team replies within 24 hours."
        visual={
          <div className="card">
            <h3>Direct Contact</h3>
            <dl className="spec" style={{ margin: 0 }}>
              <dt>Email</dt>
              <dd>contact@unexpecteddynamics.com</dd>
              <dt>Location</dt>
              <dd>Bengaluru / Hyderabad, India</dd>
              <dt>Incubation</dt>
              <dd>IIT Madras / T-Hub Network</dd>
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
                <li>Substation voltage (220kV, 400kV, 765kV) or refinery unit</li>
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
                <div style={{ padding: '24px 0', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✓</div>
                  <h3 style={{ color: 'var(--accent)' }}>Assessment Request Received</h3>
                  <p style={{ marginTop: '8px', color: 'var(--muted)' }}>
                    Our field engineering team will contact you to schedule an initial site assessment.
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
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Facility / Plant Details</label>
                    <textarea
                      rows={3}
                      placeholder="400kV AIS switchyard, 2 bays, transformer bushing hotspot tracking..."
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
