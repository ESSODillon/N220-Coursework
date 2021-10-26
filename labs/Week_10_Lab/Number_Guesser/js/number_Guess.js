// N220 Section 28238
// Dillon Polley
// Week 10 Lab
// Number Guesser
// 10/26/2020

// Disables global variables
"use strict";

const Controls = {

    // Creates a field for buttons
    button : null,
    // Creates a field for the input
    input : null,
    // Creates a field for outputs
    output : null,
    // Creates a field for the random number
    rand_num : null,

}

// This function activates when the HTML document loads
function start() {

    // Creates an input in the HTML
    Controls.input = document.createElement("input");
    // Sets the width of the input as 140 pixels
    Controls.input.style.width = "140px";
    // Sets the height to 25 pixels
    Controls.input.style.height = "25px";
    // Sets up a placeholder for the hint to type a number in the input field
    Controls.input.placeholder = "Enter Number Here";
    // Appends a node as the last child of the node
    document.body.appendChild(Controls.input);

    // Creates a button in our HTML file
    Controls.button = document.createElement("button");
    // Sets the width to 140 pixels
    Controls.button.style.width = "140px";
    // Sets the height to 25 pixels
    Controls.button.style.height = "25px";
    // Displays a message on the button that says generate greeting
    Controls.button.innerHTML = "Guess";
    // Listens for the button to be clicked, and when it is activate the function below
    Controls.button.addEventListener("click", onButtonClick);
    // Appends a node as the last child of the node
    document.body.appendChild(Controls.button);
    // Generates a random number when the document starts up
    Controls.rand_num = Math.floor((Math.random() * 128));
}

// This function activates when the button is clicked
function onButtonClick(eventData) {
    // Collects the value created by the input field
    let user_guess = Controls.input.value;
    // Runs through the function below
    numberTest(user_guess, Controls.rand_num); 

}

function numberTest(x, y) {
    // If the guess is greater than the random number, return false
    if (x > y) {
        // User sees this to let them know their guess was too high
        document.getElementById("feedback").innerHTML += "<br>Too High";
    } 
    // If the guess is less than the random number, return false
    else if (x < y) {
        // User sees this to know their guess was too low
        document.getElementById("feedback").innerHTML += "<br>Too Low";
    }
    // If the number is equal to the random number, return true, and generate a new number
    else if (x == y) {
        // User sees this to know they guessed  the nuber
        document.getElementById("feedback").innerHTML += "<br>Correct! New number generated.";
        // Generates a new number
        Controls.rand_num = Math.floor((Math.random() * 128)); 
    }
}