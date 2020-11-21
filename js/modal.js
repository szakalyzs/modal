'use strict';
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    const modal = document.querySelector('.modal--hide');
    modal.setAttribute('class', 'modal');
});