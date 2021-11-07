import openModal from "../utils/openModal";
import closeModals from "../utils/closeModals";

const modals = () => {

    let isAnyBtnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroyTrigger = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = modal.querySelector(closeSelector),
              allModals = document.querySelectorAll('[data-modal]');

        trigger.forEach( el => {
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                isAnyBtnPressed = true;

                if (destroyTrigger) {
                    el.remove();
                }

                closeModals(undefined, allModals);
                openModal(modal);
            })
        });

        close.addEventListener('click', () => {
            closeModals(modal, allModals);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModals(modal, allModals);
            }
        });
    }

    function showModalByTime(modalSelector, time) {
        setTimeout( () => {
            const allModals = document.querySelectorAll('[data-modal]');
            let display;

            allModals.forEach( modal => {
                if ( getComputedStyle(modal).display !== 'none' ) {
                    display = 'block';
                }
            });

            if (!display) {
                openModal(document.querySelector(modalSelector))
            }
        }, time)
    }

    function showModalByScroll(triggerSelector) {
        window.addEventListener('scroll', () => {

            // document.documentElement.scrollHeight for "full standards mode"
            // document.body.scrollHeight for "almost standards mode"
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if (!isAnyBtnPressed && window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) {
                document.querySelector(triggerSelector).click();
            }
        });
        
    }

    

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    
    showModalByTime('.popup-consultation', 60000);
    showModalByScroll('.fixed-gift');
};

export default modals;