
var emptyArray = [];
var result = "";
var string = "my rEal naMe is moRal";

function capitalizeFirstLetters(stringToBecapitalized) {
    
    var turnStringIntoArray = stringToBecapitalized.toLowerCase().split(' ');

    for (var i = 0; i < turnStringIntoArray.length; i++) {


        var firstIndexCapitalize = turnStringIntoArray[i][0].toUpperCase();

        replaceFirstIndexOfEveryWord = turnStringIntoArray[i].replace(turnStringIntoArray[i][0], firstIndexCapitalize);
        emptyArray.push(replaceFirstIndexOfEveryWord);

        

    }
    console.log(emptyArray.join(' '));
}

console.log(capitalizeFirstLetters(string));