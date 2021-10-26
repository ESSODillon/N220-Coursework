  function setup() {

        createCanvas(800, 600);

    };

    const Ball = {
    
        locX : 400,
     
        locY : 300, 
        
        fallX : 5,
        
        fallY : 5,
    };

    function draw() {

        background("#00a388");

        fill("#ff6138");
        
        circle(Ball.locX, Ball.locY, 60);
        
        Ball.locX = Ball.locX + Ball.fallX;
        
        Ball.locY = Ball.locY + Ball.fallY;
       
        if (Ball.locX == 800 || Ball.locX == 0) {
            Ball.fallX = Ball.fallX * -1;
        }
         
        if (Ball.locY == 600 || Ball.locY == 0) {
            Ball.fallY = Ball.fallY * -1;
        }
    }