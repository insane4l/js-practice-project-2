const dropFiles = () => {
    const inputs = document.querySelectorAll('[name="upload"]');

    ['dragover', 'dragenter', 'dragleave', 'drop'].forEach( event => {
        inputs.forEach( input => {
            input.addEventListener(event, preventDefaults, false);
        });
    });

    ['dragover', 'dragenter'].forEach( event => {
        inputs.forEach( input => {
            input.addEventListener(event, () => flashElement(input), false);
        });
    });

    ['dragleave', 'drop'].forEach( event => {
        inputs.forEach( input => {
            input.addEventListener(event, () => unflashElement(input), false);
        });
    });

    inputs.forEach( input => {
        input.addEventListener( 'drop', (e) => changeFileInput(e, input) );
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function flashElement(el) {
        el.closest('.file_upload').style.border = '2px solid pink';
        el.closest('.file_upload').style.background = 'rgba(0, 0, 0, .3)';
    }

    function unflashElement(el) {
        el.closest('.file_upload').style.border = '';
        el.closest('.file_upload').style.background = '';
    }

    function changeFileInput(event, input) {
        debugger;
        input.files = event.dataTransfer.files;

        let name = input.files[0].name;

        if (name.length > 15) {
            const arr = name.split('.');
            name = `${arr[0].substring(0, 11)}...${arr[1]}`
        }

        input.previousElementSibling.textContent = name;
    }
};

export default dropFiles;