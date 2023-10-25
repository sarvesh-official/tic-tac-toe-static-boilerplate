//Winning Combinations

let Winning = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3],
];

var boxes = document.querySelectorAll(".box");

for (elem of boxes) {
  elem.addEventListener("click", handleClick);
}

let click = 0;
let xclicks = [];
let oclicks = [];
let iswon = false;
function handleClick(event) {
  click += 1;
  id = Number(event.target.id);
  let ptag = document.createElement("p");
  ptag.style.color = "#FAB201";
  boxes[id - 1].appendChild(ptag);
  if (click % 2 == 0) {
    ptag.textContent = "O";
    oclicks.push(id);
    result(oclicks, "O");
  } else {
    ptag.textContent = "X";
    xclicks.push(id);
    result(xclicks, "X");
  }
  if (click == 9 && iswon == false) {
    resultBox.style.visibility = "visible";
    messageBox.textContent = "It's a Draw";
  }
}

let resultBox = document.getElementById("result");
let messageBox = document.getElementById("message");

function result(playerarray, player) {
  for (let i = 0; i < Winning.length; i++) {
    let check = true;
    for (let j = 0; j < Winning[i].length; j++) {
      if (playerarray.includes(Winning[i][j]) == false) {
        check = false;
        break;
      }
    }
    if (check == true) {
      resultBox.style.visibility = "visible";
      messageBox.textContent = player + " Won the Match";
      iswon = true;
    }
  }
}

document.getElementById("button").addEventListener("click", () => {
  // history.go(-1)
  window.location.reload();
});
