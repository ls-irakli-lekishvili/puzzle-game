function main() {
    const levels = new LevelChoiceScene(selectElement('#choice-container'))
        .createButtons()
        .showLevels();

    levels.buttons.forEach(buttons => {
        buttons.element.addEventListener('button-clicked', (event) => buttonClickedHandler(event, levels));
    })
}

function buttonClickedHandler(event, levels) {

    setTimeout(() => {
        levels.hideLevels();
        const game = new GameScene(event.target.innerText,
            selectElement('#game-container'))
            .startGame();
    }, 200);
}

main();