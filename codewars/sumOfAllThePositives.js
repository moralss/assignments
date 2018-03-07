
function positiveSum(arr) {
    var empty = [];
    var sum = 0;
    if (arr.length === 0) {
        return 0;
    }

    else {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
                empty.push(arr[i]);
                sum = empty.reduce(function (a, b) {
                    return a + b;
                })
            }

        }


        return sum;

    }

}


  console.log(positiveSum([1, 2, 3, 4, 5]));  // 15

console.log(positiveSum([-1, -2, -3, -4, -5])); // 0

console.log(positiveSum([-1, 2, 3, 4, -5])); // 9

console.log(positiveSum([])); // 0


// function positiveSum(arr) {
//   var total = 0;    
//   for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//     if (arr[i] > 0) {                   // if arr[i] is greater than zero
//       total += arr[i];                  // add arr[i] to total
//     }
//   }
//   return total;                         // return total
// }
