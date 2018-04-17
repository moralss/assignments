function countRepeats(str) {
    var splitString = str.split('');
    var count = 0;

    for (var index = 0; index < splitString.length; index++) {
        if (splitString[index] === splitString[index + 1]) {
            console.log("index", splitString[index], index)
            count++;
        }
    }
    return count;
}



console.log(countRepeats('AAABCCDB'));




