const score = document.querySelector("#score");
const announcement = document.querySelector("#announcement")
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  let playerChoice = "rock";
  game(playerChoice);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  let playerChoice = "paper";
  game(playerChoice);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  let playerChoice = "scissors";
  game(playerChoice);
});

function game(playerChoice) {
  playRound(playerChoice, computerPlay());
  if (playerScore === 5 || computerScore === 5) {
    announceWinner(playerScore, computerScore);
    disableButtons();
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll(".buttons");
  buttons.forEach(button => {
    button.setAttribute("disabled", true);
  });
}

function announceWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    announcement.textContent = `You win the game! Your score was ${playerScore} and the computer's ${computerScore}`;
  } else if (playerScore === computerScore) {
    announcement.textContent = `You draw the game! Both your scores were: ${playerScore}`; 
  } else {
    announcement.textContent = `You lose the game! Your score was ${playerScore} and the computer's ${computerScore}`; 
  }
}

function playRound(playerChoice) {
  let player = playerChoice;
  let computer = computerPlay().toString().toLowerCase();
  let win = "You win! Rock beats scissors";
  let lose = "You lose! Paper beats Rock";
  let draw = "Draw! You both chose Rock";
  
  if (player === "rock" && computer === "paper" || player === "paper" && computer === "scissors" || player === "scissors" && computer === "rock") {
    console.log(lose)
    score.textContent = `Your score: ${playerScore} Computer score ${computerScore += 1}`;
    return lose;
  } else if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper") {
    console.log(win)
    score.textContent = `Your score: ${playerScore += 1} Computer score ${computerScore}`;
    return win;
  } else if (player === "rock" && computer === "rock" || player === "paper" && computer === "paper" || player === "scissors" && computer === "scissors") {
    console.log(draw);
    score.textContent = `Your score: ${playerScore} Computer score ${computerScore}`;
    return draw;
  } else {
    console.log("Incorrect input")
  }
}

function computerPlay() {
  let randomInt = getRandomInt();
  if (randomInt === 0) {
    return "Rock";
  } else if (randomInt === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

