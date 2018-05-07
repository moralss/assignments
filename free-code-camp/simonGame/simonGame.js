var listOfRandomColorMoves = [];
var listOfColors = ["red", "green", "blue", "yellow"];

var arraySounds = ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", 
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", 
    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"];



var playerColorMoves = [];
var playable = true;
var onStrictMode = false;

function generateRandomNumber() {
    var randomNumberArray = [];
    var randomNumber = Math.floor(Math.random() * 4);
    randomNumberArray.push(randomNumber);
    return randomNumberArray;
};



function playSoundS(listComputerColors) {


};

function generateSequenceOfColors(appendRandomNum) {
    appendRandomNum.forEach(element => listOfRandomColorMoves.push(listOfColors[element]));
    var i = 0;
    var interval = setInterval(function () {
        var currentIndex = i;
        document.getElementById(listOfRandomColorMoves[currentIndex]).style.background = 'white';
        setTimeout(function () {
            document.getElementById(listOfRandomColorMoves[currentIndex]).style.background = listOfRandomColorMoves[currentIndex];
            arraySounds[currentIndex].play();

        }, 500);
        i++;
        if (i >= listOfRandomColorMoves.length) {
            clearInterval(interval);
            playable = true;
        }

    }, 1000);
};

function updateDisplay(level) {
    return document.getElementById('output').innerHTML = level + 1;
};


function strictMode(listOfRandomColorMoves, playerColorMoves) {
    for (var i in playerColorMoves) {
        if (listOfRandomColorMoves[i] !== playerColorMoves[i]) {
            console.log("entered into strictMode");
            playerColorMoves = [];
            listOfRandomColorMoves = [];
            updateDisplay(0);
            startGame();
            onStrictMode = false;
        };
    };
};


function showAlert() {
    alert("oop! please try again");
};


function checkMatch() {

    if (onStrictMode == true) {
        strictMode(listOfRandomColorMoves, playerColorMoves);
    };

    playable = false;
    for (var i = 0; i < playerColorMoves.length; i++) {
        if (listOfRandomColorMoves[i] === playerColorMoves[i] && playerColorMoves.length === listOfRandomColorMoves.length
            && playerColorMoves.join('') === listOfRandomColorMoves.join('')) {
            let randomNumber = generateRandomNumber();
            updateDisplay(listOfRandomColorMoves.length);
            generateSequenceOfColors(randomNumber);
            playerColorMoves = [];
        }

        else if (onStrictMode === false && listOfRandomColorMoves[i] !== playerColorMoves[i]) {
            showAlert();
            console.log('not equal');
            playerColorMoves = [];
            generateSequenceOfColors([]);
            break;
        }

        else if (i === playerColorMoves.length - 1) {
            playable = true;
        }
    };
}


function strictStart() {
    onStrictMode = true;
}

function userInput(color) {
    if (playable) {
        playerColorMoves.push(color);
        checkMatch();
    }
};

function startGame() {
    listOfRandomColorMoves = [];
    playerColorMoves = [];
    let randomNumber = generateRandomNumber();
    generateSequenceOfColors(randomNumber);
};
