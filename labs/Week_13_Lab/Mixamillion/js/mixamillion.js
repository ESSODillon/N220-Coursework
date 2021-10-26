// N220 Section 28238
// Dillon Polley
// Week 13 Lab
// Mixamillion Colors
// 11/19/2020

// Doesn't allow global variables, only local
'use strict';

// Constant objects to hold various elements and properties
const Controls = {
   
    // Initialize the color block div that changes colors
    colorBlock : null, 
    // Initialize the current info div that shows the current RGB value
    currentInfo : null,
    // Initialize the first button
    button1 : null,
    // Initialize the second button
    button2 : null,
    // Initialize the third button
    button3 : null,
    // Initialize the fourth button
    button4 : null,
    // Initialize the fifth button
    button5 : null,
    // Initialize the sixth button
    button6 : null,
    // Initialize the seventh button
    button7 : null,
    // Initialize the eighth button
    button8 : null,
    // Initialize the ninth button
    button9 : null,

}

// This function activates when the page loads up
function start() {
    
    // Creates the div for the color block, and runs through all the specific styling for it. Sets the background color to black, and appends to the body of the document. 
    Controls.colorBlock = create("div", "static", "400px", "100px", "left", "10px",)
    Controls.colorBlock.style.backgroundColor = currentColor(0, 0, 0);
    Controls.colorBlock = document.body.appendChild(Controls.colorBlock);

    // Creates the div to display the current rgb values as text, and runs through all the specific styling of this div.
    Controls.currentInfo = create("div", "static", "200px", "150px", "left", "10px",)
    Controls.currentInfo.innerHTML += "Current color: " + Controls.colorBlock.style.backgroundColor;
    Controls.currentInfo = document.body.appendChild(Controls.currentInfo);

    // Creates button 1, that adds 1 to the Red value when clicked due to its event listener and set attribute
    Controls.button1 = create("button", "static", "100px", "20px", "left", "10px",);
    Controls.button1.innerHTML += "Red +1";
    Controls.button1 = document.body.appendChild(Controls.button1);
    Controls.button1.setAttribute("data-button", "first");
    Controls.button1  = addEventListener("click", buttonDetect);

    // Creates button 2, that adds 1 to the Green value when clicked due to its event listener and set attribute
    Controls.button2 = create("button", "static", "100px", "20px", "left", "10px",);
    Controls.button2.innerHTML += "Green +1";
    Controls.button2 = document.body.appendChild(Controls.button2);
    Controls.button2.setAttribute("data-button", "second");
    Controls.button2  = addEventListener("click", buttonDetect);

    // Creates button 3, that adds 1 to the Blue value when clicked due to its event listener and set attribute
    Controls.button3 = create("button", "static", "100px", "20px", "left", "10px",);
    Controls.button3.innerHTML += "Blue +1";
    Controls.button3 = document.body.appendChild(Controls.button3);
    Controls.button3.setAttribute("data-button", "third");
    Controls.button3  = addEventListener("click", buttonDetect);

    // Creates button 4, that adds 5 to the Red value when clicked due to its event listener and set attribute
    Controls.button4 = create("button", "static", "100px", "20px", "left", "10px",);
    Controls.button4.innerHTML += "Red +5";
    Controls.button4 = document.body.appendChild(Controls.button4);
    Controls.button4.setAttribute("data-button", "fourth");
    Controls.button4  = addEventListener("click", buttonDetect);

    // Creates button 5, that adds 5 to the Green value when clicked due to its event listener and set attribute
    Controls.button5 = create("button", "static", "100px", "20px", "left", "10px",);
    Controls.button5.innerHTML += "Green +5";
    Controls.button5 = document.body.appendChild(Controls.button5);
    Controls.button5.setAttribute("data-button", "fifth");
    Controls.button5  = addEventListener("click", buttonDetect);

    // Creates button 6, that adds 5 to the Blue value when clicked due to its event listener and set attribute
    Controls.button6 = create("button", "static", "100px", "20px", "left", "10px",);
    Controls.button6.innerHTML += "Blue +5";
    Controls.button6 = document.body.appendChild(Controls.button6);
    Controls.button6.setAttribute("data-button", "sixth");
    Controls.button6  = addEventListener("click", buttonDetect);

    // Creates button 7, that adds 10 to the Red value when clicked due to its event listener and set attribute
    Controls.button7 = create("button", "static", "100px", "20px", "left", "10px",);
    Controls.button7.innerHTML += "Red +10";
    Controls.button7 = document.body.appendChild(Controls.button7);
    Controls.button7.setAttribute("data-button", "seventh");
    Controls.button7  = addEventListener("click", buttonDetect);

    // Creates button 8, that adds 10 to the Green value when clicked due to its event listener and set attribute
    Controls.button8 = create("button", "static", "100px", "20px", "left", "10px",);
    Controls.button8.innerHTML += "Green +10";
    Controls.button8 = document.body.appendChild(Controls.button8);
    Controls.button8.setAttribute("data-button", "eighth");
    Controls.button8  = addEventListener("click", buttonDetect);

    // Creates button 9, that adds 10 to the Blue value when clicked due to its event listener and set attribute
    Controls.button9 = create("button", "static", "100px", "20px", "left", "10px",);
    Controls.button9.innerHTML += "Blue +10";
    Controls.button9 = document.body.appendChild(Controls.button9);
    Controls.button9.setAttribute("data-button", "ninth");
    Controls.button9  = addEventListener("click", buttonDetect);

}

function buttonDetect(event) {
    // Initialize button click as the data-button attibute set for each of the 9 buttons
    let buttonClick = event.target.getAttribute("data-button");

    // If the first button is clicked, add 1 to Red
    if (buttonClick == "first") {
        Controls.colorBlock.style.backgroundColor  =  currentColor(+1, +0, +0,);
    } 
    // If the second button is clicked, add 1 to Green
    else if (buttonClick == "second") {
        Controls.colorBlock.style.backgroundColor  =  currentColor(+0, +1, +0,);
    } 
    // If the third button is clicked, add 1 to Blue
    else if (buttonClick == "third") {
        Controls.colorBlock.style.backgroundColor  =  currentColor(+0, +0, +1,);
    }
    // If the fourth button is clicked, add 5 to Red
    else if (buttonClick == "fourth") {
        Controls.colorBlock.style.backgroundColor  =  currentColor(+5, +0, +0,);
    }
    // If the fifth button is clicked, add 5 to Green
    else if (buttonClick == "fifth") {
        Controls.colorBlock.style.backgroundColor  =  currentColor(+0, +5, +0,);
    }
    // If the sixth button is clicked, add 5 to Blue
    else if (buttonClick == "sixth") {
        Controls.colorBlock.style.backgroundColor  =  currentColor(+0, +0, +5,);
    }
    // If the seventh button is clicked, add 10 to Red
    else if (buttonClick == "seventh") {
        Controls.colorBlock.style.backgroundColor  =  currentColor(+10, +0, +0,);
    }
    // If the eighth button is clicked, add 10 to Green
    else if (buttonClick == "eighth") {
        Controls.colorBlock.style.backgroundColor  =  currentColor(+0, +10, +0,);
    }
    // If the ninth button is clicked, add 10 to Blue
    else if (buttonClick == "ninth") {
        Controls.colorBlock.style.backgroundColor  =  currentColor(+0, +0, +10,);
    }
}

// Function that determines the current color value
function currentColor(r, g, b) {

    // Returns as an RGB value
   return "rgb(" + r + ", " + g + ", " + b + ")";

}

// Runs through this function to create an element
function create(element, position, width, height, float, margin){
    // Initialize thing and creates 
    let thing = document.createElement(element);
    // Sets the position to be defined later
    thing.style.position = position;
    // Sets the width to be defined later
    thing.style.width = width; 
    // Sets the height to be defined later
    thing.style.height = height;
    // Sets the float to be defined later
    thing.style.float = float; 
    // Sets the margin to be defined later
    thing.style.margin = margin;
    // Returns thing
    return thing;
}