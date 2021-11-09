import { postData } from "../services/requests";

const forms = () => {
    const allForms = document.querySelectorAll('form'),
          uploads = document.querySelectorAll('[name="upload"]');


    const message = {
        loading: 'Отправка данных...',
        success: 'Спасибо! Мы свяжемся с вами в ближайшее время',
        failure: 'Произошла ошибка. Пожалуйста перезагрузите страницу и попробуйте заново',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    }

    uploads.forEach( el => {
        el.addEventListener('input', () => {
            let name = el.files[0].name;

            if (name.length > 15) {
                const arr = name.split('.');
                name = `${arr[0].substring(0, 11)}...${arr[1]}`
            }

            el.previousElementSibling.textContent = name;
        })
    })

    allForms.forEach( form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusBlock = document.createElement('div');
            statusBlock.classList.add('status');
            form.parentNode.appendChild(statusBlock);

            form.style.display = 'none';

            const statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeIn');
            statusBlock.appendChild(statusImg);

            const statusText = document.createElement('div');
            statusText.textContent = message.loading;
            statusBlock.appendChild(statusText);

            const formData = new FormData(form);
            if ( form.classList.contains('calc_form') ) {

                function appendCalcData(key, selector) {
                    const field = document.querySelector(selector);
                    formData.append(key, `Option: ${field.options[field.selectedIndex].text} price: ${field.value}`);
                }

                appendCalcData('size', '#size');
                appendCalcData('material', '#material');
                appendCalcData('options', '#options');

                let totalPrice = document.querySelector('.calc-price');
                totalPrice = totalPrice.textContent || totalPrice.innerText; // textContent for FireFox, innerText for another browsers
                formData.append('totalPrice', totalPrice);
            }


            let api;
            form.closest('.popup-design') || form.classList.contains('calc_form') ? 
                api = path.designer : api = path.question;

            postData(api, formData)
                .then( () => {
                    statusText.textContent = message.success;
                    statusImg.setAttribute('src', message.ok); })
                .catch( () => {
                    statusBlock.textContent = message.failure;
                    statusImg.setAttribute('src', message.fail); })
                .finally( () => {
                    form.querySelectorAll('input').forEach( el => {
                        el.value = '';
                    });
                    uploads.forEach( i =>  i.previousElementSibling.textContent = 'Файл не выбран' );
                    setTimeout( () => {
                        statusBlock.remove();
                        form.classList.add('animated', 'fadeIn');
                        form.style.display = 'block';
                    }, 5000)
                });
        });
    });
};

export default forms;