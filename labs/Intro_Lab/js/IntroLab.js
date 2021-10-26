    // N220 Section 28238
    // Dillon Polley
    // Intro Lab
    // 8/27/2020

// the setup runs when the HTML page is loaded or refreshed.
    function setup() {

        // creates the canvas
        createCanvas(900, 600);

    }

    // draw() is called 60 times every second
    function draw() {

        // makes the background red
        background("red");

        // makes the stroke white
        stroke("white");
        // makes the fill white
        fill("white");

        // stroke or line thickness to 5 pixels
        strokeWeight(5);

        // draws a circle
        circle(300, 300, 60);

        //draws a square
        square(450, 270, 60, 20);

        //draws a rectangle 
        rect(620, 280, 80, 40);




    }