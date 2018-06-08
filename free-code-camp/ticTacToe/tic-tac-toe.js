const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

function setButtonListeners() {
    var arrayBlocks = document.querySelectorAll('.block');
    for (var i = 0; i < arrayBlocks.length; i++) {
        arrayBlocks[i].addEventListener('click', getPlayerMove);
    };
};

setButtonListeners();
stylingElements(['ticTacToe'], "hidden");

var playerMoves = [];
var computerArrayMoves = [];
var player;
var computerSimple;
var playing = false;

function chooseX() {
    player = "X";
    computerSimple = "O";
};

function chooseO() {
    player = "O";
    computerSimple = "X";
};

function stylingElements(arr, action) {
    arr.forEach(element => document.getElementById(element).style.visibility = action);
};

function startingGame() {
    playing = true;
    stylingElements(['ticTacToe'], "visible");
    stylingElements(['chooseX', 'chooseO', 'XorOHeader'], "hidden");
};

function getPlayerMove(e) {
    if (!playing) { alert("Game Over"); return; };
    var target = e.target.id;
    var playerChosenBlock = document.getElementById(target);
    var randomSquare = document.getElementById(getRandomInt(9));
    playerChosenBlock.removeEventListener('click', getPlayerMove);
    if (playerChosenBlock.innerHTML !== computerSimple) {
        playerMoves.push(Number(target));
    };

    determineWinner(playerMoves);
    checkingTie(playerMoves, playerChosenBlock);
    determineWinner(computerArrayMoves);
};


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

function checkingTie(playerMoves, playerChosenBlock) {
    if (playerMoves.length === 5) {
        generateComputerMove(player);
        computerArrayMoves.pop();
        gameOverDisplayMenu();
    } else {
        if (playerChosenBlock.innerHTML === "") {
            playerChosenBlock.innerHTML = player;
            generateComputerMove(computerSimple);
        };
    };
};

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

function determineWinner(arrayMoves) {

    for (var i = 0; i < winningCombination.length; i++) {
        if (arrayMoves.indexOf(winningCombination[i][0]) !== -1
            && arrayMoves.indexOf(winningCombination[i][1]) !== -1
            && arrayMoves.indexOf(winningCombination[i][2]) !== -1) {
            gameOverDisplayMenu();
            winningCombination[i].forEach(element => document.getElementById(element).style.backgroundColor = "red");
            break;
        };
    };
};

function gameOverDisplayMenu() {
    stylingElements(['showEnding'], "visible");
    playing = false
};

function startGameAllOver() {
    location.reload();
};
