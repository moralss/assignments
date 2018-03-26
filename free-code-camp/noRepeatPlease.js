function perAlone(str) {
    var splitString = str.split('');
    var swappedArray = [];
    counter = 0;
    generatePermutation(splitString.length, splitString);
    return counter;
}
function generatePermutation(arrayLength, array) {
    if (arrayLength === 1 && !/([a-z])\1+/g.test(array.join(''))) {

        counter++;
    } else {
        for (var i = 0; i < arrayLength; i++) {
            generatePermutation(arrayLength - 1, array);
            swap(arrayLength % 2 === 0 ? 0 : i, arrayLength - 1, array);
        }
    }
}

function swap(a, b, array) {
    var tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}



console.log(perAlone('aab'));
