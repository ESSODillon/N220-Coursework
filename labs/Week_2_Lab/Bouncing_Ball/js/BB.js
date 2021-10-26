   // N220 Section 28238
    // Dillon Polley
    // Week 2 Lab
    // Bouncing Ball Project
    // 8/31/2020


    // the setup runs when the HTML page is loaded or refreshed.
    function setup() {

        // creates the canvas, sets the length and height
        createCanvas(800, 600);

        // colors the circle with a contrasting color
        fill(randomColor());

    };

    // variable Ball is a constant, so it can't be changed or overwritten
    const Ball = {
        // locX sets the ball at the X or width location of 400 on the canvas
        locX : 400,
        // locY sets the ball at the Y or length location of 300 on the canvas
        locY : 300, 
        // fallX sets the speed at which the ball is rising or falling along the X axis
        fallX : 5,
        // fallY sets the speed at which the ball is rising or falling along the Y axis
        fallY : 5,
    };

    // draw() is called 60 times every second, and specifies the canvas details
    function draw() {
        // makes the background color a light green
        background("#00a388");
        
        // creates a circle that appears at the predefined locX and locY + a radius of 60.
        circle(Ball.locX, Ball.locY, 60);
        // This is just saying that the current state of x is adding 5 every frame
        Ball.locX = Ball.locX + Ball.fallX;
        // This is just saying that the current state of y is adding 5 every frame
        Ball.locY = Ball.locY + Ball.fallY;
        // This if statement creates the bouncing effect along the X axis. It's basically saying that if the ball makes it to 800 OR 0 on the x axis, that it turns around. This is done by switching the fallX variable, by multiplying it by negative 1. 
        if (Ball.locX == 800 || Ball.locX == 0) {
            Ball.fallX = Ball.fallX * -1;
        }
        // This if statement creates the bouncing effect along the Y axis. It's basically saying that if the ball makes it to 600 OR 0 on the y axis, that it turns around. This is done by switching the fallY variable, by multiplying it by negative 1. 
        if (Ball.locY == 600 || Ball.locY == 0) {
            Ball.fallY = Ball.fallY * -1;
        }
    }

    function randomColor() {

        let r = random(255);
    
        let g = random(255);
    
        let b = random(255);
    
        return color(r, g, b);
    
        
    
    }