"use strict";

//To activate function use onclick on start button
//This is the anonymous function to be activated:

function myMove() {
//    we target the animation yellow circle with getElementById
    var target = document.getElementById("animation");
    var pos = 0;
    //this will initiate the function frame every second value.
    //the setInterval acts like a loop?...
    var id = setInterval(frame, 10);

//    This is the function that moves the target animation element
    function frame() {
        if (pos == 580) {
            //    when it hits the edge at 850px then clear for now, will
            //    change it later to turn back, and see how I can incorporate loops
            // clearInterval(id);
        // instead of clearing to stop why not make it go backwards?
            pos++;
            target.style.top = 0;
            target.style.right = pos + 'px';
        } else {
            //add 1 to pos = 0
            pos++;
            //keep top at 0, and only move pos x-axis
            target.style.top = 0;
            target.style.left = pos + 'px';

        }
    }
}