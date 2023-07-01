function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choiceIndex = Math.floor(Math.random() * (3-0));
    return choices[choiceIndex];
}
