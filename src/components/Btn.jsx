import React from 'react';
import { ARROW_SVG } from '../svg';

export default function Btn({ to, kind = '', children, onClick }) {
  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <a href={`#${to}`} className={`btn ${kind}`} onClick={handleClick}>
      <span>{children}</span>
      <span className="arr" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ARROW_SVG }} />
    </a>
  );
}
