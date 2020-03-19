"use strict";
var choice = document.getElementById('yourChoice');
var results = document.getElementById('results');
console.log(results.innerHTML);


/* Ok, I am trying to capture the choices from
the clicks, but with my limited knowledge of the DOM,
I'm not too sure how else to do it but use a listener
and then change the value of var choice to the button
being clicked on.
*/
var rock = function (event) {
    choice.innerHTML = 'rock';
}

var paper = function (event) {
    choice.innerHTML = 'paper';
}

var scissors = function (event) {
    choice.innerHTML = 'scissors';
}

var listener = function (event) {
    var randomHand = Math.floor((Math.random() * 3));
    if (randomHand === 0) {
        results.innerHTML = 'Paper';
    } else if (randomHand === 1) {
        results.innerHTML = 'Rock';
    } else {
        results.innerHTML = 'Scissors';
    }
}




// register the listener to handle clicks on ROCK
document.getElementById('rock').addEventListener('click', listener);
document.getElementById('rock').addEventListener('click', rock)
// register the listener to handle clicks on PAPER
document.getElementById('paper').addEventListener('click', listener);
document.getElementById('paper').addEventListener('click', paper);
// register the listener to handle clicks on SCISSORS
document.getElementById('scissors').addEventListener('click', listener);
document.getElementById('scissors').addEventListener('click', scissors);
