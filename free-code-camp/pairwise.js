function pairwise(arr, arg) {
    var temp = [];
    var tempIndex = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg && temp.indexOf(arr[i] + arr[j]) === -1) {
                temp.push(arr[i] , arr[j]);
            }
        }
    }

    for (var i in arr) {
        for (var j in temp) {
            if (temp[j] === arr[i]) {
                tempIndex.push(i);
            }
        }

    }

    return tempIndex.map(a => Number(a)).reduce((a, b) => a + b);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7) === 11);
console.log(pairwise([1, 3, 2, 4], 4) === 1);
console.log(pairwise([0, 0, 0, 1, 1], 1) === 10);
console.log(pairwise([1, 1, 1],2));





