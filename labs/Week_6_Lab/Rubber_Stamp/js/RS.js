    // N220 Section 28238
    // Dillon Polley
    // Week 6 Lab
    // Rubber Stamp
    // 10/02/2020

    // Turns browser into a more strict mode of interpretation. Stops global variables.
    'use strict';

     // Sets up StampCollect as a constant, that can not be changed.
     const StampCollect = {
        // Creates an empty array for us to fill with instances.
        stamps : [],
    };

    // function that makes every stamp a random color when the page is loaded
    function randomColor() {
        // defines red value as random
        let r = random(255);
        // defines green value as random
        let g = random(255);
        // defines blue value as random
        let b = random(255);
        // sends back the function in red / green / blue form
        return color(r, g, b);
    }

    // Sets up the work area. Like settings
    function setup() {
        // Makes the canvas 800 pixels long and 600 high
        createCanvas(800, 600);
        // If the mouse has been clicked, run through the code below 
        if (mouseClicked()) {
            // Defines st as an instance of the Stamp class, and follows the setup defined by the constructor
            let st = new Stamp(mouseX, mouseY, randomColor(), random(0.5, 2.0), random(0, 360),);
            // When the mouse is clicked, push a new instance into the array
            StampCollect.stamps.push(st); 
        }
    }

    // Calls this function 60 times a second
    function draw() {
        // Makes the canvas light grey
        background("#7f7d7c");
        // Continues redrawing the stamp where it was placed, so that it stays on screen. 
        for (let i = 0; i < StampCollect.stamps.length; i++) {
            // Defines stamp as an instance in the array
            let stamp = StampCollect.stamps[i];
            // Keeps running through the draw function in the stamp class
    
            stamp.draw();
            stamp.draw();
            stamp.draw();
            stamp.draw();
        }
    } 

    // Function for detecting mouse clicks
    function mouseClicked() {
        // If it has been clicked return true
        return true;
    }