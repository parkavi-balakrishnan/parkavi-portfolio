const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, {threshold: .12});

document.querySelectorAll('.project, .timeline-item, .skill-cloud span, .about-grid').forEach(el => {
  el.classList.add('reveal');
  reveal.observe(el);
});
