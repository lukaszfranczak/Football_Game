function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = 'right';
}

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

function Game() {
    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.index = function(x,y) {
        return x + (y * 10);
    }
    this.showFurry = function() {
        this.hideVisibleFurry();
        this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry')
    }
    this.showCoin = function() {
        this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
    }
    this.hideCoin = function() {    //dodalem wlasna metode
        this.board[ this.index(this.coin.x,this.coin.y) ].classList.remove('coin');
    }
    this.startGame = function() {
        var self = this;
        this.idSetInterval = setInterval(function() {
            self.moveFurry();
            }, 250);
    }
    this.hideVisibleFurry = function() {
        var presentFurry = document.querySelector('div.furry');
        if (presentFurry) {     // na samym poczatku dostaje null bo jeszcze nie ma furry na mapie - dodalem wiec sprawdzanie czy istnieje
            presentFurry.classList.remove('furry');
        }
    }
    this.turnFurry = function(event) {

        switch (event.which) {      // w opisie na stronie te kody są źle przypisane
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'top';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
        }
    }
    this.moveFurry = function() {
        if(this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "top") {
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        };

        this.checkCoinCollision();
        this.gameOver();
        this.showFurry();
    }
    this.checkCoinCollision = function() {
            if (this.furry.x == this.coin.x && this.furry.y == this.coin.y) {
            this.hideCoin();
            this.score++;
            document.querySelector('strong').innerText = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    }
    this.gameOver = function() {
            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {     // problem dotyczy tej linii i linii 22
                clearInterval(this.idSetInterval);
                this.hideVisibleFurry();
                alert('Game over. Score: ' + this.score);
            }
        }
}

var newGame = new Game();
newGame.showFurry();
newGame.showCoin();
newGame.startGame();

document.addEventListener('keydown', function(event) {
    newGame.turnFurry(event);
})

