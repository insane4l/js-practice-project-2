const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          menuItems = menu.querySelectorAll('li'),
          imagesWrapper = document.querySelector('.portfolio-wrapper'),
          allImages = imagesWrapper.querySelectorAll('.all'),
          noItems = document.querySelector('.portfolio-no');


    function setFilter(filter) {

        menu.querySelector(filter).addEventListener('click', (e) => {

            setActiveFilter(e.target);

            allImages.forEach( el => {
                el.style.display = 'none';
            });
            noItems.style.display = 'none';

            const images = imagesWrapper.querySelectorAll(filter);
            if (images.length > 0) {
                setTimeout(() => {
                    images.forEach( img => {
                        img.classList.add('animated', 'fadeIn');
                        img.style.display = "block";
                    });
                }, 0)
            } else {
                setTimeout(() => {
                    noItems.classList.add('animated', 'fadeIn');
                    noItems.style.display = 'block';
                }, 0)
                
            }
        });
    }

    function setActiveFilter(target) {
        if (target && target.tagName == "LI") {
            menuItems.forEach( item => item.classList.remove('active') );
            target.classList.add('active');
        }
    }

    setFilter('.all');
    setFilter('.lovers');
    setFilter('.chef');
    setFilter('.girl');
    setFilter('.guy');
    setFilter('.grandmother');
    setFilter('.granddad');
};

export default filter;