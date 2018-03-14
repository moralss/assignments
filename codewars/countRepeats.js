function countRepeats(str) {
    var splitString = str.split('');
    var count = 0;

    for (var index = 0; index < splitString.length; index++) {
        if (splitString[index] === splitString[index + 1]) {
            console.log("index", splitString[index], index)
            count++;
        }
    }
    return count;
}



console.log(countRepeats('AAABCCDB'));






// describe("removeRepeats", function(){
//     it ("Should count repeats", function(){
//         Test.assertEquals(countRepeats('AABCCD'),2);
//         Test.assertEquals(countRepeats('AABCCDA'),2)
//         Test.assertEquals(countRepeats('AaBBCCC'),3);
//     });
// });