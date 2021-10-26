// N220 Section 28238
// Dillon Polley
// Week 14 Lab
// Rock Paper Scissors
// 11/26/2020

// Doesn't allow global variables, only local
'use strict';

// Constant objects to hold various elements and properties
const Controls = {
    // Initialize the score div
    scoreDiv : null,
    // Initialize the results div
    resultDiv : null,
    // Initialize the button to play rock
    rockButton : null,
    // Intialize the button to play paper
    paperButton : null, 
    // Initialize the button to play scissors 
    scissorsButton : null,
}

// This function activates when the page loads up
function start() {
    // Shows how many points the player has, computer has, and ties. Display this information in a div, and append it to the body. 
    Controls.scoreDiv = create("div", "static", "500px", "150px",);
    Controls.scoreDiv.innerHTML += gameScore;  
    Controls.scoreDiv = document.body.appendChild(Controls.scoreDiv);
    // Shows the player whether they won, tied, or lost. Display this information in a div, and append it to the body. 
    Controls.resultDiv = create("div", "static", "500px", "300px",);
    Controls.resultDiv.innerHTML += "Round Result: " + playerDetect;
    Controls.resultDiv = document.body.appendChild(Controls.resultDiv);
    // Creates the button element for rock, sets an attribute for it, and assigns an event listener. 
    Controls.rockButton = create("button", "static", "100px", "20px",);
    Controls.rockButton.innerHTML += "Rock";
    Controls.rockButton = document.body.appendChild(Controls.rockButton);
    Controls.rockButton.setAttribute("player-button", "rock");
    Controls.rockButton  = addEventListener("click", playerDetect);
    // Creates the button element for paper, sets an attribute for it, and assigns an event listener. 
    Controls.paperButton = create("button", "static", "100px", "20px",);
    Controls.paperButton.innerHTML += "Paper";
    Controls.paperButton = document.body.appendChild(Controls.paperButton);
    Controls.paperButton.setAttribute("player-button", "paper");
    Controls.paperButton  = addEventListener("click", playerDetect);
    // Creates the button element for scissors, sets an attribute for it, and assigns an event listener. 
    Controls.scissorsButton = create("button", "static", "100px", "20px",);
    Controls.scissorsButton.innerHTML += "Scissors";
    Controls.scissorsButton = document.body.appendChild(Controls.scissorsButton);
    Controls.scissorsButton.setAttribute("player-button", "scissors");
    Controls.scissorsButton  = addEventListener("click", playerDetect);
}
// Event listener for which button the player clicked
function playerDetect(event) {
    // Gets the attribute assigned earlier and assigns it to a variable
    let playerChoice = event.target.getAttribute("player-button");
    // If the player chose rock, run through this code and determine the outcome of the round
    if (playerChoice == "rock") {
        if (computerChoice("rock")) {
            return "tie";
        } else if (computerChoice("paper")) {
            return "lose";
        } else if (computerChoice("scissors")) {
            return "win";
        }
    } 
    // If the player chose paper, run through this code and determine the outcome of the round
    else if (playerChoice == "paper") {
        if (computerChoice("rock")) {
            return "win";
        } else if (computerChoice("paper")) {
            return "tie";
        } else if (computerChoice("scissors")) {
            return "lose";
        }
    } 
    // If the player chose scissors, run through this code and determine the outcome of the round
    else if (playerChoice == "scissors") {
        if (computerChoice("rock")) {
            return "lose";
        } else if (computerChoice("paper")) {
            return "win";
        } else if (computerChoice("scissors")) {
            return "tie";
        }
    }
}

function gameScore() {
    // Initialize w for wins as 0
    let w = 0;
    // Initialize t for ties as 0
    let t = 0;
    // Initialize l for losses as 0
    let l = 0; 
    // If the player won the round, add one to w. If they tied, add one to t. If they lost, add one to l. 
    if (playerDetect("win")) {
        return "Wins: " + w++;
    } else if (playerDetect("tie")) {
        return "Ties: " + t++;
    } else if (playerDetect("lose")) {
        return "Losses: " + l++;
    }
}
// Randomly determines what the computer will play for the round
function computerChoice() {
    // Determines a number between 0 and 1 and assigns it to a variables
    let roboChoice = Math.random(); 
    // Takes all possibilities of what the number could be, and uses that to determine what the computers move is for the round.
    if (roboChoice <= 0.33) {
        return "rock";
    } else if (roboChoice <= 0.66) {
        return "paper";
    } else {
       return "scissors";
    }
}

// Runs through this function to create an element
function create(element, position, width, height,){
    // Initialize block and creates 
    let block = document.createElement(element);
    // Sets the position to static
    block.style.position = position;
    // Sets the width to be defined later
    block.style.width = width; 
    // Sets the height to be defined later
    block.style.height = height;
    // Returns block
    return block;
}