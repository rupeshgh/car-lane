enemies = document.querySelector(".enemy__car");
enemies.style.position = "relative";
enemyArr = [];

class Enemy {
	constructor(lane) {
		this.enemyWidth = ENEMY_WIDTH;
		this.enemyHeight = ENEMY_HEIGHT;
		this.enemyPosY = randomNumberGenerator(
			-6 * this.enemyHeight,
			2 * this.enemyHeight
		);
		this.enemySpeed = ENEMY_SPEED;
		this.lane = lane;
	}
	spawnEnemy() {
		this.enemy = document.createElement("div");
		this.enemy.classList.add("enemyCar");
		this.enemy.style.position = "absolute";
		this.enemy.style.width = "${this.enemyWidth}px";
		this.enemy.style.height = "${this.enemyheight}px";
		this.enemy.style.left = this.lane * LANE_WIDTH + "px";
		this.enemy.style.top = `${-1 * this.enemyHeight}px`;
		this.enemy.style.backgroundImage = "url('./assets/images/enemy1.png') ";
		this.enemy.style.backgroundRepeat = "no-repeat";
		this.enemy.style.backgroundSize = "100px 150px";
		this.enemy.style.backgroundPosition = "center center";

		this.enemy.style.objectFit = "cover";
		enemies.appendChild(this.enemy);
	}
	move() {
		if (this.enemyPosY >= WINDOW_HEIGHT) {
			this.enemyPosY = randomNumberGenerator(
				-8 * this.enemyHeight,
				this.enemyHeight
			);
			this.enemy.style.top = `${this.enemyPosY}px`;
			Score++;
			const score = document.querySelector(".score");
			score.innerHTML = `Score:${Score}`;
		} else {
			this.enemyPosY += this.enemySpeed;
			this.enemy.style.top = `${this.enemyPosY}px`;
		}

		if (player1 != undefined) {
			this.checkCollision(player1);
		}
	}

	checkCollision(player1) {
		let enemyPos = parseInt(this.enemy.style.top);

		if (player1.lane === this.lane) {
			if (enemyPos > WINDOW_HEIGHT - player1.height) {
				collided = true;

				Score = 0;
			}
		}

		if (collided) {
			const gameWindow = document.querySelector(".game__container");
			gameWindow.style.display = "none";

			//clearInterval(id);
			enemyArr.forEach((elem) => {
				elem.enemy.classList.remove("enemyCar");
			});
			enemyArr.splice(0, enemyArr.length);
			// const txt = document.querySelector(".score_class");
			// txt.innerHTML = `Score:${localStorage.getItem("score")}`;

			collided = false;
			const over = document.querySelector(".overmenu");
			over.style.display = "block";
		}
	}
}
