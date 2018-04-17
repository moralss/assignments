
function reverseSeq(n) {
    var emptyArray = [];
    

    var i = n;
    while (i <= n && i !== 0) {
        emptyArray.push(i);
        i = i - 1;
    }

    return emptyArray;

}
console.log(reverseSeq(5));