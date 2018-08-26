function Player() {
    this.x = 0;
    this.y = 0;
    this.direction = 'right';
}

function Ball() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

function Game() {
    this.board = document.querySelectorAll('#board div');
    this.player = new Player();
    this.ball = new Ball();
    this.score = 0;
    this.index = function(x,y) {
        return x + (y * 10);
    }
    this.showPlayer = function() {
        this.hideVisiblePlayer();
        this.board[this.index(this.player.x, this.player.y)].classList.add('player')
    }
    this.showBall = function() {
        this.board[this.index(this.ball.x, this.ball.y) ].classList.add('ball');
    }
    this.hideBall = function() {
        this.board[this.index(this.ball.x, this.ball.y) ].classList.remove('ball');
    }
    this.startGame = function() {
        var self = this;
        this.idSetInterval = setInterval(function() {
            self.movePlayer();
            }, 250);
    }
    this.hideVisiblePlayer = function() {
        var presentPlayer = document.querySelector('div.player');
        if (presentPlayer) {
            presentPlayer.classList.remove('player');
        }
    }
    this.turnPlayer = function(event) {

        switch (event.which) {
            case 37:
                this.player.direction = 'left';
                break;
            case 38:
                this.player.direction = 'top';
                break;
            case 39:
                this.player.direction = 'right';
                break;
            case 40:
                this.player.direction = 'down';
                break;
        }
    }
    this.movePlayer = function() {
        if(this.player.direction === "right") {
            this.player.x = this.player.x + 1;
        } else if (this.player.direction === "left") {
            this.player.x = this.player.x - 1;
        } else if (this.player.direction === "top") {
            this.player.y = this.player.y - 1;
        } else if (this.player.direction === "down") {
            this.player.y = this.player.y + 1;
        };

        this.checkBallCollision();
        this.gameOver();
        this.showPlayer();
    }
    this.checkBallCollision = function() {
            if (this.player.x == this.ball.x && this.player.y == this.ball.y) {
            this.hideBall();
            this.score++;
            document.querySelector('strong').innerText = this.score;
            this.ball = new Ball();
            this.showBall();
        }
    }
    this.gameOver = function() {
            if (this.player.x < 0 || this.player.x > 9 || this.player.y < 0 || this.player.y > 9) {
                clearInterval(this.idSetInterval);
                this.hideVisiblePlayer();
                alert('Game over. Score: ' + this.score);
            }
        }
}

var newGame = new Game();
newGame.showPlayer();
newGame.showBall();
newGame.startGame();

document.addEventListener('keydown', function(event) {
    newGame.turnPlayer(event);
})

