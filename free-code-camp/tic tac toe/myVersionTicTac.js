

const winningCombonation = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

document.getElementById('ticTacToe').style.visibility = "hidden";

var allMoves = [];
var playerMoves = [];
var player = "X";
var computerSimple = "O";


function chooseX() {
    player = "x";
    computerSimple = "o";
};

function chooseO() {
    player = "O";
    computerSimple = "X";
};

function playGame() {
    document.getElementById('ticTacToe').style.visibility = "visible";
    document.getElementById('chooseX').style.visibility = "hidden";
    document.getElementById('chooseO').style.visibility = "hidden";
    document.getElementById('XorOHeader').style.visibility = "hidden";
    accessblock();
};

var collection = document.querySelectorAll('.block');
function accessblock() {
    for (var i = 0; i < collection.length; i++) {
        collection[i].addEventListener('click', getPlayerMove);
    };
};

var computerArrayMoves = [];
function getPlayerMove(e) {

    var target = e.target.id;

    var playerChosenBlock = document.getElementById(target);
    var randomSquare = document.getElementById(getRandomInt(9));


    if (playerChosenBlock.innerHTML !== computerSimple) {
        playerMoves.push(Number(target));
    };

    determineWinning(playerMoves);
    CheckTie(playerMoves, playerChosenBlock);
    determineWinning(computerArrayMoves);
    console.log("array computer moves", computerArrayMoves);

};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

function CheckTie(playerMoves, playerChosenBlock) {
    if (playerMoves.length === 5) {
        !generateComputerMove(player);
        computerArrayMoves.pop();
        GameOverDisplay();
    } else {
        if (playerChosenBlock.innerHTML === "") {
            playerChosenBlock.innerHTML = player;
            generateComputerMove(computerSimple);
        };
    };
}

function generateComputerMove(simple) {
    var isEmptyBlock = true;
    while (isEmptyBlock) {
        var random = getRandomInt(9)
        randomSquare = document.getElementById(random);
        if (randomSquare.innerHTML === "") {
            isEmptyBlock = false;
        };
    };
    computerArrayMoves.push(random);
    randomSquare.innerHTML = simple;
};

function determineWinning(arrayMoves) {
    for (var i = 0; i < winningCombonation.length; i++) {
        if (arrayMoves.indexOf(winningCombonation[i][0]) !== -1
            && arrayMoves.indexOf(winningCombonation[i][1]) !== -1
            && arrayMoves.indexOf(winningCombonation[i][2]) !== -1) {
            GameOverDisplay();
            winningCombonation[i].forEach(element => document.getElementById(element).style.backgroundColor = "red");
            break;
        };
    };
};

function GameOverDisplay() {
    var display = (`<div class="displayGameOver"> <h3>game finished</h3><button onclick=startGameAllOver()>replay</button> <button>quit</button> </div>`);
    document.getElementById("showEndding").innerHTML = display;
    for (var i = 0; i < collection.length; i++) {
        collection[i].removeEventListener('click', getPlayerMove);
    };
};

function startGameAllOver() {
    location.reload();
}
