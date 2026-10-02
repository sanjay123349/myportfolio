// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  if (window.lucide) lucide.createIcons();
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.innerHTML = '<i data-lucide="menu"></i>';
  if (window.lucide) lucide.createIcons();
}));

// Theme toggle with saved preference
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('sanjay-portfolio-theme');
if (savedTheme === 'light') document.body.classList.add('light-theme');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('sanjay-portfolio-theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Copy email action
const copyEmailButton = document.getElementById('copyEmail');
const copyFeedback = document.getElementById('copyFeedback');
copyEmailButton?.addEventListener('click', async () => {
  const email = copyEmailButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyFeedback.textContent = 'Email copied to clipboard!';
  } catch {
    copyFeedback.textContent = email;
  }
});

// Footer year + icons
document.getElementById('year').textContent = new Date().getFullYear();
if (window.lucide) lucide.createIcons();
