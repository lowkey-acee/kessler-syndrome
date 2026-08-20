// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Hero content slide-in on scroll
  const heroContent = document.querySelector('.hero .reveal-content');
  if (heroContent) {
    new IntersectionObserver((entries) => entries[0].isIntersecting && heroContent.classList.add('is-visible'), { threshold: 0.3 }).observe(heroContent);
  }

  // Staggered title lines
  const titleLines = document.querySelectorAll('.hero-title .line');
  if (titleLines.length) {
    titleLines.forEach((line, i) => setTimeout(() => line.classList.add('is-inview'), 100 + i * 250));
  }

  // Mechanism diagram blur-to-clear
  const mechCards = document.querySelectorAll('.readout-card[data-revealed="false"]');
  if (mechCards.length) {
    new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.toggle('data-revealed', 'true')), { threshold: 0.4 }).observe(...mechCards);
  }

  // Simulation mount scale-in
  const simMount = document.querySelector('.sim-mount[data-sim-ready="false"]');
  if (simMount) {
    new IntersectionObserver((entries) => entries[0].isIntersecting && simMount.classList.toggle('data-sim-ready', 'true'), { threshold: 0.3 }).observe(simMount);
  }

  // Policy decomposition trigger
  const polSection = document.getElementById('policy');
  if (polSection) {
    new IntersectionObserver((entries) => entries[0].isIntersecting && polSection.classList.add('pol-decompose-triggered'), { threshold: 0.2 }).observe(polSection);
  }

  // Run decomposition JS when triggered
  window.pol-decompose-triggered = () => {
    const vis = document.getElementById('pol-decompose-vis');
    if (vis) {
      const cx = 140; const cy = 120;
      for (let i = 0; i < 35; i++) {
        const p = document.createElement('div');
        p.className = 'decompose-particle';
        const angle = (i / 35) * Math.PI * 2;
        const dist = 40 + Math.random() * 60;
        p.style.left = cx + Math.cos(angle) * dist + 'px';
        p.style.top = cy + Math.sin(angle) * dist + 'px';
        p.style.animationDelay = `${i * 0.1}s`;
        vis.appendChild(p);
      }
    }
  };
});
