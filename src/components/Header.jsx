import React from 'react';
import Lockup from './Lockup';
import { THEME_SVG } from '../svg';
import { useScrollProgress } from '../hooks';

export default function Header({ route, toggleTheme, routes }) {
  const scrollProgress = useScrollProgress();

  return (
    <>
      <div
        className="top-scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
      <header className="hdr">
        <div className="wrap">
          <a href="#home" className="brand" aria-label="Unexpected Dynamics, home">
            <Lockup />
          </a>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0 16px' }}>
            <nav className="nav" aria-label="Main">
              {routes.map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  aria-current={route === key ? 'page' : undefined}
                >
                  {label}
                </a>
              ))}
            </nav>
            <button
              className="tbtn"
              type="button"
              aria-label="Switch light and dark theme"
              onClick={toggleTheme}
              dangerouslySetInnerHTML={{ __html: THEME_SVG }}
            />
          </div>
        </div>
      </header>
    </>
  );
}
