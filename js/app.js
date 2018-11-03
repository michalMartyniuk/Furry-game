import gameOverScreen from "./gameOverScreen";

function Furry() {
  this.x = 0;
  this.y = 0;
  this.direction = "right";
}

function Coin() {
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
}

function Game() {
  this.board = document.querySelectorAll("#board > div");
  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;
  this.index = (x, y) => {
    return x + y * 10;
  };
  this.showFurry = function() {
    this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
  };
  this.showCoin = function() {
    this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
  };

  this.keyEvent = () => {
    document.addEventListener("keydown", e => {
      this.turnFurry(e.which);
    });
  };

  this.turnFurry = key => {
    switch (key) {
      case 37:
        this.furry.direction = "left";
        break;
      case 39:
        this.furry.direction = "right";
        break;
      case 38:
        this.furry.direction = "up";
        break;
      case 40:
        this.furry.direction = "down";
        break;
      default:
        break;
    }
  };

  this.checkCoinCollision = () => {
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
      this.board[this.index(this.coin.x, this.coin.y)].classList.remove("coin");
      this.score++;
      let score = document.querySelector("#score strong");
      score.innerText = +score.innerText + 1;
      this.coin = new Coin();
      this.showCoin();
    }
  };

  this.moveFurry = () => {
    this.hideVisibleFurry();
    if (this.furry.direction === "right") {
      this.furry.x++;
    } else if (this.furry.direction === "left") {
      this.furry.x--;
    } else if (this.furry.direction === "up") {
      this.furry.y--;
    } else if (this.furry.direction === "down") {
      this.furry.y++;
    }
  };

  this.hideVisibleFurry = () => {
    document.querySelector(".furry").classList.remove("furry");
  };

  this.checkXYBoundry = () => {
    if (this.furry.x < 0 || this.furry.x > 9) {
      return false;
    } else if (this.furry.y < 0 || this.furry.y > 9) {
      return false;
    } else {
      return true;
    }
  };
  this.gameOver = () => {
    clearInterval(this.idSetInterval);
    gameOverScreen(this.score);
  };

  this.startGame = () => {
    this.keyEvent();
    this.idSetInterval = setInterval(() => {
      this.moveFurry();
      this.checkCoinCollision();
      if (this.checkXYBoundry()) {
        this.showFurry();
      } else {
        this.gameOver();
      }
    }, 250);
  };
}

const game = new Game();
game.showFurry();
game.showCoin();
game.startGame();
