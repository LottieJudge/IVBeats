let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

setInterval(showSlide, 3000);  
  