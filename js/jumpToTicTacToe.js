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