function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choiceIndex = Math.floor(Math.random() * (3-0));
    return choices[choiceIndex];
}


function titleCase(string) {
    return string[0].toUpperCase().concat(string.slice(1).toLowerCase())
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionCleaned = playerSelection.toLowerCase();
    let computerSelectionCleaned = computerSelection.toLowerCase();

    if (playerSelectionCleaned === computerSelectionCleaned) {
        roundResult.textContent = `Draw!`;
        return 'draw'
    } else if ((playerSelectionCleaned == 'rock' && computerSelection == 'scissors') ||
               (playerSelectionCleaned == 'paper' && computerSelection == 'rock') ||
               (playerSelectionCleaned == 'scissors' && computerSelection == 'paper')
    ) {
        roundResult.textContent = `You Win the Round! ${titleCase(playerSelectionCleaned)} beats ${titleCase(computerSelection)}`;
        return 'win'
    } else {
        roundResult.textContent = `You Lose the Round! ${titleCase(computerSelection)} beats ${titleCase(playerSelectionCleaned)}`;
        return 'lose'
    }
}

function game(playerChoice) {
    // Initialize player and computer score to 0
    const numOfRounds = 5;

    let roundState = playRound(playerChoice, getComputerChoice());

    if (roundState == 'win') {
        playerScore++;
        playerScoreTracker.textContent = `Player Score: ${playerScore} / 5`

    } else if (roundState == 'lose') {
        compScore++;
        compScoreTracker.textContent = `Computer Score: ${compScore} / 5`

    } //else draw and dont increment.

    if (playerScore === 5 || compScore === 5) {
        // Declare winner
        if (playerScore > compScore) {
            gameResult.textContent = "GAME OVER! You have won the game!"
        } else if (compScore > playerScore) {
            gameResult.textContent = "GAME OVER! You Lost! Try again next time"
        }

        // Deactive buttons
        gameButtons.forEach(button => {
            button.disabled = true;
            button.classList.toggle("active-button");
        })

        // Reveal Reset Button
        resetButton.style.display= "block";
    }
}

// game();

function buttonSelection() {
    game(this.getAttribute('data-key'));
}

function resetGame() {
    // Reactivate buttons
    gameButtons.forEach(button => {
        button.disabled = false;
        gameResult.textContent = "";
        button.classList.toggle("active-button");
        playerScore = 0;
        playerScoreTracker.textContent = `Player Score: ${playerScore} / 5`;
        compScore = 0;
        compScoreTracker.textContent = `Computer Score: ${compScore} / 5`;
        resetButton.style.display= "none";
    })
}

// Get all buttons
const gameButtons = document.querySelectorAll('.game-button');
const roundResult = document.querySelector('.round-result');
const gameResult = document.querySelector('.game-result')
const playerScoreTracker = document.querySelector('.player-score-tracker');
const compScoreTracker = document.querySelector('.comp-score-tracker');
const resetButton = document.querySelector('#reset-button');
let playerScore = 0;
let compScore = 0;

// Add event listener click to all game buttons
Array.from(gameButtons).forEach((button) => {
    button.addEventListener('click', buttonSelection);
})

// Add event listener click to reset Button
resetButton.addEventListener('click', resetGame);
