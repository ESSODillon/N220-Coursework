    // N220 Section 28238
    // Dillon Polley
    // Week 4 Lab
    // Mouse Chase
    // 9/16/2020

    // Creates a constant called ball for us to use later
    const Ball = {
        // Defines the x coordinates of the ball as 200
        x : 200,
        // Defines the y coordinates of the ball as 300
        y : 300,
        // Defines the fall speed along the x axis as 3
        fallX : 3,
        // Defines the fall speed along the y axis as 3
        fallY : 3,
        // Defines the  radius of the ball as 30
        radius : 30,
        // Defines color of the ball, so if we call for a fill later we can call on the color defined here
        color : "blue",
    }
    // Sets up the canvas that we'll be working on
    function setup() {
        // Spawns the Canvas of 800px wide and 600px tall
        createCanvas(800,600);
        // Makes ellipses specify radius instead of diameter
        ellipseMode(RADIUS);
    }
    // Draws on the canvas we setup, called upon 60 times every second
    function draw() {
        // Sets the background color of our canvas
        background("grey")
        // Defines mouse position as (x,y)
        let mousePos =  {
            // Gets the x variable from the position of the mouse on the x axis
            x : mouseX,
            // Gets the y variable from the position of the mouse on the y axis
            y : mouseY,
        };
        // Says that if this function is true, activate the function underneath it. 
        if (distDetect(Ball, mousePos)) {
            // Sets the color of the ball to red 
            Ball.color = "red";
        // This activates if the function is false
        } else {
            // Sets the color back to blue
            Ball.color = "blue";
        }
        // Calls on the find mouse function, and uses two objects we've created  above.
        findMouse(Ball, mousePos);
        // Draws a circle through the function below, with the variables of the object above.   
        drawCircle(Ball);

    }
    // The function we call upon to run through the variables of the constant Ball
    function drawCircle(ba) {
        // Pushes the code below for this instance 
        push();
        // Sets fill to the variable defined as color
        fill(ba.color);
        // Draws a circle with the x, y, and radius values of Ball. 
        circle(ba.x, ba.y, ba.radius);
        // Stops running through the code beginning at push
        pop();

    }
    // The code inside this function is how the ball locates where the mouse is relative to itself
    function findMouse(ba, m) {

        // This if statement finds if the ball is above the mouse
        if (m.y > ba.y) {
            // moves the ball upwards 
            ba.y =  ba.y + ba.fallY;
        }
        // This if statement finds if the ball is below the mouse
        if (m.y < ba.y) {
            // moves the ball downwards
            ba.y =  ba.y - ba.fallY;
        }
        // This if statement finds if the ball is to the left of the mouse
        if (m.x < ba.x) {
            // moves the ball to the left
            ba.x =  ba.x - ba.fallX;
        }
        // This if statement finds if the ball is to the right of the mouse
        if (m.x > ba.x) {
            // moves the ball to the right
            ba.x =  ba.x + ba.fallX;
        }
    }
    // Detects the distance between the ball and the mouse
    function distDetect(ba, m) {
        //  Defines the  variables of the function distance relative to the ball and mouse 
        let dist = distance(ba.x, m.x, ba.y, m.y);
        // Returns as true when the ball is within 7 pixels of the ball (37 because the radius takes up 30)
        return dist < 37;

    }
    // Calculates the distance between two sets of x and y variables
    function distance(x1, x2, y1, y2) {
        // Let the distance of x equal the two variables subtracted from each other
        let dx = x1 - x2;
        // Let the distance of y equal the two variables subtracted from each other
        let dy = y1 - y2;
        // This is the mathematical equation for calculating distance after we've discovered the two new variables above
        return Math.sqrt(dx * dx + dy * dy);
    }