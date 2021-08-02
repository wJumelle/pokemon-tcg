/*
 = Blocage avec ecouteur d'event handleCardClick sur .card__img--front plutot que .card
 = Si on laisse l'application de l'effet sur .card on perd le positionnement des autres cartes car .card devient position fixed
 */

import { localToGlobal as getPosition } from './localToGlobal.js';

window.onload = () => {
    // Variables
    const cards = document.querySelectorAll('.card');
    const cardsHeight = document.querySelector('.card .card__img').offsetHeight;
    const cardsWidth = document.querySelector('.card .card__img').offsetWidth;

    cards.forEach( element => {
        element.style.height = cardsHeight + 'px';
        element.style.width = cardsWidth + 'px';

        element.querySelector('.card__perspective').style.height = cardsHeight + 'px';
        element.querySelector('.card__perspective').style.width = cardsWidth + 'px';

        const cardFront = element.querySelector('.card__img--front');

        element.addEventListener('click', handleCardClick);
    });
}

// Fonctions
// Animation de la carte au click
function handleCardClick() {
    const cardPos = getPosition(this);
    
    this.style.position = 'fixed';
    this.style.top = cardPos.top + 'px';
    this.style.left = cardPos.left + 'px';
    this.dataset.position = `{ "top": ${cardPos.top}, "left": ${cardPos.left} }`;
    
    this.classList.add('card--clicked');

    setTimeout(() => {
        this.style.top = '50%';
        this.style.left = '50%';
        this.style.transform = 'translate(-50%, -50%) rotateY(360deg)';

        this.removeEventListener('click', handleCardClick);
        this.addEventListener('click', handleCardReturnToInitialPos);
    }, 100);
}

function handleCardReturnToInitialPos() {
    const cardInitialPos = JSON.parse(this.dataset.position);
    this.style.top = cardInitialPos.top + 'px';
    this.style.left = cardInitialPos.left + 'px';
    this.style.transform = 'translate(0, 0) rotateY(0)';

    setTimeout(() => {
        this.classList.remove('card--clicked');
        this.removeEventListener('click', handleCardReturnToInitialPos);
        this.addEventListener('click', handleCardClick);
    }, 2000);
}