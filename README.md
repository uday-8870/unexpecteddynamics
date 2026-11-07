# Unexpected Dynamics — Official Production Website

Autonomous quadruped inspection robotics for extreme industrial environments: 220kV–765kV electrical switchyards, oil refineries, and heavy infrastructure in India.

## Features
- **Vite + React 18 Architecture**: Blazing-fast development and optimized production builds.
- **Apple-Style Scroll-Driven Animations**:
  - Sticky top scroll progress tracker.
  - `Reveal.jsx`: Smooth cubic-bezier viewport entry animations (`IntersectionObserver`).
  - `Timeline.jsx`: Dynamic vertical track fill that updates as you scroll through the 12-month roadmap.
- **Autonomous Substation Telemetry & Vector Graphics**:
  - Fully animated Inspector quadruped robot with synchronized trot kinematics, rotating LiDAR, and scanning sensor cone.
  - Live 400kV switchyard thermal scan with radiometric hotspot detection.
  - Friendly Dyn concept robot with waving arm, blinking LED eyes, and wobbling antenna.
- **Production & Hosting Ready**:
  - `public/_redirects` for single-page application routing on Netlify / Cloudflare Pages.
  - Complete `robots.txt`, `sitemap.xml`, and vector `favicon.svg`.
  - Built-in light and dark mode with persistent user preference.

## Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Production Build & Preview
```bash
# Generate optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Hosting on Your Custom Domain
1. **Netlify**: Connect your GitHub repository or drag and drop the `dist/` folder. Netlify uses `_redirects` automatically.
2. **Vercel**: Run `vercel` or link your repo; select `Vite` preset.
3. **Cloudflare Pages**: Set build command to `npm run build` and output directory to `dist`.
4. **Custom VPS / Nginx / Apache**: Serve the contents of `dist/` and configure fallback to `index.html`.
