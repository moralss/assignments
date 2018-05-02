var listOfRandomColorMoves = [];
var arrayId = ["red", "green", "blue", "yellow"];


var playerColorMoves = [];
var isComputerGenerated = false;

function generateRandomArrayNumbers() {
    var randomNumberArray = [];
    var randomNumber = Math.floor(Math.random() * 4);
    randomNumberArray.push(randomNumber);
    return randomNumberArray;
};


function createSequenceOfColors() {
    let randomNumber = generateRandomArrayNumbers();

    randomNumber.forEach((element) => listOfRandomColorMoves.push(arrayId[element]));
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
            isComputerGenerated = true;
        }
    }, 1000)
};


var counter = 0;
var arrayStore = [];

function gameModePlay() {

    for (var i = 0; i < listOfRandomColorMoves.length; i++) {
        if (listOfRandomColorMoves[i] === playerColorMoves[i]) {
            console.log("computer move", listOfRandomColorMoves, "player move", playerColorMoves);
            console.log(listOfRandomColorMoves);
            console.log(playerColorMoves);
            console.log(listOfRandomColorMoves.join(' '));
            // counter += 1;

            if (playerColorMoves.length === listOfRandomColorMoves.length && playerColorMoves.join('') === listOfRandomColorMoves.join('')) {
                createSequenceOfColors();
                playerColorMoves = [];
            };

        } else if (listOfRandomColorMoves[i] !== playerColorMoves[i]) {

            console.log("computer move", listOfRandomColorMoves[i], "player move", playerColorMoves[i]);
            console.log("not equal");
         
         

        }
    };

};




function userInputRed() {
    playerColorMoves.push("red");
    gameModePlay();
};

function userInputGreen() {
    playerColorMoves.push("green");
    gameModePlay();
};

function userInputBlue() {
    playerColorMoves.push("blue");
    gameModePlay();
};

function userInputYellow() {
    gameModePlay();
    playerColorMoves.push("yellow");
};

function startGame() {
    listOfRandomColorMoves = [];
    playerColorMoves = [];
    createSequenceOfColors()
};
