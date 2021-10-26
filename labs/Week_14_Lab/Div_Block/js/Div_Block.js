// N220 Section 28238
// Dillon Polley
// Week 14 Lab
// Div Block
// 11/26/2020

'use strict';

// Constant objects to hold various elements and properties
const Controls = {
    // Initializes the object for us to work with
    divBlocks : null,
}

// This function activates when the page loads up
function start() {
    // Runs through this loop 16 times to create 16 divs
    for(let i=0; i <=15; i++) {
        // Calls on create element function to initialize the div
        Controls.divBlocks = create("div", "static", "200px", "100px", "left",);
        // Sets the background color to red
        Controls.divBlocks.style.backgroundColor = "red"; 
        // Appends child to the body
        Controls.divBlocks = document.body.appendChild(Controls.divBlocks); 
        // Sets the attribute and name
        Controls.divBlocks.setAttribute("data-color", "block");
        // Adds event listener for when the div is clicked
        Controls.divBlocks  = addEventListener("click", divClick);
    }
}

// This function detects when a div has been clicked
function divClick(event) {
    // Gets the data-color attribute and assigns it to a variable
    let colorChange = event.target.getAttribute("data-color");
    // If the target clicked is a block then change its background color to random color
    if (colorChange == "block") {
        event.target.style.backgroundColor = randomColor();
    }
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

// Runs through this function to create an element
function create(element, position, width, height, float,){
    // Initialize block and creates 
    let block = document.createElement(element);
    // Sets the position to static
    block.style.position = position;
    // Sets the width to be defined later
    block.style.width = width; 
    // Sets the height to be defined later
    block.style.height = height;
    // Sets the float to be defined later
    block.style.float = float;
    // Returns block
    return block;
}