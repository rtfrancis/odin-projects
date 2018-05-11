let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let computerWeapon;
    if (computerChoice == 1) {
        computerWeapon = "rock";
    }
    if (computerChoice == 2) {
        computerWeapon = "paper";
    }
    if (computerChoice == 3) {
        computerWeapon = "scissors";
    }
    return computerWeapon;
}

function gamePlay(playerChoice, computerWeapon) {
    if (playerChoice == "rock" && computerWeapon == "rock") {
        console.log("It's a tie! You both chose Rock.");
    } else if (playerChoice == "rock" && computerWeapon == "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock!");
    } else if (playerChoice == "rock" && computerWeapon == "scissors") {
        console.log("You win! Rock beats Scissors!");
        playerScore++;
    } else if (playerChoice == "paper" && computerWeapon == "rock") {
        console.log("You win! Paper beats Rock!");
        playerScore++;
    } else if (playerChoice == "paper" && computerWeapon == "paper") {
        console.log("It's a tie! You both chose Paper.");
    } else if (playerChoice == "paper" && computerWeapon == "scissors") {
        console.log("You lose! Scissors beat Paper!");
        computerScore++;
    } else if (playerChoice == "scissors" && computerWeapon == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (playerChoice == "scissors" && computerWeapon == "paper") {
        console.log("You win! Scissors beat Paper!");
        playerScore++;
    } else if (playerChoice == "scissors" && computerWeapon == "scissors") {
        console.log("It's a tie! You both picked scissors!");
    } else {
        console.log("Something went wrong. Please try again.");
        game();
    }
    return playerScore, computerScore;
}

function game() {
    let computerWeapon = computerPlay();
    let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    gamePlay(playerChoice, computerWeapon);
    console.log("Computer score: " + computerScore);
    console.log("Player score: " + playerScore);
    if (computerScore == 5 || playerScore == 5) {
        if (computerScore == 5) {
            console.log("The computer won! Better luck next time!");
            return;
        }
        if (playerScore == 5) {
            console.log("You won! Great job!");
            return;
        }
    }
    game();
}

game();
