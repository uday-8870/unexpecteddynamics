import React from 'react';

export default function Raw({ html, className = '', label }) {
  const props = {
    className,
    dangerouslySetInnerHTML: { __html: html }
  };
  if (label) {
    props.role = 'img';
    props['aria-label'] = label;
  } else {
    props['aria-hidden'] = 'true';
  }
  return <div {...props} />;
}
