import { winner } from "./globalObjects";

//DETERMINA LAS REGLAS DEL JUEGO
function comparar(persona, maquina) {
	let resultado;
	if (persona == maquina) {
		resultado = "Empate";
		winner.turn = 0;
	} else if (maquina == 1 && persona == 2) {
		resultado = "Jugador";
		winner.turn = 1;
	} else if (maquina == 2 && persona == 3) {
		resultado = "Jugador";
		winner.turn = 1;
	} else if (maquina == 3 && persona == 1) {
		resultado = "Jugador";
		winner.turn = 1;
	} else {
		resultado = "Máquina";
		winner.turn = 2;
	}
	return resultado;
}

export { comparar };
