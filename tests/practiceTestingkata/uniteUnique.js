
function combineArray(arr) {
    var combinedArray = Array.from(arguments).join('');
    var findDigits = combinedArray.match(/[0-9]/g).map(x => Number(x));
    return findDigits;
};

function removeDuplicates(arr) {
    var noDuplicates = [];
    for (var i in arr) {
        if (noDuplicates.indexOf(arr[i]) === -1) {
            noDuplicates.push(arr[i]);
        }
    }
    return noDuplicates.sort((a, b) => a - b);
}

function uniteUnique(arr) {
    var combinedArray = combineArray(arr);
    return removeDuplicates(arr);

};

module.exports = { combineArray , removeDuplicates};