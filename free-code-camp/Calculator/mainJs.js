
var answer;
var temp = [];
var store = "";
var calculatorSigns = ["+", "-", "*", "/"];

function display(value) {



    temp.push(value);
    var output = document.getElementById("output");
    output.innerHTML += value;
    validateSum(temp);

};

function deletePreviewsValue() {
    var currentOutput = document.getElementById("output").innerHTML;
    currentOutput = currentOutput.split("");
    currentOutput.splice(currentOutput.length - 1, 1);
    document.getElementById("output").innerHTML = currentOutput.join("");
    temp = currentOutput;


}

function validateSum(currentValues, newValue) {
    const lastCharacter = currentValues[currentValues.length - 1];
    const secondLastCharacter = currentValues[currentValues.length - 2];
    

    return calculatorSigns.indexOf(lastCharacter) !== -1 && calculatorSigns.indexOf(secondLastCharacter) !== -1;

    document.getElementById("output").innerHTML = arrayToValidate.join('');
}

function clearCalculatorMemory(value) {

    temp = [value];
    store = [];
}

function generateAnswer() {

    var displayContent = output.innerHTML;
    store += displayContent;
    if (calculatorSigns.indexOf(store[store.length - 1]) !== -1) {
        store.split().pop();
        store = store.slice(0, store.length - 1);

        document.getElementById("output").innerHTML = eval(store);

        clearCalculatorMemory(eval(store));
        answer = eval(store);
    }
    else {

        document.getElementById("output").innerHTML = eval(store);
        clearCalculatorMemory(eval(store));
    }

}

function deleteAll() {
    store = [];
    temp = [];
    document.getElementById("output").innerHTML = "";
}



