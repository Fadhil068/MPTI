// Mobile navbar toggle
const toggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Set active nav link berdasarkan halaman aktif
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});