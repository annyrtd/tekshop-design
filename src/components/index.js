import { inputValidation } from './login';
import { menuButton } from './header/menu-button';
import initRedeemSelection from './inline-survey';

const menuButtonElem = document.querySelector('.c_header__menu-button');
const panelBodyEl = document.querySelector('.c_panel-body');
const menuEl = document.querySelector('.c_menu');

const toggleShowMenu = () => {
    menuEl.classList.toggle('c_menu--open');
};

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
    inputValidation();
    //responsiveIframe();
    initRedeemSelection();
    panelBodyEl.addEventListener('click', e => {
        if (e.target !== menuButtonElem)
            menuEl.classList.remove('c_menu--open')
    });
    menuButton.init(menuButtonElem, 'click', toggleShowMenu);
};