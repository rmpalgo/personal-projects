"use strict";
var catTalk = document.getElementById('cat-talk');
var dogTalk = document.getElementById('dog-talk');

var dogSpeak = () => {
    var random = Math.floor(Math.random() *11);
    let arrTalk = ['BARK', 'NO', 'BARK BARK', 'BARK PORK', 'BARK CHICKEN', 'BARK NO', 'BARK BARK BARK BARK', 'GIVE ME FOOD', 'NO TOUCH', 'HI', 'NO PET'];
        dogTalk.innerHTML = arrTalk[random];
};

var catSpeak = () => {
    var random = Math.floor(Math.random() *11);
    let arrTalk = ['MEOW', 'NO TOUCH', 'MEOW MEOW', 'MEOW CHICKEN', 'GIVE ME SNACK', 'I AM A CAT', 'GIVE ME CHICKEN', 'MEOW MEOW MEOW MEOW', 'PURRR', 'HELLO SIR OR MADAM', 'NO PET ME'];
    catTalk.innerHTML = arrTalk[random];
};

var elements = document.getElementsByClassName('fa-dog')
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function (event) {
        var random = Math.floor(Math.random() *11);
        if (random === 0) {
            dogSpeak();
        } else if (random === 1) {
            dogSpeak();
        } else if (random === 2) {
            dogSpeak();
        } else if (random === 3) {
            dogSpeak();
        } else if (random === 4) {
            dogSpeak();
        } else if (random === 5) {
            dogSpeak();
        } else if (random === 6) {
            dogSpeak();
        } else if (random === 7) {
            dogSpeak();
        } else if (random === 8) {
            dogSpeak();
        } else if (random === 9) {
            dogSpeak();
        } else if (random === 10) {
            dogSpeak();
        }
    })
}

//JUST NEED TO REPEAT FOR CAT

var elementsCat = document.getElementsByClassName('fa-cat')
for (let i = 0; i < elementsCat.length; i++) {
    elementsCat[i].addEventListener('mouseover', function (event) {
        var random = Math.floor(Math.random() *11);
        if (random === 0) {
            catSpeak();
        } else if (random === 1) {
            catSpeak();
        } else if (random === 2) {
            catSpeak();
        } else if (random === 3) {
            catSpeak();
        } else if (random === 4) {
            catSpeak();
        } else if (random === 5) {
            catSpeak();
        } else if (random === 6) {
            catSpeak();
        } else if (random === 7) {
            catSpeak();
        } else if (random === 8) {
            catSpeak();
        } else if (random === 9) {
            catSpeak();
        } else if (random === 10) {
            catSpeak();
        }
    })
}




