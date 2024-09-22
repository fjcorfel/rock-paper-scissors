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

  console.log(`You chose ${humanChoice.toUpperCase()}`);
  console.log(`Computer chose ${computerChoice.toUpperCase()}`);

  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock!");
      return -1;
    } else if (computerChoice === "rock") {
      console.log("It's a TIE!");
      return 0;
    } else if (computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors!");
      return 1;
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "paper") {
      console.log("It's a TIE!");
      return 0;
    } else if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock!");
      return 1;
    } else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper!");
      return -1;
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beats Paper!");
      return 1;
    } else if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors!");
      return -1;
    } else if (computerChoice === "scissors") {
      console.log("It's a TIE!");
      return 0;
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i < 6; i++) {
    console.log(`Ronda ${i}`)
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);

    if (result === -1) {
      computerScore++;
    } else if (result === 1) {
      humanScore++;
    } else {
      computerScore++;
      humanScore++;
    }
  }

  if (humanScore > computerScore){
    console.log("You win the game!")
  }else if (humanScore < computerScore){
    console.log("You lose the game!")
  }else{
    console.log("It's a TIE game!")
  }
}

playGame()
