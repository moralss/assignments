
var emptyArray = [];
var result = "";
var string = "my rEal naMe is moRal";

function capitalizeFirstLetters(stringToBecapitalized) {
    stringToBecapitalized = stringToBecapitalized.toLowerCase();
    var turnStringIntoArray = stringToBecapitalized.split(' ');

    for (var i = 0; i < turnStringIntoArray.length; i++) {

        var firstIndexOfEveryWord = turnStringIntoArray[i][0];

        var firstIndexCapitalize = firstIndexOfEveryWord.toUpperCase();

        replaceFirstIndexOfEveryWord = turnStringIntoArray[i].replace(firstIndexOfEveryWord, firstIndexCapitalize);
        emptyArray.push(replaceFirstIndexOfEveryWord);

        

    }
    console.log(emptyArray.join(' '));
}

console.log(capitalizeFirstLetters(string));