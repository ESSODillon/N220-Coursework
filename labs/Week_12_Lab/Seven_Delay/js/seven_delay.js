// N220 Section 28238
// Dillon Polley
// Week 12 Lab
// Seven Second Delay
// 11/10/2020

// Doesn't allow global variables, only local
'use strict';
// Constant Controls that can't be altered or messed up
const Controls = {
    // Input box to enter information into
    input : null,
    // Button to send data and act out event listeners
    button : null, 
    // Outputs information we send through this field
    output : null, 
    // An array to store all the bad words in
    badWords : null,

}
// Fires up when the webpage loads
function start() {
    // Creates an input in the HTML
    Controls.input = document.createElement("input");
    // Sets the width of the input as 140 pixels
    Controls.input.style.width = "140px";
    // Sets the height to 25 pixels
    Controls.input.style.height = "25px";
    // Sets up a placeholder that tells the user to enter text here
    Controls.input.placeholder = "Enter text";
    // Appends a node as the last child of the node
    document.body.appendChild(Controls.input);

    // Creates a button in our HTML file
    Controls.button = document.createElement("button");
    // Sets the width to 140 pixels
    Controls.button.style.width = "140px";
    // Sets the height to 25 pixels
    Controls.button.style.height = "25px";
    // Displays a message on the button that says submit
    Controls.button.innerHTML = "Submit";
    // Listens for the button to be clicked, and when it is activate the function below
    Controls.button.addEventListener("click", onButtonClick);
    // Appends a node as the last child of the node
    document.body.appendChild(Controls.button);

    // Creates a paragraph tag for us to print the test on
    Controls.output = document.createElement("p");
    // Sets the width of the output as 300 pixels
    Controls.output.style.width = "300px";
    // Sets the height of the output as 25 pixels
    Controls.output.style.height = "25px";
    // Appends a node as the last child of the node
    document.body.appendChild(Controls.output);
}

// This function activates when the button is clicked
function onButtonClick(eventData) {
    // Writes out what the paragraph tag will say on the webpage
    Controls.output.innerHTML += "<br>" + "The number of bad words detected is " + badWordDetect();
}
// Detects if a badword exists
function isABadWord(word) {
    // Defines what three words are badwords
    let badWords = "Chevy it snow";
    // Returns the bad words to lowercase 
    return badWords.toLowerCase().includes(word);
}

function badWordDetect() {
    // Initialize the input field
    let input = Controls.input.value;
    // Intitialize the string to seperate each word
    let words = input.toLowerCase().split(" ");
    // Initialize count as 0
    let count = 0;
    // Runs through this loop for as long as the array is
    for (let i = 0; i < words.length; i++) {
        // If bad words are detected, add 1 to the count
       if (isABadWord(words)) count ++;

    }
    // Returns the number of bad words detected
    return count; 
}