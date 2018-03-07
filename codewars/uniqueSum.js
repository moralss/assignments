
function uniqueSum(lst) {
    var emptyString = [];
    var sum = 0;

    if (lst.length === 0){
        sum =  null;
    }

    for (var index = 0; index < lst.length; index++) {
        if (emptyString.indexOf(lst[index]) === -1) {
            emptyString.push(lst[index]);

            var sum = emptyString.reduce(function (a, b) {
                return a + b;
            });
        }
    }
    return sum;
}

var values = [1, 4, 4, 2, 5, 3];

console.log(uniqueSum(values));
console.log(uniqueSum([]));