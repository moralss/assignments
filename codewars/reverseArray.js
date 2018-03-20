function reverseWords(str) {
    var reversedArray = [];
    var splitArray = str.split(' ');

    for (var i in splitArray) {
        reversedArray.push((splitArray[i].split('').reverse().join('')));
    }

    return reversedArray.join(' ');


}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));


//Test.expect(reverseWords('The quick brown fox jumps over the lazy dog.') === 'ehT kciuq nworb xof spmuj revo eht yzal .god');
//Test.expect(reverseWords('apple') === 'elppa');
    