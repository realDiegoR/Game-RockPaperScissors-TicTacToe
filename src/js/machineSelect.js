import { board, winner, hands } from "./globalObjects";
import { winCheck } from "./winCheck";
import fichaX from "./../assets/img/x.png";
import fichaO from "./../assets/img/o.png";

function machineSelect() {
	do {
		let randomNumber = Math.random().toString().slice(-1) - 1;
		var selectedBox = board.children[randomNumber];
	} while (selectedBox.style.backgroundImage !== "");

	let newSelectedBox = [];
	for (let i = 0; i < 8; i++) {
		if (board.children[i].style.backgroundImage) {
			if (i != 2 && i != 5 && i != 8) {
				if (
					board.children[i].style.backgroundImage ==
					board.children[i + 1].style.backgroundImage
				) {
					if (i % 3 == 0) {
						board.children[i + 2].style.backgroundImage ||
							newSelectedBox.push({
								box: board.children[i + 2],
								player: board.children[i],
							});
					} else {
						board.children[i - 1].style.backgroundImage ||
							newSelectedBox.push({
								box: board.children[i - 1],
								player: board.children[i],
							});
					}
				}
			}
			if (i == 0 || i == 3 || i == 6) {
				if (
					board.children[i].style.backgroundImage ==
					board.children[i + 2].style.backgroundImage
				) {
					board.children[i + 1].style.backgroundImage ||
						newSelectedBox.push({
							box: board.children[i + 1],
							player: board.children[i],
						});
				}
			}
			if (i == 0 || i == 4) {
				if (
					board.children[i].style.backgroundImage ==
					board.children[i + 4].style.backgroundImage
				) {
					if (i == 0) {
						board.children[8].style.backgroundImage ||
							newSelectedBox.push({
								box: board.children[8],
								player: board.children[i],
							});
					} else {
						board.children[0].style.backgroundImage ||
							newSelectedBox.push({
								box: board.children[0],
								player: board.children[i],
							});
					}
				}
				if (
					board.children[0].style.backgroundImage ==
					board.children[8].style.backgroundImage
				) {
					board.children[4].style.backgroundImage ||
						newSelectedBox.push({
							box: board.children[4],
							player: board.children[i],
						});
				}
			}
		}
	}
	for (let i = 0; i < 6; i++) {
		if (board.children[i].style.backgroundImage) {
			if (
				board.children[i].style.backgroundImage ==
				board.children[i + 3].style.backgroundImage
			) {
				if (i < 3) {
					board.children[i + 6].style.backgroundImage ||
						newSelectedBox.push({
							box: board.children[i + 6],
							player: board.children[i],
						});
				} else {
					board.children[i - 3].style.backgroundImage ||
						newSelectedBox.push({
							box: board.children[i - 3],
							player: board.children[i],
						});
				}
			}
		}
	}
	for (let i = 0; i < 3; i++) {
		if (board.children[i].style.backgroundImage) {
			if (
				board.children[i].style.backgroundImage ==
				board.children[i + 6].style.backgroundImage
			) {
				board.children[i + 3].style.backgroundImage ||
					newSelectedBox.push({
						box: board.children[i + 3],
						player: board.children[i],
					});
			}
		}
	}
	for (let i = 2; i <= 4; i += 2) {
		if (board.children[i].style.backgroundImage) {
			if (
				board.children[i].style.backgroundImage ==
				board.children[i + 2].style.backgroundImage
			) {
				if (i == 2) {
					board.children[i + 4].style.backgroundImage ||
						newSelectedBox.push({
							box: board.children[i + 4],
							player: board.children[i],
						});
				} else {
					board.children[i - 2].style.backgroundImage ||
						newSelectedBox.push({
							box: board.children[i - 2],
							player: board.children[i],
						});
				}
			}
			if (
				board.children[2].style.backgroundImage ==
				board.children[6].style.backgroundImage
			) {
				board.children[4].style.backgroundImage ||
					newSelectedBox.push({
						box: board.children[4],
						player: board.children[i],
					});
			}
		}
	}
	//box: la caja a dibujar
	//player: el jugador que provoca esa necesidad de dibujar en la posicion "box"
	console.clear();
	if (newSelectedBox.length > 0) {
		if (newSelectedBox.length == 1) {
			if (!newSelectedBox[0].box.style.backgroundImage) {
				selectedBox = newSelectedBox[0].box;
			}
		} else {
			let cpuhand = newSelectedBox.find((box) => {
				const asset = box.player.style.backgroundImage.slice(-7);
				return asset.includes(hands.cpu);
			});
			if (cpuhand) {
				selectedBox = cpuhand.box;
			} else {
				selectedBox = newSelectedBox[0].box;
			}
		}
	}
	console.log(newSelectedBox);
	if (!winner.exist) {
		selectedBox.style.backgroundImage =
			hands.cpu === "x" ? `url(${fichaX})` : `url(${fichaO})`;
		winCheck();
	}
}

export { machineSelect };
