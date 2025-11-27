document.addEventListener('DOMContentLoaded',function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.nextBtn');
    const dots = document.querySelectorAll('.dot');

    let currentSlide = 0;
    const slideCount = slides.length;

    updateSlider();

    let slideInrerval = setInterval (nextSlide, 5000);

    function nextSlide(){
        currentSlide = (currentSlide + 1) %
        slideCount;
        updateSlider();
        resetInerval();
    }

    document.addEventListener('DOMContentLoaded',
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateSlider();
            resetInterval();
        }

        function updateSlider() {
            slider.computedStyleMap.transform = translateX(-$
                {currentSlide * 100}%
            );

            dots.forEach((dot,index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function resetInterval() {
            clearInterval(slideIntrerval);
            slideIntrerval = setInterval(nextSlide, 5000);
        }
        document.addEventListener('DOMContentLoaded', function () {
                nextBtn.addEventListener('click', ()=> {
                 currentSlide = index;
                 updateSlider();
                 resetInterval();
                });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key ==='ArrowLeft'){
                prevSlide();
            }
        });
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideIntrerval);
        });
    )
})