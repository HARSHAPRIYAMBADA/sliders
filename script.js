const visibleSlides = 3;
const slideState = {
  projects: 0,
  events: 0
};

function updateSlide(containerId) {
  const container = document.getElementById(containerId).querySelector('.carousel-track');
  const totalSlides = container.children.length;
  const index = slideState[containerId];

  const slideWidth = container.clientWidth / totalSlides;
  const offset = (100 / totalSlides) * index;
  container.style.transform = `translateX(-${offset}%)`;
}

function nextSlide(containerId) {
  const container = document.getElementById(containerId).querySelector('.carousel-track');
  const totalSlides = container.children.length;

  if (slideState[containerId] < totalSlides - visibleSlides) {
    slideState[containerId]++;
  } else {
    slideState[containerId] = 0;
  }

  updateSlide(containerId);
}

function prevSlide(containerId) {
  const container = document.getElementById(containerId).querySelector('.carousel-track');
  const totalSlides = container.children.length;

  if (slideState[containerId] > 0) {
    slideState[containerId]--;
  } else {
    slideState[containerId] = totalSlides - visibleSlides;
  }

  updateSlide(containerId);
}

// Auto-scroll
setInterval(() => {
  nextSlide('projects');
  nextSlide('events');
}, 4000);
