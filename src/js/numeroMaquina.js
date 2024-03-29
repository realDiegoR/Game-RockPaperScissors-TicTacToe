import { hands } from "./globalObjects";

function numeroMaquina() {
	let random = Math.random().toString().slice(-1);
	let number = parseInt(random);
	let mano;
	switch (number) {
		case 0:
		case 3:
		case 6:
		case 9:
			hands.machineSelection = "Piedra";
			mano = 1;
			break;
		case 1:
		case 4:
		case 7:
			hands.machineSelection = "Papel";
			mano = 2;
			break;
		case 2:
		case 5:
		case 8:
			hands.machineSelection = "Tijera";
			mano = 3;
			break;
	}
	return mano;
}

export { numeroMaquina };
