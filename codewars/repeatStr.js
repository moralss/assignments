// Sum Numbers
function sum(numbers) {
    "use strict";

    
    if (numbers.length === 0) {
        return 0;
    }

    if(numbers.length !== 0){
        var sum = numbers.reduce(function (a, b) {
        return a + b;

    });

    }
    

    return sum;


};


console.log(sum([1, 5.2, 4, 0, -1]));
// Test.assertEquals(sum([]), 0);
// Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);