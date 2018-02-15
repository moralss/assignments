function getIndexToIns(array, number) {
    // Find my place in this sorted array.
    var positionOfTheNumber = 0;
    array.push(number);
    array = array.sort(function(a, b) {
        return a - b;
    })

    positionOfTheNumber = array.indexOf(number);

    return positionOfTheNumber;
}

console.log(getIndexToIns([40, 60], 50));