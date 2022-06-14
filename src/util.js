Score = 0;
collided = false;
// const gameWindow = document.querySelector(".game__container");
// gameWindow.style.display = "none";
localStorage.setItem("score", Score);
const score = document.querySelector(".score");
score.innerHTML = `Score:${Score}`;

randomNumberGenerator = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector(".play__btn");
start.addEventListener("click", () => {
	const menu = document.querySelector(".playmenu");
	menu.style.display = "none";
	// const gameWindow = document.querySelector(".game__container");
	// gameWindow.style.display = "block";
	Score = 0;
	createGame();
});
