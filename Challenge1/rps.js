//Variables
let userScore = 0;
let compScore = 0;

//DOM variables
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const message_p = document.querySelector(".action-message > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

//function that computes the computer choice (call in the game function) --- random number (Math) generated that then equates to a choice rps (array)
function getCompChoice() {
 const choices = ['r', 'p', 's'];
 const randomNum = Math.floor(Math.random() * 3);
 //give me the element of the random number
 return choices[randomNum];
}

//function to change the message to have the full words of rock, paper or scissors (instead of r, p or s)
function convertToWord(letter) {
 if (letter === "r") return "Rock";
 if (letter === "p") return "Paper";
 return "Scissors";
}

//what to do when the user wins
function win(user, comp) {
 //increase user score
 userScore++;

 //show user score on screen
 userScore_span.innerHTML = userScore;

 //update comp score
 compScore_span.innerHTML = compScore;

 //show message in messsage div
 message_p.innerHTML = `You win!<br>${convertToWord(user)} beats ${convertToWord(comp)}.`;
}

//what to do when the user loses
function lose() {
 //increase user score
 userScore++;

 //show user score on screen
 userScore_span.innerHTML = userScore;

 //update comp score
 compScore_span.innerHTML = compScore;

 //show message in messsage div
 message_p.innerHTML = `You win!<br>${convertToWord(user)} beats ${convertToWord(comp)}.`;
}

//what to do when it is a draw
function draw() {
 console.log("draw");
}

//function game that takes in user input (choice) compares (switch statment) it to the computer and then sends the result make to the message
function game(userChoice) {
 const compChoice = getCompChoice();
 switch (userChoice + compChoice) {
  case "rs":
  case "pr":
  case "sp":
   win(userChoice, compChoice);
   break;
  case "rp":
  case "ps":
  case "sr":
   lose(userChoice, compChoice);
   break;
  case "rr":
  case "pp":
  case "ss":
   draw(userChoice, compChoice);
   break;
 }
}

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
