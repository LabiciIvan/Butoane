function createButtons() {
  let userInput = document.getElementById('userInput').value;
  generateBox(userInput);
}

function generateBox(userInput) {
  let numberBoxes = userInput;
   if (numberBoxes > 0 && numberBoxes <= 2) {
    document.getElementById('userStatus').innerHTML = "If you call this challenge";
    addBoxes(numberBoxes);
  } else if (numberBoxes > 2) {
    document.getElementById('userStatus').innerHTML = "Now this is a challenge";
    addBoxes(numberBoxes);
  }
}

function addBoxes(numberBoxes) {
  let luckyBox = Math.floor(Math.random() * numberBoxes) + 1;
  document.getElementById('userGameStart').innerHTML = "";
  for (let i = 1; i <= numberBoxes; ++i) {
    let boxCreated = document.createElement("button");
    boxCreated.innerHTML = "Guess" + " " + i;
    boxCreated.id = "allButtons";
    document.getElementById('userGameStart').appendChild(boxCreated);
    if (i == luckyBox) {
      boxCreated.onclick = lucky;
    } else {
      boxCreated.onclick = unLucky;
    }
  }

}

function lucky() {
  document.getElementById('userStatus').innerHTML = "Winnner!!!";
}

function unLucky() {
  document.getElementById('userStatus').innerHTML = "Ops..try again";
}