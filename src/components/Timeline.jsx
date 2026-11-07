import React, { useRef, useState, useEffect } from 'react';
import Reveal from './Reveal';

export default function Timeline({ items }) {
  const containerRef = useRef(null);
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;
      const top = rect.top;
      const height = rect.height;

      const progress = (start - top) / (height + (start - end));
      setFillProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="scroll-timeline-container">
      <div className="scroll-timeline-track">
        <div
          className="scroll-timeline-fill"
          style={{ height: `${fillProgress * 100}%` }}
        />
      </div>

      <div className="scroll-timeline-steps">
        {items.map(([time, title, desc], i) => {
          const itemThreshold = i / (items.length - 1 || 1);
          const isActive = fillProgress >= itemThreshold * 0.9;

          return (
            <Reveal key={title} delay={i * 0.1} y={20}>
              <div className={`scroll-timeline-node ${isActive ? 'active' : ''}`}>
                <div className="timeline-node-marker">
                  <div className="marker-dot" />
                </div>
                <div className="timeline-node-content">
                  <span className="mono">{time}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
