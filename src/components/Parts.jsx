import React from 'react';
import Raw from './Raw';
import Btn from './Btn';
import Reveal from './Reveal';
import { ICON } from '../svg';

export function Eyebrow({ tone, children }) {
  return <span className={`eyebrow${tone ? ' ' + tone : ''}`}>{children}</span>;
}

export function Band({ alt, grid, hero, children, className = '' }) {
  return (
    <section className={`band${alt ? ' alt' : ''}${grid ? ' grid' : ''}${hero ? ' hero' : ''} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Head({ eyebrow, tone, title, sub }) {
  return (
    <Reveal y={24}>
      <div className="head">
        {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
        <h2>{title}</h2>
        {sub && <p className="lede">{sub}</p>}
      </div>
    </Reveal>
  );
}

export function IconCard({ icon, tone, title, text, delay = 0 }) {
  return (
    <Reveal delay={delay} y={24}>
      <div className="card">
        <Raw html={ICON[icon]} className={`ico${tone ? ' ' + tone : ''}`} />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Reveal>
  );
}

export function Cta({ title, text, to, label }) {
  return (
    <Band alt>
      <Reveal y={20}>
        <div className="head" style={{ marginBottom: 28 }}>
          <h2>{title}</h2>
          <p className="lede">{text}</p>
        </div>
        <div className="btns">
          <Btn to="contact" kind="primary">Talk to us</Btn>
          <Btn to={to}>{label}</Btn>
        </div>
      </Reveal>
    </Band>
  );
}

export function PageHead({ eyebrow, tone, title, sub, visual, extra }) {
  return (
    <section className="band grid hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Reveal y={20} delay={0.05}>
            {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
          </Reveal>
          <Reveal y={30} delay={0.15}>
            <h1>{title}</h1>
          </Reveal>
          <Reveal y={30} delay={0.25}>
            <p className="lede">{sub}</p>
          </Reveal>
          {extra && (
            <Reveal y={20} delay={0.35}>
              {extra}
            </Reveal>
          )}
        </div>
        <Reveal y={40} delay={0.2} scale={0.96}>
          {visual}
        </Reveal>
      </div>
    </section>
  );
}

export function Pipeline({ steps }) {
  return (
    <div className="pipe">
      {steps.map(([title, desc], i) => (
        <Reveal key={title} delay={i * 0.12} y={24}>
          <div className="pstep">
            <div className="pbar">
              <i style={{ animationDelay: `${i * 0.5}s` }} />
            </div>
            <span className="mono">Stage {i + 1}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
