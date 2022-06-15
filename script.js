const container = document.getElementById("container");
const box = document.querySelectorAll(".box");
// const playerXimg = "x.png";
// const player0img = "o.png";
let currentPlayer = "x";

function start() {
  container.innerHTML = `
       <div class="row myRow">
        <div class="col box box1" onclick="playersTurn(event)"></div>
        <div class="col box box2" onclick="playersTurn(event)"></div>
        <div class="col box box3" onclick="playersTurn(event)"></div>
      </div>
      <div class="row myRow">
        <div class="col box box4" onclick="playersTurn(event)"></div>
        <div class="col box box5" onclick="playersTurn(event)"></div>
        <div class="col box box6" onclick="playersTurn(event)"></div>
      </div>
      <div class="row myRow">
        <div class="col box box7" onclick="playersTurn(event)"></div>
        <div class="col box box8" onclick="playersTurn(event)"></div>
        <div class="col box box9" onclick="playersTurn(event)"></div>
      </div>`;
}

box.addEventListener("click", playersTurn);
function playersTurn(event) {
  console.log(event.target);
  if (event.target.innerHTML != "") {
    return;
  }
  event.target.innerHTML = `<img src="${currentPlayer}.png" />`;
  switchPlayer();
}

function switchPlayer() {
  if (currentPlayer == "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }
}
