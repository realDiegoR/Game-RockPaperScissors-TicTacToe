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
      if (!winner.exist) {
        winner.exist = true;
        itsATie()
        box.forEach( caja => {
          caja.style.backgroundImage = '';
        })
        startScreen.classList.remove("hide")
        tictactoe.classList.add("disable-click", "blur")
        document.getElementById('resultado').style.display = 'none';
        document.getElementById("resultado__ganador").innerHTML = '';
      }
    }
  }