

const slides1 = document.querySelectorAll('.slide1');
const slider1 = document.querySelector('.hero-slider');
let currentIndex = 0;

function nextSlide1() {
    currentIndex = (currentIndex + 1) % slides1.length;
    slider1.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide1, 2000); 


