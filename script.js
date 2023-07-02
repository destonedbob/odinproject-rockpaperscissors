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
        return "Draw!"
    } else if ((playerSelectionCleaned == 'rock' && computerSelection == 'scissors') ||
               (playerSelectionCleaned == 'paper' && computerSelection == 'rock') ||
               (playerSelectionCleaned == 'scissors' && computerSelection == 'paper')
    ) {
        console.log(`You Win the Round! ${titleCase(playerSelectionCleaned)} beats ${titleCase(computerSelection)}`)
        return true
    } else {
        console.log(`You Lose the Round! ${titleCase(computerSelection)} beats ${titleCase(playerSelectionCleaned)}`)
        return false
    }
}

// Initialize player and computer score to 0
const numOfRounds = 5
let playerScore = 0;
let CompScore = 0;

// Loop through N times to play N rounds
for (let i = 0; i < numOfRounds; i++) {
    console.log(`Round ${i+1}`);

    // In each time, prompt user for a move (while move is not valid, repeat till it is)
    let currPlayerMove = prompt('Select a move by typing "rock", "paper", or "scissors"').toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(currPlayerMove)) {
        currPlayerMove = prompt('Invalid Move! Select a move by typing "rock", "paper", or "scissors"').toLowerCase();
    }

    // get computer's move
    let currCompMove = getComputerChoice();

    // play round
    let isPlayerVictory = playRound(currPlayerMove, currCompMove);

    if (isPlayerVictory) {
        playerScore++;
    } else {
        CompScore++;
    }

    console.log(`Current Score: \n\tPlayer: ${playerScore}\n\tComputer: ${CompScore}`)
    // add 1 to winner's score
    console.log(`End of Round ${i+1}`)
}
// Declare winner



// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection));
