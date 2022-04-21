rockPaperScissorsGame.classList.add("disable-click", "blur")
tictactoe.classList.add("disable-click", "blur")

//IMPRIME EL GANADOR
button.addEventListener('click', mostrar);
function mostrar(){
  for (let caja of checkboxes) {
    if (caja.checked) {
      document.getElementById('resultado').style.display = 'flex';
      let gana = final(caja);
      document.getElementById('player').innerHTML = "Jugador: " + caja.id;
      document.getElementById('cpu').innerHTML = "Máquina: " + machineSelection;
      // document.getElementById('resultado__maquina').innerHTML = `Jugador sacó: ${caja.id} | Maquina sacó: ${machineSelection}`;
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

board.addEventListener("click", (ev) => {
  if (ev.target == board) return false;
  if (!ev.target.style.backgroundImage) {
    ev.target.style.backgroundImage = `url(./img/${hands.player}.png)`;
    winCheck();
    if (winner.turn === 1) {
      if (!winner.exist) {
        setTimeout( ()=> {
          machineSelect();
          tictactoe.classList.add("disable-click", "blur");
          rockPaperScissorsGame.classList.remove("disable-click", "blur");
        }, 400)
      }
    } else {
      if (!winner.exist) {
        tictactoe.classList.add("disable-click", "blur");
        rockPaperScissorsGame.classList.remove("disable-click", "blur");
      }
    }
  }
})
