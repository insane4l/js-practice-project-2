import accordion from './modules/accordion';
import burger from './modules/burger';
import filter from './modules/filter';
import forms from './modules/forms';
import modals from './modules/modals';
import phoneMask from './modules/phoneInputsMask';
import pictureSizes from './modules/pictureSizes';
import priceCalc from './modules/priceCalc';
import showMoreStyles from './modules/showMoreStyles';
import sliders from './modules/sliders';
import textFieldsValidation from './modules/textFieldsValidation';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders();
    forms();
    textFieldsValidation();
    phoneMask();
    showMoreStyles();
    priceCalc();
    filter();
    pictureSizes();
    accordion();
    burger();
});