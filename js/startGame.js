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