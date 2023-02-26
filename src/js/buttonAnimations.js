import { button, checkboxes } from "./globalObjects";

//PONIENDO EL BOTON BONITO
button.onmouseover = () => {
	if ([...checkboxes].some((radio) => radio.checked == true)) {
		button.classList.add("play__button_hover");
	}
};
button.onmouseout = () => {
	button.classList.remove("play__button_hover");
};

//MANTIENE ILUSTRACION DE SELECCION DE MANO
const options = document.getElementsByClassName("play-options__box");
for (let btn of options) {
	btn.addEventListener("click", (ev) => {
		quitSelectedVisually();
		btn.classList.add("selected");
		button.classList.add("play__button--enabled");
	});
}

function quitSelectedVisually() {
	for (let btn of options) {
		btn.classList.remove("selected");
		button.classList.remove("play__button--enabled");
	}
}

export { quitSelectedVisually };
