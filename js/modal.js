'use strict';

(function modalOpen() {
    const headerBtn = document.querySelector('.header__btn');
    headerBtn.addEventListener('click', () => {
        const cover = document.querySelector('.cover--hide');
        cover.setAttribute('class', 'cover');
        modal.focus();
    });
})();

(function modalClose() {
    const modalCloseBtn = document.querySelector('.modal__close');
    modalCloseBtn.addEventListener('click', () => {
        const cover = document.querySelector('.cover');
        cover.setAttribute('class', 'cover--hide');
    })
})();

(function modalClose2() {
    const cover = document.querySelector('.cover--hide');
    cover.addEventListener('click', (event) => {
        const cover = document.querySelector('.cover');
        if (event.target == cover) {
            cover.setAttribute('class', 'cover--hide');
        }
    })
})();

/* (window.onclick = function (event) {
    const cover = document.querySelector('.cover');
    if (event.target == cover) {
        cover.style.display = "none";
    }
})(); */