const checkboxes = document.getElementsByName("juego");
const button = document.getElementById("boton");
const startScreen = document.getElementById("startScreen");
const rockPaperScissorsGame = document.getElementById("rps");
const tictactoe = document.getElementById("tictactoe");
const gamesWin = document.getElementById("games_winned");
const gamesLost = document.getElementById("games_lost");
const board = document.getElementById("board");
const box = [...board.children];
const [...startGameButtons] =
	document.getElementsByClassName("start-modal__token");

let winner = {
	// EMPATE = 0 - GANA P1 = 1 - GANA P2/CPU - 2
	turn: 0,
	exist: false,
};

let winCount = {
	p1: 0,
	p2: 0,
};

let hands = {
	player: null,
	cpu: null,
	machineSelection: null,
};

export {
	checkboxes,
	button,
	startScreen,
	rockPaperScissorsGame,
	tictactoe,
	gamesWin,
	gamesLost,
	board,
	box,
	startGameButtons,
	winner,
	winCount,
	hands,
};
