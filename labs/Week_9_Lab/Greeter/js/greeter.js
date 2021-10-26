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
    // Appends a node as the last child of the node
    document.body.appendChild(Controls.input);
    // Creates a button in our HTML file
    Controls.button = document.createElement("button");
    // Sets the width to 140 pixels
    Controls.button.style.width = "140px";
    // Sets the height to 25 pixels
    Controls.button.style.height = "25px";
    // Displays a message on the button that says generate greeting
    Controls.button.innerHTML = "Generate Greeting!";
    // Listens for the button to be clicked, and when it is activate the function below
    Controls.button.addEventListener("click", onButtonClick);
    // Appends a node as the last child of the node
    document.body.appendChild(Controls.button);


}
// This function activates when the button is clicked
function onButtonClick(eventData) {
    // Defines Name as the input we enter in the function
    let Name = Controls.input.value;
    // If the input is empty, show this error message
    if(validateInput(true)) {
        // This enters the error message into the HTML
        document.body.innerHTML += "<br>Uh... You're seriously not going to tell me your name??";
        // This activates if there has been data entered into the input
    } else  {
        // Displays the greeting message
       document.body.innerHTML += "<br>Hello " + Name+"!";   

    }

}
// The function we'll use to check for information entered
function validateInput() {

    let data = Controls.input.value 
    // Checks to see if the data field is empty
    if(data == "") {
        // If the data field is empty then return this function as true
        return true;
    }
}