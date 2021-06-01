class GameScene {
    board;
    container;
    constructor(gameMode, container) {
        this.gameMode = gameMode;
        this.container = container;
    }

    startGame() {
        if(this.gameMode in GAME_MODE_DIMENSIONS) {
            this.board = new Board(GAME_MODE_DIMENSIONS[this.gameMode], this.container)
                .getIcons()
                .shuffle()
                .createCards()
                .drawBoard()
                .updateGridStyle();
        }
        return this;
    }



}