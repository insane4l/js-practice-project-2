import { getData } from "../services/requests";

const showMoreStyles = () => {
    const btn = document.querySelector('.button-styles'),
          cardsWrapper = document.querySelector('.styles .row');

    btn.addEventListener('click', function() {
        getData('assets/db.json')
            .then( res => {
                document.querySelector('.styles .paints').style.bottom = '-40rem';
                setTimeout(() => {
                    createCards(res.styles);
                }, 800)
            })
            .catch( error => console.log(error) );

        this.remove();
    });


    const createCards = (items) => {
        items.forEach( ({src, title, link}) => {
            const div = document.createElement('div');

            div.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
            div.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
            
            cardsWrapper.appendChild(div);

            cardsWrapper.style.marginBottom = '8rem';
        });
    };
    
};

export default showMoreStyles;