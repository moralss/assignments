var listOfRandomColorMoves = [];
var arrayId = ["red", "green", "blue", "yellow"];
var randomNumber = [];
var playerColorMoves = [];
var isComputerGenerated = false;

function generateRandomArrayNumbers() {
    var randomNumberArray = [];
    var randomNumber = Math.floor(Math.random() * 4);
    randomNumberArray.push(randomNumber);
    return randomNumberArray;
};


function createSequenceOfColors(array) {

    array.forEach((element) => listOfRandomColorMoves.push(arrayId[element]));

    if (array.length === 0) {
        console.log(listOfRandomColorMoves);
    };

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
            isComputerGenerated = true;
        }
    }, 1000)
};

function updateDisplay(level) {
    return document.getElementById('output').innerHTML = level + 1;
};

function gameModePlay() {
    for (var i = 0; i < playerColorMoves.length; i++) {
        console.log("player move" , playerColorMoves);
        if (isComputerGenerated && listOfRandomColorMoves[i] === playerColorMoves[i]) {
            if (playerColorMoves.length === listOfRandomColorMoves.length && playerColorMoves.join('') === listOfRandomColorMoves.join('')) {
                randomNumber = generateRandomArrayNumbers();
                updateDisplay(listOfRandomColorMoves.length);
                createSequenceOfColors(randomNumber);
                playerColorMoves = [];
            };

        } else if (listOfRandomColorMoves[i] !== playerColorMoves[i]) {
            console.log('not equal');
            playerColorMoves = [];
            createSequenceOfColors([]);
        }
    };
};

function strictMode() {
    
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
        randomNumber = generateRandomArrayNumbers();
        createSequenceOfColors(randomNumber);
    };
