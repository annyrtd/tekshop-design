import { inputValidation } from './login';
import { menuButton } from './header/menu-button';
import { initVerbatim } from './verbatim';
import initRedeemSelection from './inline-survey';

// const responsiveIframe = () => {
//     window.addEventListener('message', e => {
//         const [eventName, data] = e.data;
//         switch(eventName) {
//             case 'setHeight':
//                 document.querySelector(".iframe_responsive").style.height = `${data + 10}px`;
//                 break;
//         }
//     }, false);
// };

export const init = () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
    document.head.appendChild(meta);

    const menuButtonElem = document.querySelector('.c_header__menu-button');
    const panelBodyEl = document.querySelector('.c_panel-body');
    const menuEl = document.querySelector('.c_menu');
    const verbatimAddingButton = document.querySelector('td.c_verbatim--content');

    const toggleShowMenu = () => {
        menuEl.classList.toggle('c_menu--open');
    };


    inputValidation();
    //responsiveIframe();
    initRedeemSelection();

    panelBodyEl.addEventListener('click', e => {
        if (e.target !== menuButtonElem)
            menuEl.classList.remove('c_menu--open')
    });
    menuButton.init(menuButtonElem, 'click', toggleShowMenu);
    if (verbatimAddingButton) {
        initVerbatim(verbatimAddingButton);
    }
};