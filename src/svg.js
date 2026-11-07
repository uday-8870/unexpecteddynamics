export const markSvg = (s = 36, pulse = false) => {
  const dot = (cx) =>
    `<circle cx="${cx}" cy="17" r="3" style="fill:var(--accent)${
      pulse ? ';transform-origin:' + cx + 'px 17px;animation:pulse 2s ease-in-out infinite' : ''
    }"/>`;
  return `<svg width="${s}" height="${s}" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M8 6h14a18 18 0 0 1 0 36H8z" style="stroke:var(--ink)" stroke-width="3.6" stroke-linejoin="round"/>
    <path d="M17 17v11a7 7 0 0 0 14 0V17" style="stroke:var(--accent)" stroke-width="3.6" stroke-linecap="round"/>
    ${dot(17)}${dot(31)}
  </svg>`;
};

const leg = (hx, d, far) => {
  const c = far ? 'var(--muted)' : 'var(--ink)';
  return `<g style="transform-origin:${hx}px 168px;animation:swing 1.2s linear ${d}s infinite">
    <line x1="${hx}" y1="168" x2="${hx}" y2="232" stroke-width="12" stroke-linecap="round" style="stroke:${c}"/>
    <g style="transform-origin:${hx}px 232px;animation:knee 1.2s linear ${d}s infinite">
      <line x1="${hx}" y1="232" x2="${hx}" y2="304" stroke-width="9" stroke-linecap="round" style="stroke:${c}"/>
      <circle cx="${hx}" cy="304" r="8" style="fill:${c}"/>
    </g>
    <circle cx="${hx}" cy="232" r="7" style="fill:var(--accent)"/>
  </g>`;
};

export const QUAD_SVG = `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cone" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" style="stop-color:var(--accent);stop-opacity:.5"/>
      <stop offset="1" style="stop-color:var(--accent);stop-opacity:0"/>
    </linearGradient>
  </defs>
  <line x1="0" y1="301" x2="560" y2="301" stroke-width="2" style="stroke:var(--ink)"/>
  <line x1="0" y1="316" x2="560" y2="316" stroke-width="2" stroke-dasharray="14 18" style="stroke:var(--muted);animation:ground 1.2s linear infinite"/>
  <line x1="0" y1="330" x2="560" y2="330" stroke-width="2" stroke-dasharray="6 26" style="stroke:var(--line);animation:ground 1.8s linear infinite"/>
  ${leg(198, 0, true)}
  ${leg(388, -0.6, true)}
  <rect x="140" y="104" width="270" height="72" rx="24" stroke-width="3" style="fill:var(--surface);stroke:var(--ink)"/>
  <path d="M180 124h60M180 136h60M180 148h60" stroke-width="3" stroke-linecap="round" style="stroke:var(--line)"/>
  <circle cx="372" cy="128" r="4" style="fill:var(--accent)"/>
  ${leg(182, -0.6, false)}
  ${leg(372, 0, false)}
  <circle cx="182" cy="168" r="10" style="fill:var(--ink)"/>
  <circle cx="182" cy="168" r="4" style="fill:var(--accent)"/>
  <circle cx="372" cy="168" r="10" style="fill:var(--ink)"/>
  <circle cx="372" cy="168" r="4" style="fill:var(--accent)"/>
  <g style="transform-origin:296px 76px;animation:sweep 3.4s ease-in-out infinite">
    <polygon points="296,76 556,8 556,152" style="fill:url(#cone)"/>
  </g>
  <rect x="235" y="86" width="100" height="22" rx="6" style="fill:var(--ink)"/>
  <circle cx="285" cy="76" r="20" stroke-width="3" style="fill:var(--surface);stroke:var(--ink)"/>
  <circle cx="296" cy="76" r="8" style="fill:var(--ink)"/>
  <circle cx="298" cy="74" r="2.4" style="fill:var(--accent)"/>
  <circle cx="412" cy="128" r="9" style="fill:var(--ink)"/>
  <circle cx="412" cy="128" r="9" fill="none" stroke-width="2" style="stroke:var(--teal);transform-origin:412px 128px;animation:ring 2s ease-out infinite"/>
  <path d="M248 52l22 14" stroke-width="1.5" style="stroke:var(--muted)"/>
  <text x="120" y="48" style="font:500 11px var(--mono);letter-spacing:.12em;fill:var(--muted)">THERMAL + ZOOM + ACOUSTIC</text>
  <text x="428" y="132" style="font:500 11px var(--mono);letter-spacing:.12em;fill:var(--muted)">LIDAR</text>
</svg>`;

export const YARD_SVG = (() => {
  const strings = [170, 320, 470]
    .map((x) => {
      let discs = '';
      for (let i = 0; i < 7; i++) {
        discs += `<rect x="${x - 9}" y="${78 + i * 12}" width="18" height="6" rx="3" stroke-width="1.6" style="fill:var(--surface);stroke:var(--ink)"/>`;
      }
      return `<line x1="${x}" y1="64" x2="${x}" y2="170" stroke-width="2" style="stroke:var(--muted)"/>${discs}<circle cx="${x}" cy="176" r="7" stroke-width="2.5" style="fill:var(--surface);stroke:var(--ink)"/>`;
    })
    .join('');
  const bush = [250, 325, 400]
    .map(
      (c) =>
        `<path d="M${c} 190V177" stroke-width="2" style="stroke:var(--muted)"/><rect x="${c - 6}" y="190" width="12" height="34" rx="3" stroke-width="2" style="fill:var(--surface);stroke:var(--ink)"/>`
    )
    .join('');
  let fins = '';
  for (let j = 0; j < 6; j++) {
    fins += `<line x1="${232 + j * 14}" y1="238" x2="${232 + j * 14}" y2="292" stroke-width="2" style="stroke:var(--line)"/>`;
  }
  return `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="hot">
        <stop offset="0" style="stop-color:var(--accent);stop-opacity:.9"/>
        <stop offset=".55" style="stop-color:var(--accent);stop-opacity:.35"/>
        <stop offset="1" style="stop-color:var(--accent);stop-opacity:0"/>
      </radialGradient>
    </defs>
    <text x="20" y="30" style="font:500 11px var(--mono);letter-spacing:.12em;fill:var(--muted)">400KV SWITCHYARD LIVE SCAN</text>
    <line x1="0" y1="304" x2="640" y2="304" stroke-width="2" style="stroke:var(--ink)"/>
    <path d="M70 304V64M570 304V64M50 64H590" stroke-width="5" stroke-linecap="round" style="stroke:var(--ink)"/>
    <path d="M70 176H570" stroke-width="3" style="stroke:var(--muted)"/>${strings}
    <rect x="210" y="222" width="230" height="82" rx="6" stroke-width="3" style="fill:var(--surface);stroke:var(--ink)"/>${bush}${fins}
    <circle cx="470" cy="176" r="46" style="fill:url(#hot);transform-origin:470px 176px;animation:pulse 1.8s ease-in-out infinite"/>
    <rect x="436" y="142" width="68" height="68" fill="none" stroke-width="2" stroke-dasharray="8 6" style="stroke:var(--accent);animation:dash 1s linear infinite"/>
    <path d="M486 240L474 212" stroke-width="2" style="stroke:var(--accent)"/>
    <rect x="446" y="240" width="186" height="30" rx="3" style="fill:var(--accent)"/>
    <text x="458" y="259" style="font:500 11px var(--mono);letter-spacing:.06em;fill:var(--on-accent)">HOTSPOT: 88.4°C (+43.2°C)</text>
    <g style="animation:scanx 5s linear infinite alternate">
      <rect x="36" y="40" width="40" height="264" style="fill:var(--teal);opacity:.12"/>
      <rect x="73" y="40" width="3" height="264" style="fill:var(--teal)"/>
    </g>
  </svg>`;
})();

export const DYN_SVG = `<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="180" cy="340" rx="86" ry="10" style="fill:var(--ink);opacity:.14;transform-origin:180px 340px;animation:shadow 3s ease-in-out infinite"/>
  <g style="animation:float 3s ease-in-out infinite">
    <circle cx="138" cy="300" r="24" style="fill:var(--ink)"/>
    <g style="transform-origin:138px 300px;animation:spin 1.6s linear infinite">
      <path d="M138 284v32M122 300h32" stroke-width="3" stroke-linecap="round" style="stroke:var(--teal)"/>
    </g>
    <circle cx="222" cy="300" r="24" style="fill:var(--ink)"/>
    <g style="transform-origin:222px 300px;animation:spin 1.6s linear infinite">
      <path d="M222 284v32M206 300h32" stroke-width="3" stroke-linecap="round" style="stroke:var(--teal)"/>
    </g>
    <rect x="104" y="176" width="152" height="116" rx="44" stroke-width="3" style="fill:var(--surface);stroke:var(--ink)"/>
    <circle cx="180" cy="226" r="9" style="fill:var(--teal);transform-origin:180px 226px;animation:pulse 1.6s ease-in-out infinite"/>
    <path d="M150 256h60M158 266h44" stroke-width="3" stroke-linecap="round" style="stroke:var(--line)"/>
    <path d="M104 214q-26 8-30 34" fill="none" stroke-width="8" stroke-linecap="round" style="stroke:var(--ink)"/>
    <circle cx="74" cy="252" r="8" style="fill:var(--accent)"/>
    <g style="transform-origin:256px 212px;animation:wave 1.6s ease-in-out infinite">
      <path d="M256 212q30-4 40-34" fill="none" stroke-width="8" stroke-linecap="round" style="stroke:var(--ink)"/>
      <circle cx="296" cy="176" r="8" style="fill:var(--accent)"/>
    </g>
    <g style="transform-origin:180px 74px;animation:wob 2.4s ease-in-out infinite">
      <line x1="180" y1="74" x2="180" y2="46" stroke-width="4" stroke-linecap="round" style="stroke:var(--ink)"/>
      <circle cx="180" cy="40" r="8" style="fill:var(--accent)"/>
    </g>
    <g style="transform-origin:180px 166px;animation:tilt 5s ease-in-out infinite">
      <rect x="104" y="104" width="10" height="32" rx="5" style="fill:var(--teal)"/>
      <rect x="246" y="104" width="10" height="32" rx="5" style="fill:var(--teal)"/>
      <rect x="114" y="74" width="132" height="92" rx="38" stroke-width="3" style="fill:var(--surface);stroke:var(--ink)"/>
      <rect x="130" y="90" width="100" height="60" rx="26" style="fill:var(--ink)"/>
      <ellipse cx="160" cy="120" rx="9" ry="12" style="fill:var(--teal);transform-origin:160px 120px;animation:blink 4.5s infinite"/>
      <ellipse cx="200" cy="120" rx="9" ry="12" style="fill:var(--teal);transform-origin:200px 120px;animation:blink 4.5s infinite"/>
    </g>
  </g>
</svg>`;

const svgi = (inner) =>
  `<svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

export const ICON = {
  radar: svgi(
    `<circle cx="24" cy="24" r="19"/><circle cx="24" cy="24" r="10" opacity=".5"/><g style="transform-origin:24px 24px;animation:spin 3s linear infinite"><path d="M24 24V5"/></g><circle cx="33" cy="15" r="2.6" fill="currentColor" stroke="none" style="transform-origin:33px 15px;animation:pulse 1.5s ease-in-out infinite"/>`
  ),
  thermo: svgi(
    `<path d="M20 30V10a4 4 0 0 1 8 0v20a8 8 0 1 1-8 0z"/><circle cx="24" cy="36" r="4.5" fill="currentColor" stroke="none" style="transform-origin:24px 36px;animation:pulse 1.4s ease-in-out infinite"/><path d="M24 36V18" style="stroke-dasharray:18;animation:rise 2.4s ease-in-out infinite alternate"/>`
  ),
  zoom: svgi(
    `<circle cx="21" cy="21" r="13"/><path d="M31 31l11 11"/><circle cx="21" cy="21" r="6" style="transform-origin:21px 21px;animation:pulse 2s ease-in-out infinite"/>`
  ),
  wave: svgi(
    [8, 16, 24, 32, 40]
      .map(
        (x, i) =>
          `<path d="M${x} 12V36" style="transform-origin:${x}px 24px;animation:bar 1.2s ease-in-out ${
            -i * 0.2
          }s infinite"/>`
      )
      .join('')
  ),
  gauge: svgi(
    `<path d="M7 35a17 17 0 0 1 34 0"/><g style="transform-origin:24px 35px;animation:needle 3s ease-in-out infinite"><path d="M24 35V19"/></g><circle cx="24" cy="35" r="2.5" fill="currentColor" stroke="none"/>`
  ),
  doc: svgi(
    `<path d="M12 5h17l8 8v30H12z"/><path d="M18 22h14M18 30h14" opacity=".5"/><path d="M17 38l4 4 9-9" style="stroke-dasharray:30;animation:draw 2s ease-out infinite alternate"/>`
  ),
  bolt: svgi(`<path d="M27 4L9 27h13l-3 17 20-25H26z" style="animation:flick 2.4s steps(1) infinite"/>`),
  cloud: svgi(
    `<g style="animation:drift 3s ease-in-out infinite"><path d="M14 36a8 8 0 0 1 0-16 10 10 0 0 1 19-2 9 9 0 0 1 1 18z"/></g>`
  ),
  steps: svgi(`<path d="M5 41h10V30h10V19h10V8h8" style="stroke-dasharray:8 5;animation:dash 1.2s linear infinite"/>`)
};

export const ARROW_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

export const THEME_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>`;
