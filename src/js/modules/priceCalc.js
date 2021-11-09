const priceCalc = () => {
    const sizeField = document.querySelector('#size'),
          materialField = document.querySelector('#material'),
          optionsField = document.querySelector('#options'),
          promocodeField = document.querySelector('.promocode'),
          totalPriceField = document.querySelector('.calc-price');
    
    let totalPrice = 0;

    function setPrice() {
        totalPrice = Math.round( (+sizeField.value) * (+materialField.value) + (+optionsField.value) );

        if (sizeField.value === '' || materialField.value === '') {
            totalPriceField.textContent = 'Пожалуйста укажите размер и материал картины';
        } else if (promocodeField.value === 'IWANTPOPART') {
            totalPriceField.textContent = Math.round( totalPrice * 0.7 );
        } else {
            totalPriceField.textContent = totalPrice;
        }
    };

    sizeField.addEventListener('change', setPrice);
    materialField.addEventListener('change', setPrice);
    optionsField.addEventListener('change', setPrice);
    promocodeField.addEventListener('input', setPrice);
}

export default priceCalc;