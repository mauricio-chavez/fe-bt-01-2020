const $message = document.querySelector('#message');
const $userScore = document.querySelector('#userScore');
const $computerScore = document.querySelector('#computerScore');
const $rockButton = document.querySelector('#rock');
const $paperButton = document.querySelector('#paper');
const $scissorsButton = document.querySelector('#scissors');

function setMessage(message) {
  $message.textContent = message;
}

function userWins(computerChoice) {
  const userScore = parseInt($userScore.textContent);
  $userScore.textContent = userScore + 1;
  setMessage(`La computadora eligió ${computerChoice}. ¡Ganaste! 🥳`);
}

function computerWins(computerChoice) {
  const computerScore = parseInt($computerScore.textContent);
  $computerScore.textContent = computerScore + 1;
  setMessage(`La computadora eligió ${computerChoice}. Perdiste 😝`);
}

function draw() {
  setMessage('¡Hubo un empate! 🙆🏻‍♂️');
}

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const choiceIndex = Math.floor(Math.random() * 3);
  return choices[choiceIndex];
}

function verboseChoice(computerChoice) {
  switch (computerChoice) {
    case 'r':
      return 'piedra';
    case 'p':
      return 'papel';
    case 's':
      return 'tijera';
  }
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  const verboseComputerChoice = verboseChoice(computerChoice);
  switch (userChoice + computerChoice) {
    // Empate
    case 'rr':
      draw();
      break;
    case 'pp':
      draw();
      break;
    case 'ss':
      draw();
      break;

    // Wins
    case 'rs':
      userWins(verboseComputerChoice);
      break;
    case 'pr':
      userWins(verboseComputerChoice);
      break;
    case 'sp':
      userWins(verboseComputerChoice);
      break;

    // Loses
    case 'rp':
      computerWins(verboseComputerChoice);
      break;
    case 'ps':
      computerWins(verboseComputerChoice);
      break;
    case 'sr':
      computerWins(verboseComputerChoice);
      break;
  }
}

$rockButton.addEventListener('click', () => {
  game('r');
});
$paperButton.addEventListener('click', () => {
  game('p');
});
$scissorsButton.addEventListener('click', () => {
  game('s');
});
