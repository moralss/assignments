// a, e, i, o, u 

var string = "atemioeu";
var listOfVows = ["a", "e", "i", "o", "u"];

function countVowelsOfString(string) {
    count = 0;
    var splitString = string.split('');
    for (var i = 0; i < splitString.length; i++) {
        for (var j = 0; j < listOfVows.length; j++) {
            if (splitString[i] === splitString[j]) {
                count += 1;
            }
        }
    }
    return count;
}




console.log(countVowelsOfString(string));