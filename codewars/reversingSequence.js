// const reverseSeq = n => {
//     var emptyArray = [];
//     var counter = 0;

//     for (var i = n; n >= i; i--) {
//         emptyArray.push(n);
//     }
//     return emptyArray;

// };

function reverseSeq(n) {
    var emptyArray = [];
    var counter = 0;

    var i = n;
    while (i <= n && i !== 0) {
        emptyArray.push(i);
        i = i - 1;
    }

    return emptyArray;

}
console.log(reverseSeq(5));