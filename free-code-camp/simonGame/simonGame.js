var listOfRandomColorMoves = [];
var arrayId = ["red", "green", "blue", "yellow"];
var randomNumber = [];
var playerColorMoves = [];
var playable = true;

function generateRandomArrayNumbers() {
    var randomNumberArray = [];
    var randomNumber = Math.floor(Math.random() * 4);
    randomNumberArray.push(randomNumber);
    return randomNumberArray;
};

function createSequenceOfColors(array) {
    //playable = false;
    array.forEach((element) => listOfRandomColorMoves.push(arrayId[element]));
    console.log('list of Random Colors', listOfRandomColorMoves);
    var i = 0;
    var interval = setInterval(function () {
        var currentIndex = i;
        document.getElementById(listOfRandomColorMoves[currentIndex]).style.background = 'white';
        setTimeout(function () {
            document.getElementById(listOfRandomColorMoves[currentIndex]).style.background = listOfRandomColorMoves[currentIndex];

        }, 500);
        i++;
        if (i >= listOfRandomColorMoves.length) {
            clearInterval(interval);
            playable = true;
        }
    }, 1000)
};

function updateDisplay(level) {
    return document.getElementById('output').innerHTML = level + 1;
};

function checkMatch() {
    playable = false;
    for (var i = 0; i < playerColorMoves.length; i++) {
        console.log("player move", playerColorMoves);
        if (listOfRandomColorMoves[i] === playerColorMoves[i] && playerColorMoves.length === listOfRandomColorMoves.length) {
            randomNumber = generateRandomArrayNumbers();
            updateDisplay(listOfRandomColorMoves.length);
            createSequenceOfColors(randomNumber);
            playerColorMoves = [];
        } else if (listOfRandomColorMoves[i] !== playerColorMoves[i]) {
            console.log('not equal');
            playerColorMoves = [];
            createSequenceOfColors([]);
            break;
        }
        else if (i === playerColorMoves.length - 1){
            playable = true;
        }
    };
};

function strictMode() {

};


function userInput(color) {
    if (playable) {
        playerColorMoves.push(color);
        checkMatch();
    }
};


function startGame() {
    listOfRandomColorMoves = [];
    playerColorMoves = [];
    randomNumber = generateRandomArrayNumbers();
    createSequenceOfColors(randomNumber);
};
