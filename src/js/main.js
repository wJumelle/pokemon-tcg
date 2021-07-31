window.onload = () => {
    // Variables
    const cards = document.querySelectorAll('.card');
    const cardsHeight = document.querySelector('.card .card__img').offsetHeight;
    const cardsWidth = document.querySelector('.card .card__img').offsetWidth;

    cards.forEach( element => {
        element.style.height = cardsHeight + 'px';
        element.style.width = cardsWidth + 'px';

        element.addEventListener('click', function(e) {
            this.classList.add('card--clicked');

            //setTimeout(() => this.classList.remove('card--clicked'), 2000);
        }, false);
    });
}