import { inputValidation } from './login';
import { menuButton } from './panel/menu-button';

const menuButtonElem = document.querySelector('.panel__menu-button');
const siteElem = document.querySelector('.site');

const toggleShowMenu = () => {
    siteElem.classList.toggle('site_translated_left');
};

const responsiveIframe = () => {
    window.addEventListener('message', e => {
        const [eventName, data] = e.data;
        switch(eventName) {
            case 'setHeight':
                document.querySelector(".iframe_responsive").style.height = `${data + 10}px`;
                break;
        }
    }, false);
}


export const init = () => {
    inputValidation();
    responsiveIframe();
    siteElem.addEventListener('click', e => {
        if (e.target !== menuButtonElem)
            siteElem.classList.remove('site_translated_left')
    });
    menuButton.init(menuButtonElem, 'click', toggleShowMenu);
};