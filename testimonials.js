const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoSlideInterval;
let startX = 0;
let endX = 0;

/* ---------- SHOW SLIDE ---------- */
function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove('active');
    slide.style.opacity = '0';
  });

  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  slides[index].style.opacity = '1';
  dots[index].classList.add('active');

  currentSlide = index;
}

/* ---------- AUTO SLIDE ---------- */
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }, 6000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

/* ---------- DOT CLICK ---------- */
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    stopAutoSlide();
    showSlide(index);
    startAutoSlide();
  });
});

/* ---------- SWIPE SUPPORT ---------- */
const testimonialContainer = document.querySelector('.testimonial-card');

testimonialContainer.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  stopAutoSlide();
});

testimonialContainer.addEventListener('touchend', e => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
  startAutoSlide();
});

testimonialContainer.addEventListener('mousedown', e => {
  startX = e.clientX;
  stopAutoSlide();
});

testimonialContainer.addEventListener('mouseup', e => {
  endX = e.clientX;
  handleSwipe();
  startAutoSlide();
});

/* ---------- HANDLE SWIPE ---------- */
function handleSwipe() {
  const swipeDistance = endX - startX;

  if (swipeDistance > 50) {
    // Swipe right
    let prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevSlide);
  } else if (swipeDistance < -50) {
    // Swipe left
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }
}

/* ---------- INIT ---------- */
showSlide(0);
startAutoSlide();
