
var answer;
var temp = [];
var store = "";
var calculatorSigns = ["+", "-", "*", "/"];
var output = document.getElementById("output"); 

function display(value) {
    temp.push(value);
    validateSum(temp);

    output.innerHTML += value;


};

function deletePreviewsValue() {
    var currentOutput = document.getElementById("output").innerHTML;
    currentOutput = currentOutput.split("");
    currentOutput.splice(currentOutput.length - 1, 1);
    document.getElementById("output").innerHTML = currentOutput.join("");
    temp = currentOutput;


}

function validateSum(currentValues) {
    const lastCharacter = currentValues[currentValues.length - 1];
    const secondLastCharacter = currentValues[currentValues.length - 2];
    
    if(calculatorSigns.indexOf(lastCharacter) !== -1 &&
    calculatorSigns.indexOf(secondLastCharacter) !== -1){
        
        output.innerHTML -= value

    }

    return currentValues;

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



