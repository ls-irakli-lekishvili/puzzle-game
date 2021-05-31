class GameScene {
    openCard;
    children = [];
    constructor(gameMode) {
        this.gameMode = gameMode;
    }

    startGame() {
        switch (this.gameMode) {
            case GAME_MODE_DIMENSIONS.easy: {
                this.createCards(GAME_MODE_DIMENSIONS.easy);
                break;
            }
            case GAME_MODE_DIMENSIONS.medium: {
                this.createCards(GAME_MODE_DIMENSIONS.medium);
                break;
            }
            case GAME_MODE_DIMENSIONS.hard: {
                this.createCards(GAME_MODE_DIMENSIONS.hard);
                break;
            }
        }
    }


    createCards(width) {
        this.children = [...new Array(width)].map(_ => [...new Array(width)]);
        for(let i =0; i < width; i++){
            for(let j = 0; j < width; j++){
                this.children[i][j] = new Card(this.getIcons());
            }
        }

    }

    drawBoard(width) {
        selectElement('.container')
    }

}