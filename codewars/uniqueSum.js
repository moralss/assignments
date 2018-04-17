
function uniqueSum(list) {
    var emptyArray = [];
    var sum = 0;

    if (list.length === 0){
        sum =  null;
    }

    for (var index = 0; index < list.length; index++) {
        if (emptyArray.indexOf(list[index]) === -1) {
            emptyArray.push(list[index]);

            var sum = emptyArray.reduce(function (a, b) {
                return a + b;
            });
        }
    }
    return sum;
}

var values = [1, 4, 4, 2, 5, 3];

console.log(uniqueSum(values));
console.log(uniqueSum([]));