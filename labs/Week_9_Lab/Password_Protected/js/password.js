// Disables global variables
"use strict";

const Controls = {

    // Creates a field for buttons
    button : null,
    // Creates a field for the input
    input : null,
    // Creates a field for outputs
    output : null,
    // Creates a field for the password
    input_2 : null

}
// The entry point or happens when we load up the HTML
function start() {

    // Creates an input in the HTML
    Controls.input = document.createElement("input");
    // Sets the width of the input as 140 pixels
    Controls.input.style.width = "140px";
    // Sets the height to 25 pixels
    Controls.input.style.height = "25px";
    // Sets up a placeholder for the username field
    Controls.input.placeholder = "Username";
    // Appends a node as the last child of the node
    document.body.appendChild(Controls.input);

    // Creates an input in the HTML
    Controls.input_2 = document.createElement("input");
    // Sets the width of the input as 140 pixels
    Controls.input_2.style.width = "140px";
    // Sets the height to 25 pixels
    Controls.input_2.style.height = "25px";
    // Sets up a placeholder for the password field
    Controls.input_2.placeholder = "Password";
    // Sets the attribute of the input to a password
    Controls.input_2.setAttribute("type", "password");
    // Appends a node as the last child of the node
    document.body.appendChild(Controls.input_2);

    // Creates a button in our HTML file
    Controls.button = document.createElement("button");
    // Sets the width to 140 pixels
    Controls.button.style.width = "140px";
    // Sets the height to 25 pixels
    Controls.button.style.height = "25px";
    // Displays a message on the button that says generate greeting
    Controls.button.innerHTML = "Login";
    // Listens for the button to be clicked, and when it is activate the function below
    Controls.button.addEventListener("click", onButtonClick);
    // Appends a node as the last child of the node
    document.body.appendChild(Controls.button);


}
// This function activates when the button is clicked
function onButtonClick(eventData) {
    // If the login info matches the set variables, then this activates
     if(loginCheck()) {
        // Displays the access granted message
        document.body.innerHTML += "<br>Access Granted"; 
        // If it doesn't match, display this
     } else {
        // Displays the access denied message
        document.body.innerHTML += "<br>Access Denied"; 
     }

}
// Checks the login inputs with a preset username and password
function loginCheck() {
    // Sets the 1st data input to what is filled in for username
    let data_1 = Controls.input.value;
    // Sets the 2nd data input to what is filled in for password
    let data_2 = Controls.input_2.value;
    // Presets a username
    let user = "username";
    // Presets a password
    let pass = "Pa$$w0rd";
    // Checks to see if everything matches up
    if(data_1 == user && data_2 == pass) {
        return true;
    }

}