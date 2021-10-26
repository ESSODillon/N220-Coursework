// N220 Section 28238
// Dillon Polley
// Week 11 Lab
// Look at the Size of That Thing!
// 11/4/2020

// Sets up the div for our usage
const Controls = {
    // Sets up the div that will be growing into a massive div
    firstDiv : null,
};
// This code activates as soon as the page loads. 
function start() {
    // Sets up the styling for the div we'll be working with
    Controls.firstDiv = createDiv("static", "blue", "100px", "100px", "none");
    // Sets up the event listener that will detect when the div is clicked
    Controls.firstDiv = addEventListener("mouseup", growSize);
}
// This function will grow the div's width and height when clicked
function growSize(evt) {
    // Defines width as the width of the div
    let width = evt.target.style.width;
    // Defines height as the height of the div
    let height = evt.target.style.height;
    // Grows the width by 10 percent
    evt.target.style.width = width + 10;
    // Grows the height by 10 percent
    evt.target.style.height = height + 10;
}
// The function we call on to actually create the div, the styling is listed as arguments. 
function createDiv(position, color, width, height, float) {
    // Defines i as a variable for the loop
    let i; 
    // Runs through this loop once
    for (i=1; i <= 1; i++) {
        // Defines this instance of a div as block, and creates the element
        let block = document.createElement("div");
        // Sets up position to be defined in the start function
        block.style.position = position;
        // Sets up background color to be defined in the start function
        block.style.backgroundColor = color;
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