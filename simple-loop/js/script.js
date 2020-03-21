"use strict";

//To activate function use onclick on start button
//This is the anonymous function to be activated:

function myMove() {
//    we target the animation yellow circle with getElementById
    var target = document.getElementById("animation");
    var pos = 0;
    //this will initiate the function frame every second value.
    var id = setInterval(frame, 10);
//    This is the function that moves the target animation element
    function frame() {
        if (pos == 850) {
        //    when it hits the edge at 850px then clear for now, will
        //    change it later to turn back, and see how I can incorporate loops
            clearInterval(id);
        } else {
            //add 1 to pos = 0
            pos++;
            //add
            elem.style.top = pos + 'px';

        }
    }







}