// N220 Section 28238
// Dillon Polley
// Week 13 Lab
// Pretty Divs, All In A Row
// 11/19/2020

// Doesn't allow global variables, only local
'use strict';

// Constant objects to hold various elements and properties
const Controls = {
    // Holds the first div
    firstDiv : null,
    // Holds the second div
    secondDiv : null,
    // Holds the third div
    thirdDiv : null,
}

// This function activates when the page loads up
function start() {
    // Runs through the create element function to initialize the div
    Controls.firstDiv = create("div", "200px", "200px", "5px",);
    // Sets the background color to grey
    Controls.firstDiv.style.backgroundColor = "grey";
    // Appends the div to the body
    Controls.firstDiv = document.body.appendChild(Controls.firstDiv);
    // Sets the attribute to data-color, so the event handler will know to work with it, and identifies this instance as first.
    Controls.firstDiv.setAttribute("data-color", "first");
    // Adds the event listener to activate when the div is clicked
    Controls.firstDiv = addEventListener("click", divClick);

    // Runs through the create element function to initialize the div
    Controls.secondDiv = create("div", "200px", "200px", "5px",);
    // Sets the background color to grey
    Controls.secondDiv.style.backgroundColor = "grey";
    // Appends the div to the body
    Controls.secondDiv = document.body.appendChild(Controls.secondDiv);
    // Sets the attribute to data-color, so the event handler will know to work with it, and identifies this instance as second.
    Controls.secondDiv.setAttribute("data-color", "second");
    // Adds the event listener to activate when the div is clicked
    Controls.secondDiv = addEventListener("click", divClick);

    // Runs through the create element function to initialize the div
    Controls.thirdDiv = create("div", "200px", "200px", "5px",);
    // Sets the background color to grey
    Controls.thirdDiv.style.backgroundColor = "grey";
    // Appends the div to the body
    Controls.thirdDiv = document.body.appendChild(Controls.thirdDiv);
    // Sets the attribute to data-color, so the event handler will know to work with it, and identifies this instance as third.
    Controls.thirdDiv.setAttribute("data-color", "third");
    // Adds the event listener to activate when the div is clicked
    Controls.thirdDiv = addEventListener("click", divClick);
    
}

// The event handler that activates when the event is heard
function divClick(event) {
    // Initialize color change with the data-color attribute
   let colorChange = event.target.getAttribute("data-color");
    // If the div clicked identifies as the first div, change its background color to red
   if (colorChange == "first") {
        Controls.firstDiv.style.backgroundColor = "red";
    // If the div clicked identifies as the second div, change its background color to green
   } else if (colorChange == "second") {
       Controls.secondDiv.style.backgroundColor = "green";
    // If the div clicked identifies as the third div, change its background color to blue
   } else if (colorChange == "third") {
       Controls.thirdDiv.style.backgroundColor = "blue";
   }
}

// Runs through this function to create an element
function create(element, width, height, margin){
    // Initialize block and creates 
    let block = document.createElement(element);
    // Sets the position to static
    block.style.position = "static";
    // Sets the width to be defined later
    block.style.width = width; 
    // Sets the height to be defined later
    block.style.height = height;
    // Sets the float to left
    block.style.float = "left"; 
    // Sets the margin to be defined later
    block.style.margin = margin;
    // Returns block
    return block;
}