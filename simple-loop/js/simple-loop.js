"use strict";
var catTalk = document.getElementById('cat-talk');
var dogTalk = document.getElementById('dog-talk');

var elements = document.getElementsByClassName('fa-dog')
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function (event) {
        var random = Math.floor(Math.random() *11);
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

//JUST NEED TO REPEAT FOR CAT

var elementsCat = document.getElementsByClassName('fa-cat')
for (let i = 0; i < elementsCat.length; i++) {
    elementsCat[i].addEventListener('mouseover', function (event) {
        var random = Math.floor(Math.random() *11);
        if (random === 0) {
            catTalk.innerHTML = 'MEOW!';
        } else if (random === 1) {
            catTalk.innerHTML = 'NO TOUCH!';
        } else if (random === 2) {
            catTalk.innerHTML = 'MEOW MEOW';
        } else if (random === 3) {
            catTalk.innerHTML = 'MEOW CHICKEN';
        } else if (random === 4) {
            catTalk.innerHTML = 'GIVE ME SNACK!';
        } else if (random === 5) {
            catTalk.innerHTML = 'I AM A CAT!';
        } else if (random === 6) {
            catTalk.innerHTML = 'MEOW MEOW MEOW MEOW';
        } else if (random === 7) {
            catTalk.innerHTML = 'GIVE ME CHICKEN';
        } else if (random === 8) {
            catTalk.innerHTML = 'PURRRR';
        } else if (random === 9) {
            catTalk.innerHTML = 'HELLO, GOOD SIR OR MADAM!';
        } else if (random === 10) {
            catTalk.innerHTML = 'NO PET ME';
        }
    })
}




