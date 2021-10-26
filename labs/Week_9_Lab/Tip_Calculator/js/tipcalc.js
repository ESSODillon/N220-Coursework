// Disables global variables
"use strict";

const Controls = {

    // Creates a field for buttons
    button : null,
    // Creates a field for inputs
    input : null,
    // Creates a field for outputs
    output : null

}
// The entry point or happens when we load up the HTML
function start() {
    // Creates an input in the HTML
    Controls.input = document.createElement("input");
    // Sets the width of the input as 140 pixels
    Controls.input.style.width = "140px";
    // Sets the height to 25 pixels
    Controls.input.style.height = "25px";
    // Sets the input type to number
    Controls.input.type = "number";
    // Appends a node as the last child of the node
    document.body.appendChild(Controls.input);
    // Creates a button in our HTML file
    Controls.button = document.createElement("button");
    // Sets the width to 140 pixels
    Controls.button.style.width = "140px";
    // Sets the height to 25 pixels
    Controls.button.style.height = "25px";
    // Displays a message on the button that says calculate tip
    Controls.button.innerHTML = "Calculate Tip";
    // Listens for the button to be clicked, and when it is activate the function below
    Controls.button.addEventListener("click", onButtonClick);
    // Appends a node as the last child of the node
    document.body.appendChild(Controls.button);


}
// This function activates when the button is clicked
function onButtonClick(eventData) {
    // Defines Name as the input we enter in the function
    // If the input is empty, show this error message
    if(validateInput(true)) {
        // This enters the error message into the HTML
        document.body.innerHTML += "<br>Please enter a number if you want the calculator to work";
        // This activates if there has been data entered into the input
    } else  {
        // Displays the tip
       tipCalc();   
    }

}
// The function we'll use to check for information entered
function validateInput() {

    let data = Controls.input.value;
    // Checks to see if the data field is empty
    if(data == "" || data < 0) {
        // If the data field is empty then return this function as true
        return true;
    }
}

function tipCalc() {
    // Gets variable price from the number inputted by the user
    let price = Controls.input.value;
    // Calculates the tip by finding 10 percent of the price
    let tip = price * .10;
    // Adds the price and tip together
    let finalPrice = tip + price * 1;
    // If the price is greater than 0, activate this code
    if(price > 0) {
        // Displays the tip amount
        document.body.innerHTML += "<br>Tip: $"+tip; 
        // Displays the total price
        document.body.innerHTML += "<br>Total: $"+finalPrice; 
    }

}