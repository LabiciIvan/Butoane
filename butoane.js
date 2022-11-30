document.querySelector('.start-btn').addEventListener('click', startGame);
document.querySelector('.restart-btn').addEventListener('click', () =>  { location.reload();});

let errors = [
      "Please insert a number!",
];

const pattern = /^\d+$/;
let data = '';
let hp = 5;

let playSection = document.querySelector('.play-section');
let startSection = document.querySelector('.start-section');
let userInput = document.querySelector('.game-input');
let errorsDiv = document.querySelector('.errors');
let gameMap = document.querySelector('.game-map');
let gameHP = document.querySelector('.game-health');


function startGame() {

     if (!validatedData()) { return throwErrors() }

     loadGame();
}


function loadGame() {
      winningPosition = Math.floor(Math.random() * `${data}`) + 1;

      startSection.style.display = 'none';
      playSection.style.display = 'grid';

      for (let i = 1; i <= data; ++i) {

            let guessButton = document.createElement('button');

            guessButton.className = 'guess-btn';
            guessButton.innerHTML = '?';
            guessButton.value = 0;
            
            if (i === winningPosition ) { guessButton.value = 1; }

            guessButton.addEventListener('click', checkClickedButton, {once:true});

            gameMap.append(guessButton);
      }
      checkHp();
}

function validatedData() {

      data = userInput.value;

      userInput.value = '';

      let result = pattern.test(data);

      if (result === true && data > 80)  {errors.push('Only numbers between 1 - 80'); return false}

      return result;
}


function throwErrors() {

      errorsDiv.innerHTML = '';

      errors.forEach(element => {
            
            let strongElement = document.createElement('strong');

            strongElement.className = 'error';
            strongElement.innerHTML = element;

            errorsDiv.append(strongElement);
      });
}

function checkHp() {
      
      gameHP.innerHTML = '';

      if(hp <= 0) {

            alert('Ops try again!');
            disableButtons();
      }

      for (let i = 1; i <= hp; ++i) {

            let hearthIcon = document.createElement('i');
                hearthIcon.className = 'bi bi-heart-fill';
            
                gameHP.append(hearthIcon);
      }
}

function disableButtons() {

      let allButtons = document.querySelectorAll('.guess-btn');
      
      allButtons.forEach(element => {element.disabled = true});
}


function checkClickedButton(button) {

     let buttonClicked = button.target;

     if(buttonClicked.value != 1) { --hp; buttonClicked.className = 'guess-btn clicked' ;return checkHp(); }

     alert('winner');
     buttonClicked.className = 'guess-btn winner';
     buttonClicked.innerHTML = '';

     let giftIcon = document.createElement('i');
     giftIcon.className = 'bi bi-gift-fill';
     
     buttonClicked.append(giftIcon);
     disableButtons();
}