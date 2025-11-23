# Physiotherapist Portfolio — Minimal Static Site

Files added:
- `index.html` — main site (auto-filled with CV details)
- `styles.css` — styles
- `script.js` — small interactions
- `three-scene.js` — lightweight Three.js hero background
- `cv profile.pdf` — your resume (already in workspace)

How to preview locally (PowerShell):
```powershell
cd "c:\Users\Admin\OneDrive\Desktop\AI\Portfolio\giripriya_portfolio"
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Visual improvements added:
- A lightweight Three.js animated hero background (`three-scene.js`) — uses CDN, disabled automatically on small screens for performance.
- The site is auto-filled with your CV details (name, contact, education, selected experience and research). Review `index.html` and let me know any corrections.

Performance notes:
- The 3D background is skipped on screens under ~700px width to preserve battery and CPU on mobile devices.
- If you want an even lighter version, I can provide a static image fallback or toggle control in the header.

Next steps I can take (pick one or more):
- Tune the hero animation (colors, speed) and visuals to match references like Lusion, Lamborghini and Apple.
- Add a gallery or case-study pages with before/after visuals.
- Convert to React + Vite for easier extensibility, componentisation and deployment.
- Add contact form backend or integrate a service (Formspree, Netlify Forms).
# Physiotherapist Portfolio — Minimal Static Site

Files added:
- `index.html` — main site
- `styles.css` — styles
- `script.js` — small interactions
- `cv profile.pdf` — your resume (already in workspace)

How to preview locally (PowerShell):
```powershell
cd "c:\Users\Admin\OneDrive\Desktop\AI\Portfolio\giripriya_portfolio"
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Notes & next steps:
- Replace placeholders like `Dr. [Your Name]`, contact details and clinic info with real values from `cv profile.pdf`.
- I can extract text from `cv profile.pdf` and auto-fill the About/metrics if you want.
- If you prefer a build setup (React/Vite), I can scaffold that next.
