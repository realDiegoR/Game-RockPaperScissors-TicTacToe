const gamesWin = document.getElementById("games_winned");
const gamesLost = document.getElementById("games_lost");
const board = document.getElementById("board");
board.style.backgroundImage = "true";
const box = [...board.children];
tictactoe.classList.add("disable-click")
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
}, true)

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
      Swal.fire({
        title: "Pudo ser mejor",
        text: "Hubo un empate",
        width: 500,
        imageUrl: "https://th.bing.com/th/id/OIP.g0KBuaJr6CJznGOXLN7wygHaEb?pid=ImgDet&rs=1",
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: "Ups"
      })
      box.forEach( caja => {
        caja.style.backgroundImage = '';
      })
      startScreen.classList.remove("hide")
      tictactoe.classList.add("disable-click", "blur")
      document.getElementById('resultado').style.display = 'none';
    }
  }
}

function selectingWinner(symbol){
  if (symbol) {
    winner.exist = true;
    setTimeout(function(){
      if (symbol.includes(hands.player)) {
        Swal.fire({
          title: "¡Felicitaciones!",
          text: "Ganaste el juego",
          width: 500,
          imageUrl: "https://th.bing.com/th/id/R.ac3c098cab749a8d1d115a64bb29c381?rik=%2fYlEq7yOAkbDgw&riu=http%3a%2f%2fwww.nairaland.com%2fattachments%2f2629677_image_jpeg9f360c5ab7736510df54c882e9dbf188&ehk=J4C7yoaRhD99UUe7CVsFm%2bWUhcEFJ%2fcaRFbyPl%2b%2bFT8%3d&risl=&pid=ImgRaw&r=0",
          imageWidth: 350,
          imageHeight: 270,
          imageAlt: "Not Bad!",
        });
        gamesWin.innerHTML = ++winCount.p1;
      } else {
        Swal.fire({
          title: "Oh... vaya",
          text: "Intentalo de nuevo",
          width: 500,
          imageUrl: "https://th.bing.com/th/id/R.e2e2e3c81af2f08d33556155796301d6?rik=p217qdxblQiPiA&pid=ImgRaw&r=0",
          imageWidth: 350,
          imageHeight: 270,
          imageAlt: ":(",
        });
        gamesLost.innerHTML = ++winCount.p2
      }
      box.forEach( caja => {
        caja.style.backgroundImage = '';
      })
      startScreen.classList.remove("hide")
      rockPaperScissorsGame.classList.add("disable-click", "blur")
      tictactoe.classList.add("disable-click", "blur")
      document.getElementById('resultado').style.display = 'none';
    }, 1000)
  }
}
