const imageSlider = (function () {
  function init() {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    const prevButton = slider.querySelector('.prev');
    const nextButton = slider.querySelector('.next');
    let currentIndex = 0;
    let interval;

    function changeSlide(newIndex) {
      slides[currentIndex].classList.remove('active');
      currentIndex = newIndex;
      slides[currentIndex].classList.add('active');
    }

    function autoSlide() {
      changeSlide((currentIndex + 1) % slides.length);
    }

    function startAutoSlide() {
      interval = setInterval(autoSlide, 3000);
    }

    function stopAutoSlide() {
      clearInterval(interval);
    }

    prevButton.addEventListener('click', () => {
      stopAutoSlide();
      changeSlide((currentIndex - 1 + slides.length) % slides.length);
      startAutoSlide();
    });

    nextButton.addEventListener('click', () => {
      stopAutoSlide();
      changeSlide((currentIndex + 1) % slides.length);
      startAutoSlide();
    });

    startAutoSlide();
  }

  return {
    init: init,
  };
})();

imageSlider.init();

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('menu-link').addEventListener('click', function(event) {
        event.preventDefault();
        
        fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = data;
            contentDiv.id = 'menu'; // Update the ID to 'menu'
            
            // Jump to the newly populated 'menu' section
            window.location.hash = 'menu';
        });
    });
});



