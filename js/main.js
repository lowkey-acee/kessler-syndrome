document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (hero) { requestAnimationFrame(() => hero.classList.add('is-visible')); }

  const lines = document.querySelectorAll('.hero-title .line');
  if (lines.length) lines.forEach((l, i) => setTimeout(() => l.classList.add('is-inview'), 120 + i * 300));

  const revealObserver = new IntersectionObserver(
    (entries) => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal, .readout-card[data-revealed="false"], .sim-mount[data-sim-ready="false"]').forEach(el => revealObserver.observe(el));

  const policySection = document.getElementById('policy');
  if (policySection) {
    policySection.addEventListener('mouseenter', () => {
      const vis = document.getElementById('pol-decompose-vis');
      if (!vis || window.decomposed) return;
      window.decomposed = true;
      const cx = 140; const cy = 120;
      for (let i = 0; i < 35; i++) {
        const p = document.createElement('div');
        p.className = 'decompose-particle';
        const angle = (i / 35) * Math.PI * 2;
        const dist = 40 + Math.random() * 60;
        p.style.left = cx + Math.cos(angle) * dist + 'px';
        p.style.top = cy + Math.sin(angle) * dist + 'px';
        p.style.animationDelay = `${i * 0.12}s`;
        vis.appendChild(p);
      }
    });

    policySection.addEventListener('mouseleave', () => {
      const vis = document.getElementById('pol-decompose-vis');
      if (vis && !window.decomposed) vis.innerHTML = '';
    });
  }
});
