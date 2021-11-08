import forms from './modules/forms';
import modals from './modules/modals';
import phoneMask from './modules/phoneInputsMask';
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
});