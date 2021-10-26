    // N220 Section 28238
    // Dillon Polley
    // Week 3 Lab
    // Multiple Bouncing Balls
    // 9/9/2020

    // Ball sets up the arrays and speeds for the circles. Also it's a constant so it can't be changed
    const Ball = {
        // Sets up 10 circles X coordinates
        locX : [50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
        // Sets up 10 circles Y coordinates
        locY : [200, 500, 300, 100, 400, 50, 450, 150, 350, 250],
        // Makes circles move along the x axis at different speeds and directions
        fallX : [5, -4, -3, 4, -5, 3, -4, 5, -3, 5],
        // Makes circles move along the y axis at different speeds and directions
        fallY : [5, -5, 4, 3, -4, 5, 3, 4, 5, -3, 5],
   

    };
    
    // function that makes every circle a random color when the page is loaded
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
        // Sets the fill for all objects on the canvas as random color that we made above
        fill(randomColor());

    }

    // Calls this function 60 times a second
    function draw() {
        // Makes the canvas light grey
        background("#7f7d7c");
        // For loop that runs through our arrays and ball object above
        for (let i = 0; i < Ball.locX.length; i++) {
           // Tells us to run through the object as a circle
            circle(Ball.locX[i], Ball.locY[i], 30,);
            // Sets up the action of moving along the x axis
            Ball.locX[i] = Ball.locX[i] + Ball.fallX[i];
            // Sets up the action of moving along the y axis
            Ball.locY[i] = Ball.locY[i] + Ball.fallY[i];
            
            // This if statement is what causes the balls to bounce when the reach either edge of the x axis
            if (Ball.locX[i] > 800 || Ball.locX[i] < 0) {
            Ball.fallX[i] = Ball.fallX[i] * -1;
            }
            // This if statement is what causes the balls to bounce when the reach either edge of the y axis
            if (Ball.locY[i] > 600 || Ball.locY[i] < 0) {
            Ball.fallY[i] = Ball.fallY[i] * -1;
            }
        }
    }