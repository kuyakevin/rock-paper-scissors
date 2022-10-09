//PSEUDOCODE

//user INPUTS either rock, paper, or scissors - no input needed at the moment
function getUserChoice() {
    let userChoice = prompt('Please select rock, paper, or scissors');
    return userChoice.toLowerCase();
}
// computer randomly selects rock, paper, or scissors
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
    
}

//User and player go through a round 
function playRound(playerSelection, computerSelection){
    // IF user AND computer select the same choice 
    if (playerSelection === computerSelection) {
        //RETURN message saying 'it is a tie'
        return "It's a tie!"
        // IF user selects rock AND computer selects paper 
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        //SHOW in the CONSOLE "You lose! Paper beats rock!"
        return "You lose! Paper beats rock!"
        // If user selects rock AND computer selects scissors
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        //SHOW in the CONSOLE "You win! Rock beats scissors!"
        return "You win! Rock beats scissors!"
        // If user selects scissors AND computer selects rock
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        //SHOW in CONSOLE "You win! Paper beats rock!"
        return "You win! Paper beats rock!"
        // IF user selects rock AND computer selects scissors
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        //SHOW in CONSOLE "You lose! Scissors beat paper!"
        return "You lose! Scissors beat paper!"
        // IF user selects scissors AND computer selects rock 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        //SHOW in CONSOLE "You lose! Rock beats scissors!"
        return "You lose! Rock beats scissors!"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        //SHOW in CONSOLE "You win! Scissors beat paper!"
        return "You win! Scissors beat paper!"
    }
}

function game() {
    //declare variables to keep track of scores
    const win = "You win!";
    const lose = "You lose!"
    const tie = "It's a tie!"
    let userPoints = 0;
    let cpuPoints = 0;
    //run the playRound function 5 times 
    for (i=0; i < 5; i++) {
        let gameRound = playRound(getUserChoice(), getComputerChoice())
        alert(gameRound);
        if (gameRound.includes(win)) {
            userPoints++
        } else if (gameRound.includes(lose)) {
            cpuPoints++
        } else if (gameRound.includes(tie)) {
            userPoints++ 
            cpuPoints++
        }
        console.log(userPoints, cpuPoints)
    }
    if (userPoints > cpuPoints) {
        return "You are the winner!";
    } else if (userPoints < cpuPoints) {
        return "Computer wins! Try again!"
    } else if (userPoints == cpuPoints) {
        return "It's a tie game!"
    }
}