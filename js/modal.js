'use strict';
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    const modal = document.querySelector('.modal--hide');
    const cover = document.querySelector('.cover--hide');
    cover.classList.replace('cover--hide','cover');
    modal.classList.replace('modal--hide','modal');
    //modal.setAttribute('class', 'modal');
});