const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');

let currentIndex = 0;
const totalSlides = slides.length;


function updateSlider() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentIndex].classList.add('active');
    counter.textContent = `Изображение ${currentIndex + 1} из ${totalSlides}`;
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateSlider();
});

updateSlider();