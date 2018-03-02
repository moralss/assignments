
function sumAll(arr) {
    var empty = [];
    
    if (arr[0] < arr[1]) {
        for (let i = arr[0]; i < arr[1] + 1; i++) {
            empty.push(i);
        }
    }
    if (arr[0] > arr[1]) {
        for (let i = arr[1]; i < arr[0] + 1; i++) {
            empty.push(i);
          
        }


    }
    var sumOfAll = empty.reduce(function (a, b) {
        return a + b;
    })
    return sumOfAll;
}


console.log(sumAll([4, 1]));
