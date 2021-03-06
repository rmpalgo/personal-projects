"use strict";
var choice = document.getElementById('yourChoice');
var results = document.getElementById('results');
var winner = document.getElementById('winner');

var upperCase = (str) => {
    return str.toUpperCase();
};

var randomNum = function () {
    var randomHand = Math.floor((Math.random() * 3));
    if (randomHand === 0) {
        results.innerHTML = '<em>rock</em>';
        compChoice = 'rock';
    } else if (randomHand === 1) {
        results.innerHTML = '<em>paper</em>';
        compChoice = 'paper';
    } else {
        results.innerHTML = '<em>scissors</em>';
        compChoice = 'scissors';
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
        winner.innerHTML = `It's a <strong id="tie">tie</strong>, you chose <em>${upperCase(choice1)}</em> and computer chose <em>${upperCase(choice2)}</em>!`;
    } else if ((choice1 === 'rock' && choice2 === 'paper') || (choice1 === 'paper' && choice2 === 'scissors') || (choice1 === 'scissors' && choice2 === 'rock')) {
            winner.innerHTML = `You <strong id="lost">lost</strong>, computer chose <em>${upperCase(choice2)}</em> and you chose <em>${upperCase(choice1)}</em>`;
    } else if ((choice1 === 'paper' && choice2 === 'rock') || (choice1 === 'rock' && choice2 === 'scissors') || (choice1 === 'scissors' && choice2 === 'paper')) {
        winner.innerHTML = `You <strong id="win">win</strong>! You chose <em>${upperCase(choice1)}</em> and the computer chose <em>${upperCase(choice2)}</em>`;
    }
};

//0
var rock = function (event) {
    randomNum();
    choice.innerHTML = '<em> rock </em>';
    var choice1 = 'rock';
    compare(choice1, compChoice);
}

//1
var paper = function (event) {
    randomNum();
    choice.innerHTML = '<em> paper </em>';
    var choice1 = 'paper';
    compare(choice1, compChoice);
}

//2
var scissors = function (event) {
    randomNum();
    choice.innerHTML = '<em>scissors</em>';
    var choice1 = 'scissors';
    compare(choice1, compChoice);
}

/**TODO:
 * Work on the start game button feature to start and restart the game,
 * also add feature where you can tally the wins and render on page until
 * new game or restart
 */





// register the listener to handle clicks on ROCK
document.getElementById('rock').addEventListener('click', rock)
// register the listener to handle clicks on PAPER
document.getElementById('paper').addEventListener('click', paper);
// register the listener to handle clicks on SCISSORS
document.getElementById('scissors').addEventListener('click', scissors);
