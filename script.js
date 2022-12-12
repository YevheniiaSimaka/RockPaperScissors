var paper = document.querySelector(".right .paper");
var rock = document.querySelector(".right .rock");
var scissors = document.querySelector(".right .scissors");
var robotPaper = document.querySelector(".left .paper");
var robotRock = document.querySelector(".left .rock");
var robotScissors = document.querySelector(".left .scissors");
var answer;
var random = Math.random() * 3;
var randomNumber = Math.floor((random)) + 1;
var result;
var message = document.querySelector(".message");
var open = document.querySelector(".open");

open.style.display = "none";

function numberToResult() {

    if (randomNumber == 1) {
        answer = "rock";
    } else if (randomNumber == 2) {
        answer = "paper";
    } else if (randomNumber == 3) {
        answer = "scissors";
    }

}

function wonOrLose() {

    if (result == "won") {
        message.innerHTML = "Congratulations! You won!";
        document.querySelector(".happy").style.display = "block";
    } else if (result == "lost") {
        message.innerHTML = "You are such a loser! You Lost!";
        document.querySelector(".sad").style.display = "block";
    } else if (result == "tie") {
        message.innerHTML = "We are tie! I am gonna win you next time!";
        document.querySelector(".mad").style.display = "block";
    }

}

function paperChoice() {

    rock.style.display = "none";
    scissors.style.display = "none";

    numberToResult();

    if (answer == "rock") {
        robotPaper.style.display = "none";
        robotScissors.style.display = "none";
        result = "won";
    } else if (answer == "paper") {
        robotRock.style.display = "none";
        robotScissors.style.display = "none";
        result = "tie";
    } else if (answer == "scissors") {
        robotRock.style.display = "none";
        robotPaper.style.display = "none";
        result = "lost";
    }

    wonOrLose();

    open.style.display = "inline-block";
    document.querySelector(".gameName").style.display = "none";
}


function rockChoice() {

    paper.style.display = "none";
    scissors.style.display = "none";

    numberToResult();

    if (answer == "rock") {
        robotPaper.style.display = "none";
        robotScissors.style.display = "none";
        result = "tie";

    } else if (answer == "paper") {
        robotRock.style.display = "none";
        robotScissors.style.display = "none";
        result = "lost";
    } else if (answer == "scissors") {
        robotRock.style.display = "none";
        robotPaper.style.display = "none";
        result = "won";
    }

    wonOrLose();

    open.style.display = "inline-block";
    document.querySelector(".gameName").style.display = "none";
}


function scissorsChoice() {

    paper.style.display = "none";
    rock.style.display = "none";

    numberToResult();

    if (answer == "rock") {
        robotPaper.style.display = "none";
        robotScissors.style.display = "none";
        result = "lost";

    } else if (answer == "paper") {
        robotRock.style.display = "none";
        robotScissors.style.display = "none";
        result = "won";
    } else if (answer == "scissors") {
        robotRock.style.display = "none";
        robotPaper.style.display = "none";
        result = "tie";
    }

    wonOrLose();

    open.style.display = "inline-block";
    document.querySelector(".gameName").style.display = "none";
}