"use strict";
var choice = document.getElementById('yourChoice');
var results = document.getElementById('results');
var winner = document.getElementById('winner');

var randomNum = function () {
    var randomHand = Math.floor((Math.random() * 3));
    if (randomHand === 0) {
        results.innerHTML = 'rock';
        compChoice = 0;
    } else if (randomHand === 1) {
        results.innerHTML = 'paper';
        compChoice = 1;
    } else {
        results.innerHTML = 'scissors';
        compChoice = 2;
    }
}

var compChoice;

/* Ok, I am trying to capture the choices from
the clicks, but with my limited knowledge of the DOM,
I'm not too sure how else to do it but use a listener
and then change the value of var choice to the button
being clicked on.
*/

//TODO: You just need to figure out the logic to compare choice1 with choice2 and render it to page...
var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        winner.innerHTML = 'Tie';
    } else if ((choice1 === 0 && choice2 === 1) || (choice1 === 1 && choice2 === 2) || (choice1 === 2 && choice2 === 0)) {
        winner.innerHTML = 'Lose';
    } else if ((choice1 === 1 && choice2 === 0) || (choice1 === 0 && choice2 === 2)) {
        winner.innerHTML = 'Win';
    } else {
        winner.innerHTML = "I don't know what happened?";
    }
};

//0
var rock = function (event) {
    randomNum();
    choice.innerHTML = 'rock';
    var choice1 = 0;
    compare(choice1, compChoice);
}

//1
var paper = function (event) {
    randomNum();
    choice.innerHTML = 'paper';
    var choice1 = 1;
    compare(choice1, compChoice);
}

//2
var scissors = function (event) {
    randomNum();
    choice.innerHTML = 'scissors';
    var choice1 = 2;
    compare(choice1, compChoice);
}






// register the listener to handle clicks on ROCK
document.getElementById('rock').addEventListener('click', rock)
// register the listener to handle clicks on PAPER
document.getElementById('paper').addEventListener('click', paper);
// register the listener to handle clicks on SCISSORS
document.getElementById('scissors').addEventListener('click', scissors);
