// Scroll-reveal for sections
document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll(
    '.section h2, .section-lede, .consequence-card, .readout-card, .video-frame, .sim-mount'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
});

// --- Simulation mount stub ---
// The 3D debris visualization (three.js + satellite.js for TLE propagation)
// will initialize into #sim-canvas-mount. Left empty intentionally until
// the dataset and propagation logic are ready.
//
// Planned structure:
//   1. Fetch/parse TLE data (CelesTrak)
//   2. Propagate positions with satellite.js (SGP4)
//   3. Render points/orbits in three.js, mounted to #sim-canvas-mount
//   4. Wire up click/hover interaction for object info
