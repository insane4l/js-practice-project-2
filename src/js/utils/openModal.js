import calcScroll from "./calcScroll";

const openModal = (modal, display = 'block') => {
    const bodyScrollWidth = calcScroll();

    modal.classList.add('animated', 'fadeIn');
    modal.style.display = display;
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${bodyScrollWidth}px`
};

export default openModal;