var level = 0;

var padArrayClicked = [];

function redPadClick() {
    let colorValue = "red";
    padArrayClicked.push(colorValue);
};

function greenPadClick() {
    let colorValue = "green";
    padArrayClicked.push(colorValue);
};

function bluePadClick() {
    let colorValue = "blue";
    padArrayClicked.push(colorValue);
};

function yellowPadClick() {
    let colorValue = "yellow";
    padArrayClicked.push(colorValue);
};

function generateRandom(number) {
    var randomNumberArray = [];
    var RandomNumber = Math.floor(Math.random() * 4);
    while (randomNumberArray.length !== number) {
        randomNumberArray.push(RandomNumber);
    }
    return randomNumberArray;
};

function checkMatch() {
    console.log("ai played", arrayId[0], "pad clicked", padArrayClicked[0]);
    if (arrayId.join('') === padArrayClicked.join('')) {
        console.log("equal");
    } else {
        console.log("not equal");
    }
};

var arrayId = ["red", "green", "blue", "yellow"];

function createsSequenceOfColors() {
    level = 2;
    let arrayRandomValues = generateRandom(level);
    console.log(arrayRandomValues);

        document.getElementById("red").style.background = "black";
        var start = setInterval(function () {
            document.getElementById("red").style.background = "red";
            clearInterval(start);
        }, 1000);

};

function startGame() {
    createsSequenceOfColors()
};




