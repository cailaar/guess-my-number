'use strict';

let secretNumber = Math.trunc(Math.random() *20) + 1;
//we use let for the secretNumber so it can change when we play again
let score = 20;
// we create a variable for the updated score to ensure the score is displayed on both the DOM and the code
let highscore = 0;

document.querySelector(".check").addEventListener("click", function() {

	const guess = Number(document.querySelector(".guess").value);
	document.querySelector(".guess").value = ""; //to remove the number after it's been entered
	console.log(guess);

//when there is no input, first scenario is to assume there is no input
	if(!guess|| guess <=0 || guess >20) {
        // added in additional or statements to keep guesses within the range{
	document.querySelector(".message").textContent = "Not a valid number!"

//when player wins
} else if (guess === secretNumber){
	document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

//TO TARGET CSS
//change the background to green
	document.querySelector("body").style.backgroundColor = "#60b347";

//change the width of the number box
	document.querySelector(".number").style.width ="30rem";

	if(score > highscore) {
    	highscore = score;
    	document.querySelector(".highscore").textContent = highscore;
}

//when guess is wrong
} else if (guess !== secretNumber) {
if(score>1){
	document.querySelector(".message").textContent = 
	guess > secretNumber ? "Too high!" : "Too low!";
//use the ternary operator as this is the only line that changes in the code
		score--;
		document.querySelector(".score").textContent = score;

} else {
	document.querySelector(".message").textContent = `You lost the game! The number was ${secretNumber}.`;
	document.querySelector(".score").textContent = 0;
    document.querySelector("body").style.backgroundColor = "#e75757";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width ="30rem";
 }
}
});

// Adding the option to press enter instead of clicking check for accessibilty/ UX
document.querySelector(".guess").addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		// Trigger the "click" event on the "check" button
		document.querySelector(".check").click();
	}
});

//pressing R to restart
document.addEventListener("keydown", function(event) {
    if (event.key === "r") {
      document.querySelector(".restart").click();
    }
  });
  

// Reset button
document.querySelector(".restart").addEventListener("click", function(){
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector(".message").textContent ="Start guessing...";
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent ="?";
	document.querySelector(".guess").value = ""; // make the guess box empty, empty string = absence of a value
	document.querySelector("body").style.backgroundColor = "#1B1212";
	document.querySelector(".number").style.width ="15rem";
});

