let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

setInterval(showSlide, 3000);  

// adding in functionality for the logo overlay 
document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('logo-overlay');
  function showMainSite() {
      document.body.classList.add('show-main');
      overlay.style.display = 'none';
      // Optionally, remove event listeners here
  }
  overlay.addEventListener('click', showMainSite);
  overlay.addEventListener('keydown', showMainSite);
  overlay.addEventListener('mousemove', showMainSite);
  overlay.tabIndex = 0; // Make it focusable for keydown
  overlay.focus();
});