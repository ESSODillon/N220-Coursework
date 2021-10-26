    // N220 Section 28238
    // Dillon Polley
    // Week 5 Lab
    // Bouncing Ball 3
    // 9/24/2020

    // Sets up BallPit as a constant, that can not be changed.
    const BallPit = {
        // Creates an empty array for us to fill with instances.
        balls : [],
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
        // This for loop uses the class defined in our other page, and sets up an array in the empty array above. 
        for (let i = 0; i < 10; i++) {
            // Defines ba as an instance of the Ball class, and takes all the variables from that class. 
            let ba  = new Ball(i * 50 + 50, i * 50 + 50., random(5,-5,), random(5,-5), randomColor(), random(23, 30),);
            // Pushes each instance of this loop into the array above, we defined this loop to run 10 times, so it will create 10 balls.
            BallPit.balls.push(ba);
        }
    }

    // Calls this function 60 times a second
    function draw() {
        // Makes the canvas light grey
        background("#7f7d7c");
        // Calls upon the drawBall function ten times, and fills in each instance as a new run through.
        for  (let i = 0; i < BallPit.balls.length; i++)  {
            let ball = BallPit.balls[i];
            ball.draw();
        }
    }