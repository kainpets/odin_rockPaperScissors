function game() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    playRound(playerPlay(), computerPlay())
  }
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toString().toLowerCase();
  let computer = computerSelection.toString().toLowerCase();
  let win = "You win! Rock beats scissors";
  let lose = "You lose! Paper beats Rock";
  let draw = "Draw! You both chose Rock";

  if (player === "rock" && computer === "paper") {
    console.log(lose)
    return lose;
  } else if (player === "rock" && computer === "scissors") {
    console.log(win)
    return win;
  } else if (player === "rock" && computer === "rock") {
    console.log(draw);
    return draw;
  } else {
    console.log("Incorrect input")
  }
}

function playerPlay() {
  let playerChoice = window.prompt("Enter your choice: (rock, paper, scrissors")
  return playerChoice
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

