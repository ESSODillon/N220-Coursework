    // N220 Section 28238
    // Dillon Polley
    // Week 6 Lab
    // Rubber Stamp
    // 10/02/2020


    class Stamp {

        constructor (x, y, color, scale, rotate) {

            this._locX = x;

            this._locY = y; 

            this._color = color;

            this._scale = scale;

            this._rotate = rotate;

        }

        // Turns the asset _locX into a parameter we can call on
        get locX() {
            return this._locX;
        }

        set locX(data) {

            if (data == 'undefined') {
                console.trace("Tried to set an undefined value");
                return;
            }

            if (data < 0) data = 0;
            if (data > 800) data = 800;
            this._locX = data;

        }

        // Turns the asset _locY into a parameter we can call on
        get locY() {
            return this._locY;
        }

        set locY(data) {

            if (data == 'undefined') {
                console.trace("Tried to set an undefined value");
                return;
            }

            if (data < 0) data = 0;

            if (data > 600) data = 600;

            this._locY = data;
   
        }

        // Turns the asset _scale into a parameter we can call on
        get scale() {
            return this._scale;
        }

        set scale(data) {

            if (data < 0.5 || data > 2.0) {
                console.trace ("Attempted to scale outside the 0.5-2.0 range");
                return;
            }
                this._scale = data;
            }

        // Turns the asset _rotate into a parameter we can call on
        get rotate() {
            return this._rotate;
        }

        set rotate(data) {
            if (data == 'undefined') {
                console.trace("Tried to set an undefined value");
                return;
            }

            while (data > 360) data -= 360;

            while (data < 0) data += 360;

            this._rotate = data;

        }

        draw() {

            fill(this._color);

            scale(this.scale);

            rotate(this.rotate);

            // Draws the roof
            triangle(15, 0, 0, 15, 30, 15);
            // Draws the body of the house
            rect(0, 15, 30, 25);
            // Draws the door
            rect(12, 30, 10, 10);
    }
}