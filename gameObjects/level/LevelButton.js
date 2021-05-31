class LevelButton {
    constructor(id) {
        this.id = id;
    }

    createButton() {
        this.element = document.createElement('div');
        this.element.classList.add('choice');
        this.element.id = this.id;
        this.element.innerText = this.id;
        return this;
    }

    addEventsOnButton() {
        this.element.addEventListener('mousedown', () => {
            this.element.classList.add('clicked-button');
            this.dispatchCustomEvent();
        });
        this.element.addEventListener('mouseup', () => {
            this.element.classList.remove('clicked-button');
        })
        this.element.addEventListener('mouseleave', () => {
            this.element.classList.remove('clicked-button');
        })
        return this;
    }

    dispatchCustomEvent() {
        const event = new Event('button-clicked');
        this.element.dispatchEvent(event);
    }

    getHtmlElement() {
        return this.element;
    }
}