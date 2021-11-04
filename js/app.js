const checkboxes = document.getElementsByName('juego');
const button = document.getElementById('boton');
const startScreen = document.getElementById('startScreen');
const rockPaperScissorsGame = document.getElementById('rps');
const tictactoe = document.getElementById('tictactoe');
rockPaperScissorsGame.classList.add("disable-click", "blur")
tictactoe.classList.add("blur")
let winner = {    // EMPATE = 0 - GANA P1 = 1 - GANA P2/CPU - 2
  turn: 0,
  exist: false
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
  document.getElementById("ficha_elegida").src = `./img/${hands.player}.png`;
  winner.exist = false;
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
      document.getElementById('player').innerHTML = "Jugador: " + caja.id;
      document.getElementById('cpu').innerHTML = "Máquina: " + machine.name;
      // document.getElementById('resultado__maquina').innerHTML = `Jugador sacó: ${caja.id} | Maquina sacó: ${machine.name}`;
      document.getElementById('resultado__ganador').innerHTML = "Ganador: " + gana;
      // document.getElementById('resultado__final').innerHTML = winner.name;
      console.log(winner)
      caja.checked = false;
      quitSelectedVisually();
      if (winner.turn){
        setTimeout(function(){
          jumpToTictactoe(winner.turn)
        }, 400)
      }
    }
  }
}

function jumpToTictactoe(turn){
  tictactoe.classList.remove("blur")
  rockPaperScissorsGame.classList.add("disable-click", "blur")
  if (turn === 1) {
    tictactoe.classList.remove("disable-click")
  } else if (turn === 2) {
    setTimeout(() => {
      machineSelect();
      if (!winner.exist) {
        tictactoe.classList.remove("disable-click")
      }
    }, 400)
  }
}

function machineSelect(){
  do {
    let randomNumber = Math.random().toString().slice(-1) - 1;
    console.log(randomNumber)
    var selectedBox = board.children[randomNumber];
  } while (selectedBox.style.backgroundImage !== '');

  let newSelectedBox = [];
  for (let i = 0; i < 8; i++) {
    if (board.children[i].style.backgroundImage) {
      if (i != 2 && i != 5 && i != 8) {
        if (board.children[i].style.backgroundImage == board.children[i + 1].style.backgroundImage) {
          if (i % 3 == 0) {
            board.children[i + 2].style.backgroundImage || ( newSelectedBox.push( {box: board.children[i + 2], player: board.children[i]} ))
          } else {
            board.children[i - 1].style.backgroundImage || ( newSelectedBox.push( {box: board.children[i - 1], player: board.children[i]} ))
          }
        }
      }
      if (i == 0 || i == 3 || i == 6) {
        if (board.children[i].style.backgroundImage == board.children[i + 2].style.backgroundImage) {
          board.children[i + 1].style.backgroundImage || ( newSelectedBox.push( {box: board.children[i + 1], player: board.children[i]} ))
        }
      }
      if (i == 0 || i == 4) {
        if (board.children[i].style.backgroundImage == board.children[i + 4].style.backgroundImage) {
          if (i == 0) {
            board.children[8].style.backgroundImage || ( newSelectedBox.push( {box: board.children[8], player: board.children[i]})
   )        } else {
            board.children[0].style.backgroundImage || ( newSelectedBox.push( {box: board.children[0], player: board.children[i]})
   )        }
        }
        if (board.children[0].style.backgroundImage == board.children[8].style.backgroundImage) {
          board.children[4].style.backgroundImage || ( newSelectedBox.push( {box: board.children[4], player: board.children[i]})
   )      }
      }
    }
  }
  for (let i = 0; i < 6; i++) {
    if (board.children[i].style.backgroundImage) {
      if (board.children[i].style.backgroundImage == board.children[i + 3].style.backgroundImage) {
        if (i < 3) {
          board.children[i + 6].style.backgroundImage || ( newSelectedBox.push( {box: board.children[i + 6], player: board.children[i]} ))
        } else {
          board.children[i - 3].style.backgroundImage || ( newSelectedBox.push( {box: board.children[i - 3], player: board.children[i]} ))
        }
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    if (board.children[i].style.backgroundImage) {
      if (board.children[i].style.backgroundImage == board.children[i + 6].style.backgroundImage) {
        board.children[i + 3].style.backgroundImage || ( newSelectedBox.push( {box: board.children[i + 3], player: board.children[i]} ))
      }
    }
  }
  for (let i = 2; i <= 4; i += 2) {
    if (board.children[i].style.backgroundImage) {
      if (board.children[i].style.backgroundImage == board.children[i + 2].style.backgroundImage) {
        if (i == 2) {
          board.children[i + 4].style.backgroundImage || ( newSelectedBox.push( {box: board.children[i + 4], player: board.children[i]} ))
        } else {
          board.children[i - 2].style.backgroundImage || ( newSelectedBox.push( {box: board.children[i - 2], player: board.children[i]} ))
        }
      }
      if (board.children[2].style.backgroundImage == board.children[6].style.backgroundImage) {
        board.children[4].style.backgroundImage || ( newSelectedBox.push( {box: board.children[4], player: board.children[i]})
   )    }
    }
  }
  //box: la caja a dibujar
  //player: el jugador que provoca esa necesidad de dibujar en la posicion "box"
  if (newSelectedBox.length > 0) {
    console.log(newSelectedBox);
    if (newSelectedBox.length == 1) {
      if (!newSelectedBox[0].box.style.backgroundImage) {
        selectedBox = newSelectedBox[0].box;
      }
    } else {
      let cpuhand = newSelectedBox.find( arrayOfBoxes => arrayOfBoxes.player.style.backgroundImage.includes(hands.cpu));
      console.log("cpuhand:")
      console.log(cpuhand)
      if (cpuhand) {
        selectedBox = cpuhand.box;
      } else {
        selectedBox = newSelectedBox[0].box;
      }
    }
  }
  if (!winner.exist){
    selectedBox.style.backgroundImage = `url(./img/${hands.cpu}.png)`;
    winCheck();
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
    resultado = 'Empate';
    winner.turn = 0;
  }
  else if (maquina == 1 && persona == 2) {
    resultado = 'Jugador'
    winner.turn = 1;
  }
  else if (maquina == 2 && persona == 3){
    resultado = 'Jugador'
    winner.turn = 1;
  }
  else if (maquina == 3 && persona == 1){
    resultado = 'Jugador';
    winner.turn = 1;
  }
  else{
    resultado = 'Máquina'
    winner.turn = 2;
  }
  return resultado;
}

//DEPENDIENDO DE LA ELECCION, DETERMINA SI GANA LA PERSONA O LA MAQUINA
let empatesSeguidos = 0;
function final(eleccion){
  let numero = numeroMaquina();
  let ganador = comparar(eleccion.value, numero);
  ganador === "Empate"
    ? empatesSeguidos++
    : empatesSeguidos = 0;
  if (empatesSeguidos == 3) { //no mas de 2 empates seguidos
    empatesSeguidos = 0
    while (ganador === "Empate") {
      numero = numeroMaquina();
      ganador = comparar(eleccion.value, numero);
    }
  }
  return ganador;
}
