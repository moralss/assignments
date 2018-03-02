// Input: 1254859723 Output: 9875543221
var emptyArray = [];
var newArray = [];

function DescendingOrder(number) {
    emptyArray.push(number);
    var splitArray = emptyArray.toString().split('');

    splitArray.forEach(function (val) {

        newArray.push(parseInt(val));
    })

    newArray.sort(function (a, b) {
        return b - a
    })

    return parseInt(newArray.join(''));

}

console.log(DescendingOrder(1254859723));
