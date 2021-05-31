class LevelChoiceScene {
    choices = ['easy', 'medium', 'hard'];
    buttons = [];

    constructor(container) {
        this.container = container;
    }

    createButtons() {
        this.buttons = this.choices.map(choice =>
            new LevelButton(choice)
                .createButton()
                .addEventsOnButton());
        return this;
    }

    showLevels() {
        this.buttons.forEach(button => {
            this.container.appendChild(button.getHtmlElement());
        })
        return this;
    }

    hideLevels() {
        this.container.style.display = 'none';
    }
}