const textFieldsValidation = () => {

    function bindFieldsValidation(fieldSelector) { // Cyrillic characters only (and numbers)
        const inputs = document.querySelectorAll(fieldSelector);

        inputs.forEach( el => {
            el.addEventListener('keypress', (e) => {
                if ( e.key.match(/[^а-яё 0-9]/ig) ) {
                    e.preventDefault(); 
                }
            });
        });
    }

    bindFieldsValidation('[name="name"]');
    bindFieldsValidation('[name="message"]');
};

export default textFieldsValidation;