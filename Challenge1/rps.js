//Variables
const userScore = 0;
const compScore = 0;

//DOM variables
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const message_div = document.querySelector(".action-message");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

//function that computes the computer choice (call in the game function) --- random number (Math) generated that then equates to a choice rps (array)
function getCompChoice() {
 const choices = ['r', 'p', 's'];
 console.log(Math.random() * 3);
}


//function game that takes in user input (choice) compares it to the computer and then sends the result make to the message
function game(userChoice) {
// console.log("something " + userChoice);
}

getCompChoice();

function main() {
 //Event listeners on each button
 rock_div.addEventListener('touchend', function () {
  // console.log('hey you clicked on rock');
  game("r");
 })

 paper_div.addEventListener('touchend', function () {
  // console.log('hey you clicked on paper');
  game("p");
 })

 scissor_div.addEventListener('touchend', function () {
  // console.log('hey you clicked on scissors');
  game("s");
 })
}

//call main function
main();
