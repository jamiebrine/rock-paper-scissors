var userScore = 0;
var cpuScore = 0;
var userChoice;
var cpuChoice;

const main = document.getElementById("main");
const output = document.getElementById("output");
const psDisplay = document.getElementById("ps-display");
const csDisplay = document.getElementById("cs-display");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

const choices = ["rock", "paper", "scissors"];

console.log(output.innerText);

document.getElementById("rock").addEventListener("click", chooseRock);
document.getElementById("paper").addEventListener("click", choosePaper);
document.getElementById("scissors").addEventListener("click", chooseScissors);
document.getElementById("play-again").addEventListener("click", hideModal);


function play() {
    cpuChoice = Math.floor(Math.random() * 3);
    console.log("User Choice: " + choices[userChoice]);
    console.log("CPU Choice: " + choices[cpuChoice]);

    output.innerText = "You chose " + choices[userChoice] + ", CPU chose " + choices[cpuChoice] + "."

    if (userChoice === cpuChoice) {
        output.innerText += drawMessage();
    }

    else if (userChoice === ((cpuChoice + 1) % 3)) {
        output.innerText += winMessage();
        userScore++;
    }

    else {
        output.innerText += loseMessage();
        cpuScore++;
    }

    psDisplay.innerText = userScore;
    csDisplay.innerText = cpuScore;
    checkWin();

}

function checkWin() {
    if (userScore === 5) {
        modalContent.innerText = "You win with a score of " + userScore + " - " + cpuScore
        showModal();
    }

    else if (cpuScore === 5) {
        modalContent.innerText = "You lose with a score of " + userScore + " - " + cpuScore
        showModal();
    }
}

function showModal() {
    userScore = 0;
    cpuScore = 0;
    psDisplay.innerText = userScore;
    csDisplay.innerText = cpuScore;

    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    main.style.display = "none";
}

function hideModal() {
    modal.style.display = "none";
    main.style.display = "flex";
}


function drawMessage() {
    return " It's a draw."
}

function winMessage() {
    return " You win."
}

function loseMessage() {
    return " CPU win."
}



function chooseRock() {
    userChoice = 0;
    play();
}

function choosePaper() {
    userChoice = 1;
    play();
}

function chooseScissors() {
    userChoice = 2;
    play();
}
