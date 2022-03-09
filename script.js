function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let resultOfTheGame = playRound(playerPlay(), computerPlay());
    if (resultOfTheGame === "You win! Rock beats scissors") {
      playerScore += 1;
    } else if (resultOfTheGame === "You lose! Paper beats Rock") {
      computerScore += 1;
    } else if (resultOfTheGame === "Draw! You both chose Rock") {
      computerScore += 0;
      playerScore += 0;
    }
  }
  announceWinner(playerScore, computerScore)
}

function announceWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log(`You win the game! Your score was ${playerScore} and the computer's ${computerScore}`);
  } else if (playerScore === computerScore) {
    console.log(`You draw the game! Both your scores were: ${playerScore}`);
  } else {
    console.log(`You lose the game! Your score was ${playerScore} and the computer's ${computerScore}`)
  }
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toString().toLowerCase();
  let computer = computerSelection.toString().toLowerCase();
  let win = "You win! Rock beats scissors";
  let lose = "You lose! Paper beats Rock";
  let draw = "Draw! You both chose Rock";

  if (player === "rock" && computer === "paper" || player === "paper" && computer === "scissors" || player === "scissors" && computer === "rock") {
    console.log(lose)
    return lose;
  } else if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper") {
    console.log(win)
    return win;
  } else if (player === "rock" && computer === "rock" || player === "paper" && computer === "paper" || player === "scissors" && computer === "scissors") {
    console.log(draw);
    return draw;
  } else {
    console.log("Incorrect input")
  }
}

function playerPlay() {
  let playerChoice = window.prompt("Enter your choice: (rock, paper, scrissors)")
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

game()