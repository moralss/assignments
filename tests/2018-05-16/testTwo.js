//  the two function will return the same result due to the return statement 
// both being the same . 


function multiply(first) {
    function secondMultiply(second) {
        return first * second;
    }
    return secondMultiply;
};

 console.log(multiply(3, 3));
console.log(multiply(3)(3)); 