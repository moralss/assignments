var emptyArray = [];
var result = "";
var string = "my rEal naMe is moRal";

function capitalizeFirstLetters(stringToBecapitalized) {
    stringToBecapitalized = stringToBecapitalized.toLowerCase();
    var turnStringIntoArray = stringToBecapitalized.split(' ');

    for (var i = 0; i < turnStringIntoArray.length; i++) {

        var firstIndexOfEveryWord = turnStringIntoArray[i][0];

        var firstIndexOfEveryWord = firstIndexOfEveryWord.toUpperCase();

        replaceFirstIndexOfEveryWord = turnStringIntoArray[i].replace(firstIndexOfEveryWord, firstIndexOfEveryWord);
        emptyArray.push(replaceFirstIndexOfEveryWord);

        return emptyArray.join(' ');

    }
    return emptyArray.join(' ');
}

console.log(capitalizeFirstLetters(string));