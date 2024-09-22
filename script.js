function getComputerChoice() {
  let randomValue = Math.random();

  if (randomValue <= 1 / 3) {
    return "rock";
  } else if (randomValue > 1 / 3 && randomValue <= 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Rock, paper or scissors? ");
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  console.log(`You chose ${humanChoice.toUpperCase()}`)
  console.log(`Computer chose ${computerChoice.toUpperCase()}`)

  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock!");
    } else if (computerChoice === "rock") {
      console.log("It's a TIE!");
    } else if (computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors!");
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "paper") {
      console.log("It's a TIE!");
    } else if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock!");
    } else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper!");
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beats Paper!");
    } else if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors!");
    } else if (computerChoice === "scissors") {
      console.log("It's a TIE!");
    }
  }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
