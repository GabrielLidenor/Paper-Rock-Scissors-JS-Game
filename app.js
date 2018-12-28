let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById('userScore');
const compScoreSpan = document.getElementById('computerScore');
const scoreBoard    = document.querySelector('.scoreBoard');
const result        = document.querySelector('.result > p');
const rock          = document.getElementById('r');
const paper         = document.getElementById('p');
const scissors      = document.getElementById('s');

function win(userChoice, computerChoice){
  userScore++;
  userScoreSpan.innerHTML = userScore;
  result.innerHTML = `${converToWord(userChoice)} beats ${converToWord(computerChoice)} You Win 🔥`;
  document.getElementById(userChoice).classList.add('greenGlow');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('greenGlow');
  }, 400);
}

function lose(userChoice, computerChoice){
  compScore++;
  compScoreSpan.innerHTML = compScore;
  result.innerHTML = `${converToWord(computerChoice)} beats ${converToWord(userChoice)} You Lost...💩`;
  document.getElementById(userChoice).classList.add('redGlow');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('redGlow');
  }, 400);
}

function draw(userChoice){
  result.innerHTML = "It's a draw 💩";
  document.getElementById(userChoice).classList.add('grayGlow');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('grayGlow');
  }, 400);
}

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function converToWord(letter) {
  switch (letter) {
    case 'r':
      return 'Rock'
      break;
    case 'p':
      return 'Paper'
      break;
    case 's':
      return 'Scissors'
    default:
      break;
  }
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice);
      break;
    default:

  }
}

function main(){
  rock.addEventListener('click',() => {
    game('r');
  });

  paper.addEventListener('click',() => {
    game('p');
  });

  scissors.addEventListener('click',() => {
    game('s');
  });
}

main();
