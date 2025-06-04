window.onload = () => {
const contactBtn = document.getElementById('ContactBtn');
const modal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close');
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dotsNav = document.querySelector('.carousel-dots');
const dots = Array.from(dotsNav.children);

let currentSlide = 0;

contactBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === modal) {
      modal.style.display = 'none';
  }
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
  }
});

function updateCarousel(position) {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${position * slideWidth}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[position].classList.add('active');
}

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel(currentSlide);
});

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateCarousel(currentSlide);
  });
});
window.addEventListener('resize', () => updateCarousel(currentSlide));


const menu = document.getElementById('barsIcon');
const containerMenu = document.querySelector('.mobile-menu');
const Header = document.getElementById('header');
const navLinks = document.querySelectorAll('.mobile-menu a');

// Toggle menu la click pe iconiță
menu.addEventListener('click', () => {
  containerMenu.classList.toggle('hidden');
  Header.classList.toggle('bkg');
});

// Închide meniul după click pe un link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      containerMenu.classList.add('hidden');
    });
  });
}