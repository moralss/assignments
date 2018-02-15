function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var result = 0;
    arr.push(num);
    arr = arr.sort(function(a, b) {
        return a - b;
    })

    result = arr.indexOf(num);

    return result;
}

console.log(getIndexToIns([40, 60], 50));