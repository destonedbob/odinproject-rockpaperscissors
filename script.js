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
        return [`You Win the Round! ${titleCase(playerSelectionCleaned)} beats ${titleCase(computerSelection)}`, True]
    } else {
        return [`You Lose the Round! ${titleCase(computerSelection)} beats ${titleCase(playerSelectionCleaned)}`, False]
    }
}

// Play game 5 times
let playerScore = 0;
let CompScore = 0;
for (let i = 0; i < 1; i++) {
    // Keep score
    // Prompt users
    let currPlayerMove = prompt('Select a move by typing "rock", "paper", or "scissors"').toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(currPlayerMove)) {
        currPlayerMove = prompt('Invalid Move! Select a move by typing "rock", "paper", or "scissors"').toLowerCase();
    }

    console.log(`End of Round ${i+1}`)
    // Initialize player and computer score to 0
    // Loop through 5 times
    // In each time, prompt user for a move (while move is not valid, repeat till it is)
    // get computer's move
    // play round
    // add 1 to winner's score
    // Declare winner
}



// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection));
