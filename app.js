const checkboxes = document.getElementsByName('juego');
const button = document.getElementById('boton');
const startScreen = document.getElementById('startScreen');
const rockPaperScissorsGame = document.getElementById('rps');
const tictactoe = document.getElementById('tictactoe');
rockPaperScissorsGame.classList.add("disable-click", "blur")
tictactoe.classList.add("blur")
let winner = {    // EMPATE = 0 - GANA P1 = 1 - GANA P2/CPU - 2
  turn: 0,
  name: null
}
let winCount = {
  p1: 0,
  p2: 0
}
let machine = {};
let hands = {
  player: null,
  cpu: null
}

//PONIENDO EL BOTON BONITO
button.onmouseover = () => {
  if ([...checkboxes].some( radio => radio.checked == true )) {
    button.classList.add("play__button_hover")
  }
}
button.onmouseout = () => {
  button.classList.remove("play__button_hover")
}

//EMPIEZA EL JUEGO
function startGame(startingHand){
  if (startingHand === 'x') {
    hands.player = 'x';
    hands.cpu = 'o';
  } else {
    hands.player = 'o';
    hands.cpu = 'x'
  }
  startScreen.classList.add("hide");
  rockPaperScissorsGame.classList.remove("disable-click", "blur");
  tictactoe.classList.add("blur")
}

//MANTIENE ILUSTRACION DE SELECCION DE MANO
const options = document.getElementsByClassName('play-options__box');
for (let btn of options) {
  btn.addEventListener("click", (ev) => {
    quitSelectedVisually();
    btn.classList.add("selected")
  })
}

function quitSelectedVisually(){
  for (let btn of options) {
    btn.classList.remove("selected")
  }
}
//IMPRIME EL GANADOR
button.addEventListener('click', mostrar);
function mostrar(){
  for (let caja of checkboxes) {
    if (caja.checked) {
      document.getElementById('resultado').style.display = 'flex';
      let gana = final(caja);
      document.getElementById('resultado__maquina').innerHTML = `Jugador sacó: ${caja.id} | Maquina sacó: ${machine.name}`;
      document.getElementById('resultado__ganador').innerHTML = "Ganador: " + gana;
      document.getElementById('resultado__final').innerHTML = winner.name;
      console.log(winner)
      caja.checked = false;
      quitSelectedVisually();
      if (winner.turn) jumpToTictactoe(winner.turn)
    }
  }
}

function jumpToTictactoe(turn){
  tictactoe.classList.remove("blur")
  rockPaperScissorsGame.classList.add("disable-click", "blur")
  if (turn === 1) {
    tictactoe.classList.remove("disable-click")
  } else if (turn === 2) {
      machineSelect();
      tictactoe.classList.remove("disable-click")
  }
}

function machineSelect(){
  setTimeout(() => {
    do {
      let randomNumber = Math.random().toString().slice(-1) - 1;
      console.log(randomNumber)
      var selectedBox = board.children[randomNumber];
    } while (selectedBox.style.backgroundImage !== '');
    if (startScreen.classList.contains("hide")){
      selectedBox.style.backgroundImage = `url(./img/${hands.cpu}.png)`;
      winCheck();
    }
  }, 400)
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
