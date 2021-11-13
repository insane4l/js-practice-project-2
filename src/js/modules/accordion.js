const accordion = () => {
    const buttons = document.querySelectorAll('.accordion-heading');

    function showDescr(trigger) {
        const content = trigger.nextElementSibling;

        trigger.classList.toggle('ui-accordion-header-active');
        content.classList.toggle('ui-accordion-content-active');

        if ( trigger.classList.contains('ui-accordion-header-active') ) {
            content.style.maxHeight = `${content.scrollHeight + 80}px`;
        } else {
            content.style.maxHeight = `0px`;
        }
    }

    buttons.forEach( btn => {
        btn.addEventListener('click', () => {
            showDescr(btn);
        })
    });
};

export default accordion;