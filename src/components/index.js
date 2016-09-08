import './site.scss';

import './panel';
import './site-body';
import './header-w-logo';
import './card'
import './text';
import './menu';
import { inputValidation } from './login';
import './input';
import './simple-wrapper/simple-wrapper.scss';


import { menuButton } from './panel/menu-button';

const menuButtonElem = document.querySelector('.panel__menu-button');
const siteElem = document.querySelector('.site');

const toggleShowMenu = () => {
    siteElem.classList.toggle('site_translated_left');
};

export const init = () => {
    inputValidation();
    siteElem.addEventListener('click', e => {
        if (e.target !== menuButtonElem)
            siteElem.classList.remove('site_translated_left')
    });
    menuButton.init(menuButtonElem, 'click', toggleShowMenu);
};