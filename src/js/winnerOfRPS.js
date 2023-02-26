import { numeroMaquina } from "./numeroMaquina";
import { comparar } from "./compareHands";
//DEPENDIENDO DE LA ELECCION, DETERMINA SI GANA LA PERSONA O LA MAQUINA
let empatesSeguidos = 0;
function final(eleccion) {
	let numero = numeroMaquina();
	let ganador = comparar(eleccion.value, numero);
	ganador === "Empate" ? empatesSeguidos++ : (empatesSeguidos = 0);
	if (empatesSeguidos == 3) {
		//no mas de 2 empates seguidos
		empatesSeguidos = 0;
		while (ganador === "Empate") {
			numero = numeroMaquina();
			ganador = comparar(eleccion.value, numero);
		}
	}
	return ganador;
}

export { final };
