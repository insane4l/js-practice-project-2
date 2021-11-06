import openModal from "../utils/openModal";
import closeModals from "../utils/closeModals";

const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector, closeOnOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = modal.querySelector(closeSelector),
              allModals = document.querySelectorAll('[data-modal]');

        trigger.forEach( el => {
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                closeModals(undefined, allModals);
                openModal(modal);
            })
        });

        close.addEventListener('click', () => {
            closeModals(modal, allModals);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeOnOverlay) {
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
            })

            if (!display) {
                openModal(document.querySelector(modalSelector))
            }
        }, time)
    }

    

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    
    showModalByTime('.popup-consultation', 60000);
};

export default modals;