"use strict";

//To activate function use onclick on start button
//This is the anonymous function to be activated:

function myMove() {
//    we target the animation yellow circle with getElementById
    var target = document.getElementById("animation");
    //this will initiate the function frame every second value.
    //the setInterval acts like a loop?...
    var id = setInterval(frame, 10);
    var pos = 0;
    var incr = 1;
    //add a random denom to change the velocity
    var randomDenom = (Math.random() * 3);
//    This is the function that moves the target animation element
    function frame() {
            if (pos >= 580) {
                //    when it hits the edge at 850px then clear for now, will
                //    change it later to turn back, and see how I can incorporate loops
                // clearInterval(id);
                // instead of clearing to stop why not make it go backwards?
                //found solution change the sign of the increments
                incr = -1;
            } else {
                //add 1 to pos = 0
                //keep top at 0, and only move pos x-axis
                target.style.top = pos/randomDenom + 'px';
                target.style.left = pos + 'px';
            }
            //by using an incr variable you can just change
            //the sign to negative to make it go backwards when
            //it hits the edge of the box
            pos = pos + incr;
            //so we if we a negative value we can use this as an indicator to
            //go back now I have a working game that goes back and forth woot!
            if (pos == -2) {
                incr = +1;
            }
    }
}