function selectingWinner(symbol){
  if (symbol) {
    winner.exist = true;
    setTimeout(function(){
      if (symbol.includes(hands.player)) {
        youWin()
        gamesWin.innerHTML = ++winCount.p1;
      } else {
        youLose()
        gamesLost.innerHTML = ++winCount.p2
      }
      box.forEach( caja => {
        caja.style.backgroundImage = '';
      })
      startScreen.classList.remove("hide")
      rockPaperScissorsGame.classList.add("disable-click", "blur")
      tictactoe.classList.add("disable-click", "blur")
      document.getElementById('resultado').style.display = 'none';
      document.getElementById("resultado__ganador").innerHTML = '';
    }, 1000)
  }
}
