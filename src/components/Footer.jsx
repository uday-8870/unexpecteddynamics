import React from 'react';
import Lockup from './Lockup';

export default function Footer({ routes }) {
  return (
    <footer className="ftr band" style={{ borderBottom: 0, paddingBlock: '56px 64px' }}>
      <div className="wrap">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 360 }}>
          <div className="brand" style={{ minHeight: 0 }}>
            <Lockup />
          </div>
          <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6 }}>
            Robots for the work that cannot wait, and for the next generation learning to build them.
          </p>
        </div>
        <div className="col2">
          {routes.slice(0, 3).map(([key, label]) => (
            <a key={key} href={`#${key}`}>{label}</a>
          ))}
        </div>
        <div className="col2">
          {routes.slice(3).map(([key, label]) => (
            <a key={key} href={`#${key}`}>{label}</a>
          ))}
        </div>
        <div className="legal">
          © 2026 Unexpected Dynamics Pvt Ltd. Engineered in India for extreme terrains.
        </div>
      </div>
    </footer>
  );
}
