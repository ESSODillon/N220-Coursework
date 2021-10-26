    // N220 Section 28238
    // Dillon Polley
    // Week 5 Lab
    // Bouncing Ball 3
    // 9/24/2020

    // Tracks the attributes of a Ball
    class Ball {
        // Sets up the variable order for the ball
        constructor(x, y, fx, fy, color, r) {
            // The location along the x axis
            this._locX = x;
            // The location along the y axis
            this._locY = y;
            // The velocity at which the ball moves along the x axis
            this._fallX = fx;
            // The velocity at which the ball moves along the y axis
            this._fallY = fy;
            // The color of this ball
            this._color = color;
            // The radius size of this ball
            this._radius = r
        }

            // The function we call upon to create each array instance into a circle that moves, and bounces.
        draw () {
        // Uses the p5.js circle command to create a circle according to the preset variables found in our class.
        circle(this._locX, this._locY, this._radius);
        // Sets the fill color to the random color function we've called on
        fill(this._color);
        // Sets up the action of moving along the x axis
        this._locX =  this._locX + this._fallX;
        // Sets up the action of moving along the y axis
        this._locY =  this._locY + this._fallY;
        // This if statement is what causes the balls to bounce when the reach either edge of the x axis
        if (this._locX > 800 || this._locX < 0) {
            this._fallX = this._fallX * -1;
        }
        // This if statement is what causes the balls to bounce when the reach either edge of the y axis
        if (this._locY > 600 || this._locY < 0) {
            this._fallY = this._fallY * -1;
        }
    }

}