// N220 Section 28238
// Dillon Polley
// Week 11 Lab
// Don't Stand in the Fire
// 11/4/2020

// Sets up the div for our usage
const Controls = {
    // The yellow box / div on the screen
    firstDiv : null,
};
// This code activates as soon as the page loads. 
function start() {
    // Sets up the styling for the div we'll be working with
    Controls.firstDiv = createDiv("static", "yellow", "100px", "100px", "none");
}
// The function we call on to actually create the div, the styling is listed as arguments.
function createDiv(position, color, width, height, float) {
    // Defines i as a variable for the loop
    let i; 
    // Runs through this loop of creating the div one time
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
        // Adds a listener that detects when the mouse is inside the box
        block.addEventListener("mouseover", insideBox);
        // Adds a listener that detects when the mouth is outside the box
        block.addEventListener("mouseout", outsideBox);
        // The function that fires with the first event listener
        function insideBox(evt) {
            // Turn the background color to red
            evt.target.style.backgroundColor = "red"
        }
        // The function that fires with the second event listener
        function outsideBox(evt) {
            // Turn the background color to red
            evt.target.style.backgroundColor = "yellow"
        }
        // Appends the div to the HTML page
        document.body.appendChild(block);
    }
}