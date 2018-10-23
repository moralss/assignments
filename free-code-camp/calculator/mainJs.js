
var sumStore = [];

var calculatorSigns = ["+", "-", "*", "/"];
var displayOnScreen = document.getElementById("output");

function display(value) {
    sumStore.push(value);
    validateSum(sumStore);

    displayOnScreen.innerHTML += value;


};

function deletePreviewsValue() {
    var currentDisplayValues = displayOnScreen.innerHTML;
    currentDisplayValues = currentDisplayValues.split("");
    currentDisplayValues.splice(currentDisplayValues.length - 1, 1);
    document.getElementById("output").innerHTML = currentDisplayValues.join("");
    sumStore = currentDisplayValues;


}

function validateSum(mainSumArray) {
    const lastCharacter = mainSumArray[mainSumArray.length - 1];
    const secondLastCharacter = mainSumArray[mainSumArray.length - 2];
    if (calculatorSigns.includes(secondLastCharacter) && calculatorSigns.includes(lastCharacter)) {
        mainSumArray.splice([mainSumArray.length - 1]);
    }
}



function clearCalculatorMemory(value) {
    sumStore = [value];
}


function generateAnswer() {
    document.getElementById("output").innerHTML = eval(sumStore.join(''));
    clearCalculatorMemory(eval(sumStore.join('')));
}


function deleteAll() {
    sumStore = [];
    document.getElementById("output").innerHTML = "";
}



