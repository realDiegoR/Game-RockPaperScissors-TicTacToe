let checkboxes = document.getElementsByName('juego');
document.getElementById('boton').addEventListener('click', mostrar);
let winner = {    // EMPATE = 0 - GANA P1 = 1 - GANA P2/CPU - 2
  turn: 0
};
let machine = {};

//MANTIENE ILUSTRACION DE SELECCION DE MANO
const options = document.getElementsByClassName('play-options__box')
for (let button of options) {
  button.addEventListener("click", (ev) => {
    for (let btn of options) {
      btn.classList.remove("selected")
    }
    button.classList.add("selected")
  })
}
//IMPRIME EL GANADOR
function mostrar(){
  for (let caja of checkboxes) {
    if (caja.checked) {
      document.getElementById('resultado').style.display = 'flex';
      let gana = final(caja);
      document.getElementById('resultado__maquina').innerHTML = `Jugador sacó: ${caja.id} | Maquina sacó: ${machine.name}`;
      document.getElementById('resultado__ganador').innerHTML = "Ganador: " + gana;
      document.getElementById('resultado__final').innerHTML = winner.name;
      console.log(winner)
    }
  }
}

//DETERMINA EL NUMERO EN FUNCION DEL SEGUNDO ACTUAL
function numeroMaquina(){
  let random = Math.random().toString().slice(-1);
  let number = parseInt(random);
  let mano;
  switch (number) {
    case 0:
    case 3:
    case 6:
    case 9:
      machine.name = 'Piedra';
      mano = 1;
      break;
    case 1:
    case 4:
    case 7:
      machine.name = 'Papel';
      mano = 2;
      break;
    case 2:
    case 5:
    case 8:
      machine.name = 'Tijera';
      mano = 3;
      break;
  }
  return mano;
}

//DETERMINA LAS REGLAS DEL JUEGO
function comparar(persona, maquina){
  let resultado;
  if (persona == maquina) {
    resultado = 'Empate!';
    winner.turn = 0;
    winner.name = '¡Empataron!';
  }
  else if (maquina == 1 && persona == 2) {
    resultado = 'Gana Papel!'
    winner.turn = 1;
    winner.name = '¡Ganaste!'
  }
  else if (maquina == 2 && persona == 3){
    resultado = 'Gana Tijera!'
    winner.turn = 1;
    winner.name = '¡Ganaste!'
  }
  else if (maquina == 3 && persona == 1){
    resultado = 'Gana Piedra!';
    winner.turn = 1;
    winner.name = '¡Ganaste!';
  }
  else{
    switch (maquina) {
      case 1:
        resultado = 'Gana Piedra!';
        break;
      case 2:
        resultado = 'Gana Papel!'
        break;
      case 3:
        resultado = 'Gana Tijera!'
        break;
    }
    winner.turn = 2;
    winner.name = '¡Perdiste!'
  }
  return resultado;
}

//DEPENDIENDO DE LA ELECCION, DETERMINA SI GANA LA PERSONA O LA MAQUINA
function final(eleccion){
  let numero = numeroMaquina();
  let ganador = comparar(eleccion.value, numero);
  return ganador;
}
