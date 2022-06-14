const gameWindow = document.querySelector(".game__container");
const WINDOW_HEIGHT = gameWindow.offsetHeight;
const WINDOW_WIDTH = gameWindow.offsetWidth;

const playerBox = document.querySelector(".player");
const playerCar = document.querySelector(".player__car");

class player {
	constructor(playerCar, playerBox) {
		this.height = playerCar.offsetHeight;
		this.width = playerCar.offsetWidth;
		this.playerPosX = 0;
		this.playerPosY = 0;
		this.lane = 0;
	}

	moveRight() {
		const playerCar = document.querySelector(".player__car");
		if (this.playerPosX <= WINDOW_WIDTH - this.width) {
			playerCar.style.left = this.playerPosX + LANE_WIDTH + "px";
			this.playerPosX += LANE_WIDTH;
			this.lane += 1;
		}
	}
	moveLeft() {
		const playerCar = document.querySelector(".player__car");
		if (this.playerPosX != 0) {
			playerCar.style.left = this.playerPosX - LANE_WIDTH + "px";
			this.playerPosX -= LANE_WIDTH;
			this.lane -= 1;
		}
	}
}

function createGame() {
	const gameWindow = document.querySelector(".game__container");
	gameWindow.style.display = "block";
	player1 = new player(playerCar, playerBox);
	enemyArr = [];
	for (let i = 0; i <= 2; i++) {
		enemy = new Enemy(i);
		enemy.spawnEnemy();
		enemyArr.push(enemy);
	}

	enemyArr.forEach((element) => {
		// element.move();
		var id = setInterval(() => {
			element.move();
		}, 1000 / 30);
	});
}

const playAgain = document.querySelector(".play_again");

playAgain.addEventListener("click", () => {
	delete player1;
	delete enemyArr;
	location.href = "../index.html";
});

document.addEventListener("DOMContentLoaded", (e) => {
	document.addEventListener("keydown", (e) => {
		if (e.key === "a" || e.key === "ArrowLeft") {
			player1.moveLeft();
			console.log("preess");
		}
		if (e.key === "d" || e.key === "ArrowRight") {
			player1.moveRight();
			console.log("preess");
		}
	});
});
