// N220 Section 28238
// Dillon Polley
// Week 11 Lab
// That's a lot of Div
// 11/4/2020

// Sets up the div for our usage
const Controls = {
    // Sets up the div we're going to loop through 100 times
    firstDiv : null,
};
// This code activates as soon as the page loads. 
function start() {
    // Sets up the styling for one of the hundred divs
    Controls.firstDiv = createDiv("static", "20px", "20px", "left");
}
// Sets up the function for random color
function randomColor() {
    // Defines the red value to be a random number between 1 and 255
    let r = Math.random() * 255;
    // Defines the green value to be a random number between 1 and 255
    let g = Math.random() * 255;
    // Defines the blue value to be a random number between 1 and 255
    let b = Math.random() * 255;
    // Returns as a color value
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
// The function we call on to actually create the divs, the styling is listed as arguments. 
function createDiv(position, width, height, float) {
    // Defines i as a variable for the loop
    let i; 
    // Runs through this loop of creating divs 100 times
    for (i=1; i <= 100; i++) {
        // Defines this instance of a div as block, and creates the element
        let block = document.createElement("div");
        // Sets up position to be defined in the start function
        block.style.position = position;
        // Sets up background color of individual divs to each be a random color
        block.style.backgroundColor = randomColor();
        // Sets up width to be defined in the start function
        block.style.width = width; 
        // Sets up height to be defined in the start function
        block.style.height = height;
        // Sets up float to be defined in the start function
        block.style.float = float;
        // Appends the div to the HTML page
        document.body.appendChild(block);
    }
}