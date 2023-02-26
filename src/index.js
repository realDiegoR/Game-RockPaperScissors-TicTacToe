import {
	button,
	checkboxes,
	winner,
	board,
	tictactoe,
	rockPaperScissorsGame,
	startGameButtons,
	hands,
} from "./js/globalObjects";
import { quitSelectedVisually } from "./js/buttonAnimations";
import { final } from "./js/winnerOfRPS";
import { jumpToTictactoe } from "./js/jumpToTicTacToe";
import { winCheck } from "./js/winCheck";
import { machineSelect } from "./js/machineSelect";
import { startGame } from "./js/startGame";
import fichaX from "./assets/img/x.png";
import fichaO from "./assets/img/o.png";

//EMPIEZA EL JUEGO
startGameButtons.forEach((boton) => {
	boton.addEventListener("click", startGame);
});

//IMPRIME EL GANADOR
button.addEventListener("click", mostrar);
function mostrar() {
	for (let caja of checkboxes) {
		if (caja.checked) {
			document.getElementById("resultado").style.display = "block";
			let gana = final(caja);
			document.getElementById("player").innerHTML =
				"JUGADOR: " + caja.id.toUpperCase();
			document.getElementById("cpu").innerHTML =
				"MÁQUINA: " + hands.machineSelection.toUpperCase();
			document.getElementById("resultado__ganador").innerHTML =
				"GANÓ: " + gana.toUpperCase();
			document.getElementById("resultado__ganador").classList.remove("hide");
			caja.checked = false;
			quitSelectedVisually();
			if (winner.turn) {
				setTimeout(function () {
					jumpToTictactoe(winner.turn);
				}, 400);
			}
		}
	}
}

board.addEventListener("click", (ev) => {
	if (ev.target == board) return false;
	if (!ev.target.style.backgroundImage) {
		ev.target.style.backgroundImage =
			hands.player === "x" ? `url(${fichaX})` : `url(${fichaO})`;
		winCheck();
		if (winner.turn === 1) {
			if (!winner.exist) {
				setTimeout(() => {
					machineSelect();
					tictactoe.classList.add("disable-click", "blur");
					rockPaperScissorsGame.classList.remove("disable-click", "blur");
				}, 400);
			}
		} else {
			if (!winner.exist) {
				tictactoe.classList.add("disable-click", "blur");
				rockPaperScissorsGame.classList.remove("disable-click", "blur");
			}
		}
	}
});
