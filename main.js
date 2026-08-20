// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Hero content slide-in
  const heroContent = document.querySelector('.hero .reveal-content');
  if (heroContent) {
    new IntersectionObserver((entries) => {
      entries[0].isIntersecting && heroContent.classList.add('is-visible');
    }, { threshold: 0.3 }).observe(heroContent);
  }

  // Staggered title lines in hero
  const titleLines = document.querySelectorAll('.hero-title .line');
  if (titleLines.length) {
    let delay = 100;
    titleLines.forEach((line, i) => {
      setTimeout(() => line.classList.add('is-inview'), delay);
      delay += 250;
    });
  }

  // Mechanism diagram blur-to-clear
  const mechCards = document.querySelectorAll('.readout-card[data-revealed="false"]');
  if (mechCards.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.toggle('data-revealed', 'true'));
    }, { threshold: 0.4 });
    mechCards.forEach(card => obs.observe(card));
  }

  // Simulation mount scale-in
  const simMount = document.querySelector('.sim-mount[data-sim-ready="false"]');
  if (simMount) {
    new IntersectionObserver((entries) => {
      entries[0].isIntersecting && simMount.classList.toggle('data-sim-ready', 'true');
    }, { threshold: 0.3 }).observe(simMount);
  }

  // Policy decomposition visualizer trigger
  const policySection = document.getElementById('policy');
  if (policySection) {
    new IntersectionObserver((entries) => {
      entries[0].isIntersecting && policySection.classList.add('pol-decompose-triggered');
    }, { threshold: 0.2 }).observe(policySection);
  }
});
