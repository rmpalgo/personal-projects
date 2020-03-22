"use strict";

var catTalk = document.getElementById('cat-talk');
var dogTalk = document.getElementById('dog-talk');

var dogCounter = 0;
var catCounter = 0;

// function start(event) {(setTimeout (function (event) {
//         while (dogCounter < 50) {
//             dogTalk.innerHTML = 'BARK!';
//             dogCounter++;
//         }
//     }, 2000));
// }
var elements = document.getElementsByClassName('fa-dog')
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function (event) {
        var random = Math.floor(Math.random() *10);
        if (random === 0) {
            dogTalk.innerHTML = 'BARK!';
        } else if (random === 1) {
            dogTalk.innerHTML = 'NO';
        } else if (random === 2) {
            dogTalk.innerHTML = 'BARK BARK';
        } else if (random === 3) {
            dogTalk.innerHTML = 'BARK PORK';
        } else if (random === 4) {
            dogTalk.innerHTML = 'BARK CHICKEN';
        } else if (random === 5) {
            dogTalk.innerHTML = 'BARK NO';
        } else if (random === 6) {
            dogTalk.innerHTML = 'BARK BARK BARK BARK';
        } else if (random === 7) {
            dogTalk.innerHTML = 'GIVE ME FOOD';
        } else if (random === 8) {
            dogTalk.innerHTML = 'NO TOUCH';
        } else if (random === 9) {
            dogTalk.innerHTML = 'HI';
        } else if (random === 10) {
            dogTalk.innerHTML = 'NO PET';
        }
    })
}






