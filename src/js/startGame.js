import {
	hands,
	winner,
	startScreen,
	rockPaperScissorsGame,
	tictactoe,
} from "./globalObjects";
import fichaX from "./../assets/img/x.png";
import fichaO from "./../assets/img/o.png";

//EMPIEZA EL JUEGO
function startGame({ currentTarget }) {
	if (currentTarget.dataset.token === "x") {
		hands.player = "x";
		hands.cpu = "o";
		document.getElementById("ficha_elegida").src = fichaX;
	} else {
		hands.player = "o";
		hands.cpu = "x";
		document.getElementById("ficha_elegida").src = fichaO;
	}
	winner.exist = false;
	startScreen.classList.add("hide");
	rockPaperScissorsGame.classList.remove("disable-click", "blur");
	tictactoe.classList.add("blur");
}

export { startGame };
