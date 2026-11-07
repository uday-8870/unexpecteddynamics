import React from 'react';
import Raw from './Raw';
import { markSvg } from '../svg';

export default function Lockup() {
  return (
    <>
      <Raw html={markSvg(36)} className="mk" />
      <div className="wm">
        <b>Unexpected</b>
        <i>Dynamics</i>
      </div>
    </>
  );
}
