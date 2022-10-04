//PSEUDOCODE

//user INPUTS either rock, paper, or scissors - no input needed at the moment
// function getUserChoice() {
//     let userChoice = prompt('Please select rock, paper, or scissors')
//     console.log(userChoice);
//     if (userChoice == null) {
//         alert('No input was made')
//     }
// }
// computer randomly selects rock, paper, or scissors
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice
}
//User and player go through a round 
function playGame(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase()
    console.log(playerChoice)
    let computerChoice = computerSelection.toLowerCase()
    console.log(computerChoice)
    // IF user AND computer select the same choice 
    if (playerChoice == computerChoice) {
        //RETURN message saying 'it is a tie'
        console.log("It's a tie!")
        // IF user selects rock AND computer selects paper 
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        //SHOW in the CONSOLE "You lose! Paper beats rock!"
        console.log("You lose! Paper beats rock!")
        // If user selects paper AND computer selects scissors
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        //SHOW in the CONSOLE "You lose! Scissors beat paper!"
        console.log("You lose! Scissors beats paper!")
        // If user selects scissors AND computer selects rock
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        //SHOW in CONSOLE "You lose! Rock beats scissors!"
        console.log("You lose! Rock beats scissors!")
        // IF user selects rock AND computer selects scissors
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        //SHOW in CONSOLE "You win! Scissors beat rock!"
        console.log("You win! Scissors beat rock!")
        // IF user selects paper AND computer selects rock 
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        //SHOW in CONSOLE "You win! Paper beats rock!"
        console.log("You win! Paper beats rock!")
    } else if (playerChoice = 'scissors' && computerChoice == 'paper') {
        //SHOW in CONSOLE "You win! Scissors beat paper!"
        console.log("You win! Scissors beats paper!");
    }
}
