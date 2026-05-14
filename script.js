document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const htmlElement = document.documentElement;

  themeToggle.addEventListener('click', () => {
    const isDark = htmlElement.classList.toggle('light-theme');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  });

  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
