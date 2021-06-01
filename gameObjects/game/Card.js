class Card {
    id;
    card;
    flipInner;
    className;
    isOpen = false;
    constructor(className, id) {
        this.id = id;
        this.className = className;
    }

    createElement() {
        this.card = document.createElement('div');
        this.addChildren();
        this.card.appendChild(this.flipInner)
        this.card.classList.add('flip-card')
        return this;
    }

    addChildren() {
        this.flipInner = document.createElement('div');
        const flipFront = document.createElement('div');
        const flipBack = document.createElement('div');
        const img = document.createElement('i');

        this.flipInner.classList.add('flip-card-inner');
        img.classList.add(this.className, 'fas', 'fa-5x')
        flipFront.classList.add('flip-card-front');
        flipBack.classList.add('flip-card-back');

        flipBack.appendChild(img);
        this.flipInner.append(flipFront, flipBack);
    }

    addEventOnCard(callback, board) {
        this.card.addEventListener('click', callback.bind(board, this));
        return this;
    }

    openCard() {
        this.isOpen = true;
        this.flipInner.classList.add('rotate');
    }

    closeCard() {
        this.isOpen = false;
        this.flipInner.classList.remove('rotate');
    }
}