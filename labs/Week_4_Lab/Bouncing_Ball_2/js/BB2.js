    // N220 Section 28238
    // Dillon Polley
    // Week 4 Lab
    // Bouncing Ball 2
    // 9/17/2020

    // Creates a constant called ball for us to use later
    const Ball = {
        // Defines the x coordinates of the ball as 100
        x : 100,
        // Defines the y coordinates of the ball as 150
        y : 150,
        // Defines the  radius of the ball as 30
        radius : 30,
        // Defines the fall speed along the x axis as 5 
        fallX : 5,
        // Defines the fall speed along the y axis as 5
        fallY: 5,
        // Defines color of the ball, so if we call for a fill later we can call on the color defined here
        color : "#e63946"
    };

    const Block = {
        // Defines the x coordinates of Block as 250
        x : 250, 
        // Defines the y coordinates of Block as 200
        y : 200, 
        // Defines the width of Block as 250
        width : 250, 
        // Defines the height of Block as 150
        height : 150,
        // Defines color of the Block to be called upon later
        color : "#f1faee",
    };
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
        background("#1d3557");
        // Asks if the ball has passed the block hit test
        if (blockHitTest(Block, Ball, Ball.radius)) {
            // If it has hit the block, this part detects if the ball has hit the Y axis
            if (detectBlockY(Block, Ball, Ball.radius)) {
                // If so, then the ball reverses the direction in which it is falling
                Ball.fallX = Ball.fallX * -1;
            }
            // If it has hit the block, this part detects if the ball has hit the Y axis
            if (detectBlockX(Block, Ball, Ball.radius)) {
                // If so, then the ball reverses the direction in which it is falling
                Ball.fallY = Ball.fallY * -1;
            }
        }
        // Uses the drawBall function to draw a ball according to our defined constant of Ball
        drawBall(Ball);
        // Uses the drawBlock function to draw a block according to our defined constant of Block
        drawBlock(Block);

    }

    // Defines the function that tests whether or not the rectangle has been hit
    function blockHitTest(r, p, radius=0) {
        // Defines the left side of the rectangle
        let left = r.x - radius;
        // Defines the right side of the rectangle
        let right = r.x + r.width + radius;
        // Defines the top side of the rectangle
        let top = r.y - radius; 
        // Defines the bottom side of the rectangle
        let bottom = r.y + r.height + radius;
        // Says if the circle is past the left side, it isn't hitting the rectangle. 
        if (p.x < left) return false; 
        // Says if the circle is past the right side, it isn't hitting the rectangle. 
        if (p.x > right) return false;
        // Says if the circle is past the top side, it isn't hitting the rectangle. 
        if (p.y < top) return false; 
        // Says if the circle is past the bottom side, it isn't hitting the rectangle. 
        if (p.y > bottom) return false;
        // States that if all the above statments are false, then the circle must be hitting the rectangle
        return true; 
    }

    // Detects if the ball has hit the top or bottom of the rectangle
    function detectBlockY(r, p, radius = 0) {
        // Defines the top side of the rectangle
        let top = r.y - radius; 
        // Defines the bottom side of the rectangle
        let bottom = r.y + r.height + radius;
        // Says if the circle has not hit the top or bottom, this statement is false
        if (p.y == top || p.y == bottom) return false; 
        // Return true once past the above statement
        return true;
    }
   
    // Detects if the ball has hit the right or left of the rectangle
    function detectBlockX(r, p, radius = 0) {
        // Defines the left side of the rectangle
        let left = r.x - radius;
        // Defines the right side of the rectangle
        let right = r.x + r.width + radius;
        // Says if the circle has not hit the right or left, this statement is false
        if (p.x == left || p.x == right) return false;
        // Return true once past the above statement
        return true;
    }

    // The function we call upon to run through the variables of the constant Block
    function drawBlock(bl) {
        // Pushes the code below for this instance  
        push();
        // Sets the fill of the block to the variable set to color
        fill(bl.color);
        // Creates a rectangle with the variables set in the constant Block
        rect(bl.x, bl.y, bl.width, bl.height);
        // Stops running through the code beginning at push
        pop();
    }

    // The function we call upon to run through the variables of the constant Ball
    function  drawBall(ba) {
        // Pushes the code below for this instance  
        push();
        // Sets the fill of the ball to the variable set to color
        fill(ba.color);
        // Creates a circle with the variables set in the constant Ball
        circle(ba.x, ba.y, ba.radius);
        // This is just saying that the current state of x is adding 5 every frame
        ba.x =  ba.x + ba.fallX;
        // This is just saying that the current state of y is adding 5 every frame
        ba.y =  ba.y + ba.fallY;
        // This if statement creates the bouncing effect along the X axis. It's basically saying that if the ball makes it to 800 OR 0 on the x axis, that it turns around. 
        if (ba.x > 800 || ba.x < 0) {
            // This is done by switching the fallX variable, by multiplying it by negative 1. 
            ba.fallX = ba.fallX * -1;
        }
        // This if statement creates the bouncing effect along the Y axis. It's basically saying that if the ball makes it to 600 OR 0 on the y axis, that it turns around.
        if (ba.y > 600 || ba.y < 0) {
            // This is done by switching the fallY variable, by multiplying it by negative 1.
            ba.fallY = ba.fallY * -1;
        }
        // Stops running through the code beginning at push
        pop();
    }