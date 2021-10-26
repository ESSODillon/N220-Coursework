// N220 Section 28238
// Dillon Polley
// Week 11 Lab
// Tower of Babel
// 11/4/2020

// Sets up the three divs for our usage, as constants so they can't be altered. 
const Controls = {
    // The smallest div on the tower
    firstDiv : null,
    // The middle div on the tower
    secondDiv : null,
    // The bottom div on the tower
    thirdDiv : null, 
};
// This code activates as soon as the page loads. 
function start() {
    // Where we call on the smallest div and define it's styling
    Controls.firstDiv = createDiv("absolute", "red", "150px", "120px", "40px", "30px");
    // Where we call on the middle div and define it's styling
    Controls.secondDiv = createDiv("absolute", "red", "300px", "240px", "40px", "160px");
    // Where we call on the largest div and define it's styling
    Controls.thirdDiv = createDiv("absolute", "red", "600px", "480px", "40px", "410px");
}
// The function we call on to actually create the divs, the styling is listed as arguments. 
function createDiv(position, color, width, height, left, top) {
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
        // Sets up the left of absolute to be defined in the start function
        block.style.left = left; 
        // Sets up the top of absolute to be defined in the start function
        block.style.top = top;
        // Appends the div to the HTML page
        document.body.appendChild(block);
    }
}