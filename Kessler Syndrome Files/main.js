document.addEventListener('DOMContentLoaded', () => {
  // Hero slide-in on scroll
  const hero = document.querySelector('.hero');
  if (hero) {
    new IntersectionObserver((entries) => entries[0].isIntersecting && hero.classList.add('is-visible'), { threshold: 0.4 }).observe(hero);
  }

  // Staggered title lines
  const lines = document.querySelectorAll('.hero-title .line');
  if (lines.length) {
    lines.forEach((l, i) => setTimeout(() => l.classList.add('is-inview'), 150 + i * 280));
  }

  // Mechanism blur-to-clear
  const mechCards = document.querySelectorAll('.readout-card[data-revealed="false"]');
  if (mechCards.length) {
    new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.toggle('data-revealed', 'true')), { threshold: 0.3 }).observe(...mechCards);
  }

  // Policy decomposition trigger
  const polSection = document.getElementById('policy');
  if (polSection) {
    new IntersectionObserver((entries) => entries[0].isIntersecting && polSection.classList.add('pol-decompose-triggered'), { threshold: 0.2 }).observe(polSection);

    // Fixed variable name (no hyphens allowed in JS)
    window.triggerDecomposition = () => {
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
        p.style.animationDelay = `${i * 0.1}s`;
        vis.appendChild(p);
      }
    };
  }
});
