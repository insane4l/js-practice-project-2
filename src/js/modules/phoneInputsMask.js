const phoneMask = () => {

    const inputs = document.querySelectorAll('[name="phone"]');

    const setCursorPosition = (pos, elem) => {
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) { // for old browsers (if setSelectionRange not supported)
            let range = elem.createTextRange();

            range.collapse(true); // default but just in case
            range.moveEnd('character', pos); 
            range.moveStart('character', pos); // selection start = selection end
            range.select(); // select (move cursor)
        }
    };

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
              i = 0,
              def = matrix.replace(/\D/g, ''),
              val = this.value.replace(/\D/g, '');
        
        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }


    inputs.forEach( input => {
        input.addEventListener('focus', createMask);
        input.addEventListener('input', createMask);
        input.addEventListener('blur', createMask);
    })

};

export default phoneMask;