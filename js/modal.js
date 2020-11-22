'use strict';

(function modalOpen() {
    const headerBtn = document.querySelector('.header__btn');
    headerBtn.addEventListener('click', () => {
        const cover = document.querySelector('.cover--blur');
        cover.setAttribute('class', 'cover');
        const modal = document.querySelector('.modal');
        modal.focus();
    });
})();

(function modalClose() {
    const modalHide = document.querySelectorAll('.modal__close, .modal__okey, .modal__cancel');
    for (let i = 0; i < modalHide.length; i++) {
        modalHide[i].addEventListener('click', () => {
            const cover = document.querySelector('.cover');
            cover.setAttribute('class', 'cover--blur');
        })
    }
})();

(function modalClose2() {
    const cover = document.querySelector('.cover--blur');
    cover.addEventListener('click', (event) => {
        const cover = document.querySelector('.cover');
        if (event.target == cover) {
            cover.setAttribute('class', 'cover--blur');
        }
    })
})();
