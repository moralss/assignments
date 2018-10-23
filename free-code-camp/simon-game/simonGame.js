var listOfRandomColorMoves = [];
var listOfColors = ["red", "green", "blue", "yellow"];
var playerColorMoves = [];
var playable = true;
var onStrict = false;

var soundObj = {
    "red": "sounds/Mario-coin-sound.mp3",
    "green": "sounds/Water Drop-SoundBible.com-2039669379.wav",
    "blue": "sounds/Mario_Jumping-Mike_Koenig-989896458.wav",
    "yellow": "sounds/marimba1.wav"
};

function generateRandomArrayNumber() {
    var randomNumberArray = [];
    var randomNumber = Math.floor(Math.random() * 4);
    randomNumberArray.push(randomNumber);
    return randomNumberArray;
};

function playSounds(player) {
    for (var i in soundObj) {
        if (i === player) {
            var sound = new Audio();
            sound.src = soundObj[player];
            sound.play();
        }
    }
}

function generateSequenceOfColors(appendRandomNum) {
    appendRandomNum.forEach(element => listOfRandomColorMoves.push(listOfColors[element]));
    var i = 0;
    var interval = setInterval(function () {
        var currentIndex = i;
        document.getElementById(listOfRandomColorMoves[currentIndex]).style.background = 'white';
        setTimeout(function () {
            document.getElementById(listOfRandomColorMoves[currentIndex]).style.background = listOfRandomColorMoves[currentIndex];
            playSounds(listOfRandomColorMoves[currentIndex]);
        }, 500);
        i++;

        if (i >= listOfRandomColorMoves.length) {
            clearInterval(interval);
            playable = true;
        };
    }, 1000);
};

function determineWin(computerMoves) {
    if (computerMoves == 21) {
        alert("you won the game!");
    };
}

function updateGameLevel(level) {
    return document.getElementById('output').innerHTML = level + 1;
};


function strictModeCheckSequence(listOfRandomColorMoves, playerColorMoves) {
    for (var i in playerColorMoves) {
        if (listOfRandomColorMoves[i] !== playerColorMoves[i]) {
            updateGameLevel(0);
            alert("oops! try again")
            startGame();
        };
    };
};



function checkMatch() {
    if (onStrict == true) {
        strictModeCheckSequence(listOfRandomColorMoves, playerColorMoves);
    };

    playable = false;
    for (var i = 0; i < playerColorMoves.length; i++) {
        if (listOfRandomColorMoves[i] === playerColorMoves[i] && playerColorMoves.length === listOfRandomColorMoves.length
            && playerColorMoves.join('') === listOfRandomColorMoves.join('')) {
            updateGameLevel(listOfRandomColorMoves.length);
            generateSequenceOfColors(generateRandomArrayNumber());
            playerColorMoves = [];
        }

        else if (onStrict === false && listOfRandomColorMoves[i] !== playerColorMoves[i]) {
            alert("oop! try again")
            playerColorMoves = [];
            generateSequenceOfColors([]);
            break;
        }

        else if (i === playerColorMoves.length - 1) {
            playable = true;
        };
    };
};


function strictModeToggle() {
    if (onStrict) {
        onStrict = false;
        document.getElementById('strictModeButton').style.backgroundColor = "";
    } else {
        onStrict = true;
        document.getElementById('strictModeButton').style.backgroundColor = "green";
    }
};

function userInput(color) {
    if (playable) {
        playerColorMoves.push(color);
        playSounds(color);
    }
    checkMatch();
    determineWin(listOfRandomColorMoves.length);
};

function startGame() {
    listOfRandomColorMoves = [];
    playerColorMoves = [];
    let randomNumber = generateRandomArrayNumber();
    generateSequenceOfColors(randomNumber);
};

