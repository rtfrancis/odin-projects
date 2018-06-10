let playerScore = 0;
let computerScore = 0;
let playerChoice;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const playerBox = document.querySelector(".player");
const computerBox = document.querySelector(".computer");

const results = document.createElement("div");
const mainBody = document.querySelector("body");
results.classList.add("results");
mainBody.appendChild(results);



const gameOver = document.createElement("div");
gameOver.classList.add("gameOver");

const reset = document.createElement("div");
gameOver.appendChild(reset);

reset.innerHTML = '<button>Reset</button>';



// reset.appendChild(resetButton);

reset.addEventListener("click", function(){
    playerScore= 0;
    computerScore = 0;
    results.innerHTML = "";
    playerBox.textContent = "Player: " + playerScore;
    computerBox.textContent = "Computer: " + computerScore;
    mainBody.removeChild(gameOver);
});

rock.addEventListener("click", function(){
    playerChoice = "rock";
    game(playerChoice);
    console.log("You picked rock");
});

paper.addEventListener("click", function(){
    playerChoice = "paper";
    game(playerChoice);
    console.log("You picked paper");
});

scissors.addEventListener("click", function(){
    playerChoice = "scissors";
    game(playerChoice);
    console.log("You picked scissors");
});


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
        results.innerHTML = "<h2>It's a tie! You both chose Rock</h2>";
    } else if (playerChoice == "rock" && computerWeapon == "paper") {
        computerScore++;
        results.innerHTML = "<h2>You lose! Paper beats Rock!</h2>";
    } else if (playerChoice == "rock" && computerWeapon == "scissors") {
        results.innerHTML = "<h2>You win! Rock beats Scissors!</h2>";
        playerScore++;
    } else if (playerChoice == "paper" && computerWeapon == "rock") {
        results.innerHTML = "<h2>You win! Paper beats Rock!</h2>";
        playerScore++;
    } else if (playerChoice == "paper" && computerWeapon == "paper") {
        results.innerHTML = "<h2>It's a tie! You both chose Paper.</h2>";
    } else if (playerChoice == "paper" && computerWeapon == "scissors") {
        results.innerHTML = "<h2>You lose! Scissors beat Paper!</h2>";
        computerScore++;
    } else if (playerChoice == "scissors" && computerWeapon == "rock") {
        results.innerHTML = "<h2>You lose! Rock beats Scissors</h2>";
        computerScore++;
    } else if (playerChoice == "scissors" && computerWeapon == "paper") {
        results.innerHTML = "<h2>You win! Scissors beat Paper!</h2>";
        playerScore++;
    } else if (playerChoice == "scissors" && computerWeapon == "scissors") {
        results.innerHTML = "<h2>It's a tie! You both picked scissors!</h2>";
    } else {
        results.innerHTML = "<h2>Something went wrong. Please try again.</h2>";
        game();
    }
    return playerScore, computerScore;
}

function game(playerChoice) {
    let computerWeapon = computerPlay();
    // let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    gamePlay(playerChoice, computerWeapon);
    console.log("Computer score: " + computerScore);
    console.log("Player score: " + playerScore);
    playerBox.textContent = "Player: " + playerScore;
    computerBox.textContent = "Computer: " + computerScore;
    if (computerScore == 5 || playerScore == 5) {
        if (computerScore == 5) {
            results.innerHTML = "<h2>The computer won! Better luck next time!</h2>";
            mainBody.appendChild(gameOver);
            return;
        }
        if (playerScore == 5) {
            results.innerHTML = "<h2>You won! Great job!</h2>";
            mainBody.appendChild(gameOver);
            return;
        }
    }
    // game();
}
