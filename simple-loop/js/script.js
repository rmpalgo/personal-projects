"use strict";

//To activate function use onclick on start button
//This is the anonymous function to be activated:

function myMove() {
//    we target the animation yellow circle with getElementById
    var target = document.getElementById("animation");
    //this will initiate the function frame every second value.
    //the setInterval acts like a loop?...
    var id = setInterval(frame, 10);
    var xpos = 0;
    var ypos = 0;
    var xincr = 2;
    var yincr = 2;

    //trying to randomize the top direction;
    var random = function () {
           return (Math.random() * .01);
    }


//    This is the function that moves the target animation element
    function frame() {
        if (xpos > 580) {
            //    when it hits the edge at 850px then clear for now, will
            //    change it later to turn back, and see how I can incorporate loops
            // clearInterval(id);
            // instead of clearing to stop why not make it go backwards?
            //found solution change the sign of the increments
            xincr = -2;
            yincr = -2;
        } else {
            //add 1 to pos = 0
            //keep top at 0, and only move pos x-axis
            target.style.top = ypos + 'px';
            target.style.left = xpos + 'px';
        }
        //by using an incr variable you can just change
        //the sign to negative to make it go backwards when
        //it hits the edge of the box
        xpos = xpos + xincr;
        ypos = ypos + yincr;
        //so we if we a negative value we can use this as an indicator to
        //go back now I have a working game that goes back and forth woot!

        if (xpos < 0) {
            xincr = 2;
            if (ypos < 0) {
                //changing the incr yincr by 1.5 changes directions dy.
                yincr = 1.5 * xincr;
            } else if (ypos > 580) {
                yincr = -2;
            }
        }
    }
}