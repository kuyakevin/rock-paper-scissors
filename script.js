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

const container = document.querySelector('#container')

const results = document.createElement('div');
results.style.border = "solid black"
results.style.background = "pink"

const userScore = document.querySelector('#userScore')
const cpuScore = document.querySelector('#cpuScore')
let userPoints = 0;
let cpuPoints = 0;
userScore.textContent = `User Score: ${userPoints}` 
cpuScore.textContent = `CPU Score: ${cpuPoints}`

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    let rockResult = (playRound('rock', getComputerChoice()))
    let resultFont = document.createElement('h2');
    resultFont.textContent = `${rockResult}`
    results.appendChild(resultFont)
    game(rockResult)
})

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    let paperResult = (playRound('paper', getComputerChoice()))
    let resultFont = document.createElement('h2');
    resultFont.textContent = `${paperResult}`
    results.appendChild(resultFont)
    game(paperResult)
})

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    let scissorsResult = (playRound('rock', getComputerChoice()))
    let resultFont = document.createElement('h2');
    resultFont.textContent = `${scissorsResult}`
    if (scissorsResult.includes)
    results.appendChild(resultFont)
    game(scissorsResult)
})

let resetButton = document.querySelector('#newGame')
    resetButton.addEventListener('click', () => {
        location.reload()
            return false;
        })

container.appendChild(results)

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

function game(choice) {
    //declare variables to keep track of scores
    const win = "You win!";
    const lose = "You lose!"

    //run the playRound function 5 times 
    // for (i=0; i < 5; i++) {
        // let gameRound = playRound(getUserChoice(), getComputerChoice())
        // alert(gameRound);
        if (choice.includes(win)) {
            userPoints++
            userScore.textContent = `User Score: ${userPoints}`
        } else if (choice.includes(lose)) {
            cpuPoints++
            cpuScore.textContent = `CPU Score: ${cpuPoints}`
        }
        // console.log(userPoints, cpuPoints)
    // }
    if(userPoints == 5 || cpuPoints == 5) {
        container.style.display = 'none';
        rockButton.style.display='none'
        paperButton.style.display='none'
        scissorsButton.style.display='none'
        if (userPoints > cpuPoints) {
            alert("You are the winner!");
            cpuScore.style.display = 'none'
        } else if (userPoints < cpuPoints) {
            alert("Computer wins! Try again!")
            userScore.style.display = 'none'
        }
    }
}