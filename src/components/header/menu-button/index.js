const rotate = _ => {
    _.addEventListener('click', function() {
       _.classList.toggle('c_header__menu-button_rotate_clockwise');
    });
};

export const menuButton = {
    initDelayed: () => {},
    init: (_, evt, cb)=> {
        if (_) {
          rotate(_);
          _.addEventListener(evt, cb);
        }
    }
};