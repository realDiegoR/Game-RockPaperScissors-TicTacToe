import Swal from "sweetalert2";

//MOSTRAR INSTRUCCIONES
function showInstructions() {
	Swal.fire({
		title: "Instrucciones",
		html: `Este juego combina las mecanicas de "Piedra, Papel y Tijera" y "Tic Tac Toe" en un solo juego.<br><br>
      En la pantalla de inicio puedes ver una tabla de puntuacion y dos fichas para elegir y usarlas en la mecanica de Tic Tac Toe.<br><br>
      Una vez que elijas una ficha, seras llevado a jugar "Piedra, Papel o Tijera" y el sujeto que gane el enfrentamiento sera el primero en colocar su ficha en Tic Tac Toe, <b>solo por esta ronda</b>.<br><br>
      Esta mecanica se repite hasta que haya un ganador de Tic Tac Toe. Puedes comenzar de nuevo una vez que el juego haya terminado`,
		icon: "info",
	});
}

function youLose() {
	Swal.fire({
		title: "Oh... vaya",
		text: "Intentalo de nuevo",
		width: 500,
		imageUrl:
			"https://th.bing.com/th/id/R.e2e2e3c81af2f08d33556155796301d6?rik=p217qdxblQiPiA&pid=ImgRaw&r=0",
		imageWidth: 350,
		imageHeight: 270,
		imageAlt: ":(",
	});
}

function youWin() {
	Swal.fire({
		title: "¡Felicitaciones!",
		text: "Ganaste el juego",
		width: 500,
		imageUrl:
			"https://th.bing.com/th/id/R.ac3c098cab749a8d1d115a64bb29c381?rik=%2fYlEq7yOAkbDgw&riu=http%3a%2f%2fwww.nairaland.com%2fattachments%2f2629677_image_jpeg9f360c5ab7736510df54c882e9dbf188&ehk=J4C7yoaRhD99UUe7CVsFm%2bWUhcEFJ%2fcaRFbyPl%2b%2bFT8%3d&risl=&pid=ImgRaw&r=0",
		imageWidth: 350,
		imageHeight: 270,
		imageAlt: "Not Bad!",
	});
}

function itsATie() {
	Swal.fire({
		title: "Pudo ser mejor",
		text: "Hubo un empate",
		width: 500,
		imageUrl:
			"https://th.bing.com/th/id/OIP.g0KBuaJr6CJznGOXLN7wygHaEb?pid=ImgDet&rs=1",
		imageWidth: 300,
		imageHeight: 200,
		imageAlt: "Ups",
	});
}

export { showInstructions, youWin, youLose, itsATie };
