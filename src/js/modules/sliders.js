const sliders = () => {
    const bindSlider = (slides, direction, time, prevSelector, nextSelector) => {
        const items = document.querySelectorAll(slides);
    
        let slideNum = 1;
        let timerId;

        function showSlide(num) {
            items.forEach( item => {
                item.style.display = 'none';
                item.classList.add('animated');
            })

            items[num - 1].style.display = 'block';
        }

        function changeSlide(n) {
            slideNum += n;

            if (slideNum < 1) {
                slideNum = items.length;
            }
            if (slideNum > items.length) {
                slideNum = 1;
            }

            showSlide(slideNum);
        }

        function showPrevSlide() {
            changeSlide(-1);
            items[slideNum - 1].classList.remove('slideInRight');
            items[slideNum - 1].classList.add('slideInLeft');
        }

        function showNextSlide() {
            changeSlide(1);
            items[slideNum - 1].classList.remove('slideInLeft');
            items[slideNum - 1].classList.add('slideInRight');
        }


        try {
            const prevBtn = document.querySelector(prevSelector),
                  nextBtn = document.querySelector(nextSelector);
            
            prevBtn.addEventListener('click', showPrevSlide);
            nextBtn.addEventListener('click', showNextSlide);
        } catch(e) {

        }


        function activateAnimation() {
            if (direction === 'vertical') {
                timerId = setInterval(() => {
                    changeSlide(1);
                    items[slideNum - 1].classList.add('slideInUp');
                }, time);
            } else {
                timerId = setInterval(showNextSlide, time);
            }
        }

        items[0].parentNode.addEventListener('mouseenter', () => {
            clearInterval(timerId);
        });

        items[0].parentNode.addEventListener('mouseleave', () => {
            activateAnimation();
        });
        

        activateAnimation();
        showSlide(slideNum);
    };


    bindSlider('.main-slider-item', 'vertical', 3000);
    bindSlider('.feedback-slider-item', 'horizontal', 5000, '.main-prev-btn', '.main-next-btn');
};

export default sliders;