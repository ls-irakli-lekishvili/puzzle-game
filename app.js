function main() {
    const levels = new LevelChoiceScene(selectElement('#choice-container'))
        .createButtons()
        .showLevels();

    levels.buttons.forEach(buttons => {
        buttons.element.addEventListener('button-clicked', buttonClickedHandler);
    })
}

function buttonClickedHandler(event) {
    const game = new GameScene(event.target.innerText,
        selectElement('#game-container'))

}

main();