const showMoreStyles = () => {
    const cards = document.querySelectorAll('.styles-2'),
          btn = document.querySelector('.button-styles');
    
    cards.forEach( card => {
        card.classList.add('animated', 'fadeInUp');
    });
    
    btn.addEventListener('click', () => {
        cards.forEach( card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        cards[0].parentNode.style.marginBottom = '8rem';
        document.querySelector('.styles .paints').style.bottom = '-40rem';
        btn.remove();
    });
};

export default showMoreStyles;