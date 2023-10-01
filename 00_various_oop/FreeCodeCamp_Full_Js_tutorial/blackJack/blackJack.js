class Helper {
    static arraySum(array) {
        let sum = 0;
        for(let num of array) {
            sum += num;
        }
        return sum
    }

    static getRandomCard() {
        const randomCard = Math.floor(Math.random() * 13) + 1;
        if(randomCard > 10) {
            return 10;
        }
        else if(randomCard === 1) {
            return 11;
        }
        else {
            return randomCard;
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.cards = [Helper.getRandomCard(), Helper.getRandomCard()];
    }

    get getName() {
        return this.name;
    }

    get getCards() {
        return this.cards;
    }

    addCard(card) {
        this.cards.push(card);
    }

    get isBlackJack() {
        if(Helper.arraySum(this.cards) === 21) {
            return true;
        }
        return false;
    }

    get isAlive() {
        if(Helper.arraySum(this.cards) > 21) {
            return false;
        }
        return true;
    }
}

class Play {
    static player1 = new Player("player1");
    static player2 = new Player("player2");
    static player = Play.player1;
    static isBlackJack = false;
    static isAlive = true;
    static message = "";

    static play() {
        document.querySelector("#start-btn").addEventListener("click", Play.startGame);
        document.querySelector("#new-card-btn").addEventListener("click", Play.newCard);
    }

    static changePlayer() {
        Play.player === player1 ? Play.player === player2 : Play.player === player1;
    }

    static startGame() {
        Play.player1 = new Player("player1");
        Play.player2 = new Player("player2");
        Play. player = Play.player1;
        Play.refreshData();
    }

    static newCard() {
        if(Play.player.isAlive && !Play.player.isBlackJack) {
            const newCard = Helper.getRandomCard();
            Play.player.addCard(newCard);
        }
        Play.refreshData();
    }

    static refreshData() {
        Play.checkCondition();
        document.querySelector("#player-el").innerText = `Player: ${Play.player.getName}`;
        document.querySelector("#message-el").innerText = Play.message;
        document.querySelector("#sum-el").innerText = `Sum: ${Helper.arraySum(Play.player.getCards)}`;
        document.querySelector("#cards-el").innerText = `Cards: ${Play.player.getCards}`;
    }

    static checkCondition() {
        if(Play.player.isBlackJack) {
            Play.message = "Black Jack!";
            Play.winMessage = `${Play.player} is a winner!`;
        }
        else if(Play.player.isAlive) {
            Play.message = "Do You want to draw another card?";
        }
        else {
            Play.message = "Out of the game";
        }
    }
}



class Main {
    static run() {
        Play.play();
    }
}

Main.run();
