import outsideClick from './outsideClick.js';

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const menuList2 = document.querySelector('[data-menu="list2"]');
    const eventos = ['click', 'touchstart'];

    if(menuButton) {
        console.log('OK')
        if(menuList) {
            function openMenu(event) {
                menuList.classList.add('active');
                menuButton.classList.add('active');
                outsideClick(menuList, eventos, () => {
                    console.log('Toggle')
                    menuList.classList.remove('active');
                    menuButton.classList.remove('active');
                })
            }
            eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
        }
        else if (menuList2) {
            function openMenu2(event) {
                console.log('MENU 2')
                menuList2.classList.add('active');
                menuButton.classList.add('active');
                outsideClick(menuList2, eventos, () => {
                    console.log('Toggle')
                    menuList2.classList.remove('active');
                    menuButton.classList.remove('active');
                })
            }
            eventos.forEach(evento => menuButton.addEventListener(evento, openMenu2));

        }
    }
}