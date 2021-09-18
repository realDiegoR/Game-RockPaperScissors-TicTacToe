const gamesWin = document.getElementById("games_winned");
const gamesLost = document.getElementById("games_lost");
const board = document.getElementById("board");
const box = [...board.children];
tictactoe.classList.add("disable-click")
board.addEventListener("click", (ev) => {
  if (!ev.target.style.backgroundImage) {
    ev.target.style.backgroundImage = `url(./img/${hands.player}.png)`;
    winCheck();
    if (winner.turn === 1) {
      machineSelect();
      if (startScreen.classList.contains("hide")) {
        setTimeout( ()=> {
          tictactoe.classList.add("disable-click", "blur");
          rockPaperScissorsGame.classList.remove("disable-click", "blur");
        }, 500)
      }
    } else {
      tictactoe.classList.add("disable-click", "blur");
      rockPaperScissorsGame.classList.remove("disable-click", "blur");
    }
  }
})

function winCheck(win){
  if (box[0].style.backgroundImage == box[1].style.backgroundImage && box[0].style.backgroundImage == box[2].style.backgroundImage){
    selectingWinner(box[0].style.backgroundImage)
  }
  if (box[3].style.backgroundImage == box[4].style.backgroundImage && box[3].style.backgroundImage == box[5].style.backgroundImage) {
    selectingWinner(box[3].style.backgroundImage)
  }
  if (box[6].style.backgroundImage == box[7].style.backgroundImage && box[6].style.backgroundImage == box[8].style.backgroundImage) {
    selectingWinner(box[6].style.backgroundImage)
  }
  if (box[0].style.backgroundImage == box[3].style.backgroundImage && box[0].style.backgroundImage == box[6].style.backgroundImage) {
    selectingWinner(box[0].style.backgroundImage)
  }
  if (box[1].style.backgroundImage == box[4].style.backgroundImage && box[1].style.backgroundImage == box[7].style.backgroundImage) {
    selectingWinner(box[1].style.backgroundImage)
  }
  if (box[2].style.backgroundImage == box[5].style.backgroundImage && box[2].style.backgroundImage == box[8].style.backgroundImage) {
    selectingWinner(box[2].style.backgroundImage)
  }
  if (box[0].style.backgroundImage == box[4].style.backgroundImage && box[0].style.backgroundImage == box[8].style.backgroundImage) {
    selectingWinner(box[0].style.backgroundImage)
  }
  if (box[2].style.backgroundImage == box[4].style.backgroundImage && box[2].style.backgroundImage == box[6].style.backgroundImage) {
    selectingWinner(box[2].style.backgroundImage)
  }
  if (box.every( caja => Boolean(caja.style.backgroundImage))) {
    alert("Hubo un empate")
    box.forEach( caja => {
      caja.style.backgroundImage = '';
    })
    startScreen.classList.remove("hide")
    tictactoe.classList.add("disable-click", "blur")
  }
}

function selectingWinner(symbol){
  if (symbol) {
    if (symbol.includes(hands.player)) {
      alert("Ganó el jugador");
      gamesWin.innerHTML = ++winCount.p1;
    } else {
      alert("Ganó la CPU");
      gamesLost.innerHTML = ++winCount.p2
    }
    box.forEach( caja => {
      caja.style.backgroundImage = '';
    })
    startScreen.classList.remove("hide")
    rockPaperScissorsGame.classList.add("disable-click", "blur")
    tictactoe.classList.add("disable-click", "blur")
    document.getElementById('resultado').style.display = 'none';
  }
}
