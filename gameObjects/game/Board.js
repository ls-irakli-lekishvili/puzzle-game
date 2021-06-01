class Board {
    width;
    container;
    imageClasses;
    previousCard;
    previousCardId = null;
    isOpenDisabled = false;
    cardsLeft;
    attempts;

    constructor(width, container) {
        this.attempts = this.createAttempts()
        this.width = width;
        this.cardsLeft = width * width / 2;
        this.imageClasses = [...new Array(this.width * this.width)]
        this.container = container;
    }

    createAttempts() {
        const element = document.createElement('div');
        element.innerText = '0';
        element.id = 'attempts';

        document.body.appendChild(element);

        return element;

    }

    createCards() {
        this.cards = [...new Array(this.width * this.width)]
            .map((_, ind) => {
                    return new Card(this.imageClasses[ind], ind)
                        .createElement()
                        .addEventOnCard(this.cardClickHandler, this);
                }
            );
        return this;
    }

    cardClickHandler(card) {
        if (card.isOpen || this.isOpenDisabled) return;

        card.openCard();

        this.updateCardStatus(card)


    }

    updateCardStatus(card) {
        if (this.previousCardId === null) {
            this.openFirstCard(card);
            return;
        }
        if (this.previousCard.className === card.className) {
            this.correctGuess();
        } else {
            this.wrongGuess(card);
        }

        this.attempts.innerText = (+this.attempts.innerText) + 1;

    }


    openFirstCard(card) {
        this.previousCardId = card.id;
        this.previousCard = card;
    }

    correctGuess() {
        this.previousCardId = null;
        this.cardsLeft--;
        setTimeout(() => {
            if (!this.cardsLeft) {
                this.gameOver();
            }
        }, 200)

    }

    wrongGuess(card) {
        this.isOpenDisabled = true;
        setTimeout(() => {
            this.previousCard.closeCard();
            card.closeCard();
            this.isOpenDisabled = false;
        }, 400);
        this.previousCardId = null;
    }

    drawBoard() {
        this.cards.forEach(x => this.container.appendChild(x.card));
        return this;
    }

    updateGridStyle() {
        this.container.style.gridTemplate = `repeat(${this.width}, 1fr) / repeat(${this.width}, 1fr)`;
        return this;
    }

    shuffle() {
        this.imageClasses.forEach((_, index) => {
            this.swap(index)
        });
        return this;
    }

    swap(index) {
        const temp = this.imageClasses[index];
        const index2 = this.getRandom(this.imageClasses.length);
        this.imageClasses[index] = this.imageClasses[index2];
        this.imageClasses[index2] = temp
    }

    getIcons() {
        const classes = getIconClasses(this.width * this.width / 2);
        this.imageClasses = this.imageClasses.map((cl, ind) => {
            return classes[ind % classes.length];
        })
        return this;
    }

    getRandom(upperLimit) {
        return Math.random() * upperLimit | 0
    }


    gameOver() {
        const element = document.createElement('div');
        const cover = document.createElement('div');
        element.innerText = 'You won!!!';
        cover.id = 'cover';
        element.id = 'game-over-message';
        document.body.appendChild(cover);
        document.body.appendChild(element);

        document.cookie = `easy=${this.attempts.innerText}`;
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
}