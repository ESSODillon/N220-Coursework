    // N220 Section 28238
    // Dillon Polley
    // Week 2 Lab
    // World Wrap Project
    // 8/31/2020


    // the setup runs when the HTML page is loaded or refreshed.
    function setup() {

        // creates the canvas, sets the length and height
        createCanvas(800, 600);

    };

    // variable Ball is a constant, so it can't be changed or overwritten
    const Ball = {
        // locX sets the ball at the X or width location of 400 on the canvas
        locX : 400,
        // locY sets the ball at the Y or length location of 300 on the canvas
        locY : 300, 
    };

    // draw() is called 60 times every second, and specifies the canvas details
    function draw() {

        // makes the background color a nice dark purple
        background("#2F2FA2");
        // colors the circle with a contrasting color
        fill("#F64C72");
        // creates a circle that appears at the predefined locX and locY + a radius of 60.
        circle(Ball.locX, Ball.locY, 60);
        // variable left is activated when the A key is pressed
        let left = keyIsDown(65);
        // variable right is activated when the D key is pressed
        let right = keyIsDown(68);
        // variable up is activated when the W key is pressed
        let up = keyIsDown(87);
        // variable down is activated when the S key is pressed
        let down = keyIsDown(83);

        // says that if the A key is pressed, the X location decreases by 5 for the length the key is held down
        if (left) {
            Ball.locX = Ball.locX - 5;

        }
        // if the Ball reaches past the x location of 0, it's sent to the location of 800
        if (Ball.locX < 0) {
            Ball.locX = 800;
        }
        // says that if the D key is pressed, the X location increases by 5 for the length the key is held down
        if (right) {
            Ball.locX = Ball.locX + 5;
        }
        // if the Ball reaches past the x location of 800, it's sent to the location of 0
        if (Ball.locX > 800) {
            Ball.locX = 0;
        }
        // says that if the W key is pressed, the Y location decreases by 5 for the length the key is held down
        if (up) {
            Ball.locY = Ball.locY - 5;
        }
        // if the Ball reaches past the y location of 0, it's sent to the location of 600
        if (Ball.locY < 0) {
            Ball.locY = 600;
        }
        // says that if the S key is pressed, the Y location increases by 5 for the length the key is held down
        if (down) {
            Ball.locY = Ball.locY + 5;
        }
        // if the Ball reaches past the y location of 600, it's sent to the location of 0
        if (Ball.locY > 600) {
            Ball.locY = 0;
        }

    }