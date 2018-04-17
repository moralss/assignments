function rot13(str) {
    var temp = [];
    var myListOfAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
    var splitString = str.split('');

    for (var i = 0; i < splitString.length; i++) {
        if (myListOfAlphabets.indexOf(splitString[i]) === -1) {
            temp.push(splitString[i]);
        }
        else {
            for (var j = 0; j < myListOfAlphabets.length; j++) {
                if (splitString[i] === myListOfAlphabets[j]) {
                    temp.push(myListOfAlphabets[j + 13]);
                }
            }
        }
        
    }

    return temp.join("");

}


console.log(rot13("SERR PBQR PNZC"));

