function inAscOrder(array) {
    
    var originalArray = [];
    array.forEach(function (element) {
        originalArray.push(element);
    });

    var ascendingOrder = array.sort(function (a, b) {
        return a - b;
    });

    if (originalArray.join('') === ascendingOrder.join('')) {
        return true;

    } else {
        return false;
    }

};
console.log(inAscOrder([1, 2, 4, 7, 19]));
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));



