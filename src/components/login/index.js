const onShow = el => {
    if (el.value) {
        el.classList.add('input-text_valid');
        el.nextSibling.classList.add('input-validation-icon_valid');
    }
};

const onFocus = e => {
    e.target.classList.remove('input-text_invalid', 'input-text_invalid');
    e.target.nextSibling.classList.remove('input-validation-icon_invalid', 'input-validation-icon_valid');
};

const onBlur = e => {
    if (e.target.value) {
        e.target.classList.add('input-text_valid');
        e.target.nextSibling.classList.add('input-validation-icon_valid');
    } else {
        e.target.classList.add('input-text_invalid');
        e.target.nextSibling.classList.add('input-validation-icon_invalid');
    }
};

const setHandlers = elem => {
    onShow(elem);
    elem.addEventListener('focus', onFocus);
    elem.addEventListener('blur', onBlur);
};

export const inputValidation = () => {
    Array
        .from(document.querySelectorAll('.input-text_credential'))
        .forEach(setHandlers);
};