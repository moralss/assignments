var a = [1, 2, 3];
var b = [5, 3, 2];
var c = [7, 3, 2];

function common(a, b, c) {

    var listOfArrays = [a, b, c];


    var commons = listOfArrays.slice(1).reduce(function (result, currentArray) {
        return currentArray.filter(function (currentItem) {
            return result.indexOf(currentItem) !== -1;
        });
    }, listOfArrays[0]);



    var sumOfAll = commons.reduce(function (a, b) {
        return a + b;
    })

    return sumOfAll;
}

console.log(common(a, b, c));

// Test.assertEquals(common([1,2,3],[5,3,2],[7,3,2]),5);