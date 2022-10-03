//PSEUDOCODE

//user INPUTS either rock, paper, or scissors
// computer randomly selects rock, paper, or scissors
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice
}
let a = 5;
// IF user AND computer select the same choice 
//     RETURN message saying 'it is a tie'
// IF user selects rock AND computer selects paper OR 
// If user selects paper AND computer selects scissors OR
// If user selects scissors AND computer selects rock
//     RETURN message saying 'computer wins'
// IF user selects rock AND computer selects scissors OR
// IF user selects paper AND computer selects rock OR
// IF user selects scissors AND computer paper 
//     RETURN message saying 'user wins'
