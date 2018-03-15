


function checkThreeAndTwo(array) {
    var countAs = 0;
    var countBs = 0;
    var countCs = 0;
    var letterTotals = [];


    for (var i in array) {
        if (array[i] === "a") {
            countAs++;
        }
        else if (array[i] === "b") {
            countBs++;
        }
        else if (array[i] === "c") {
            countCs++;
        }

    }

    letterTotals = [countAs, countBs, countCs];

    var filter = letterTotals.filter(element => element > 1).map(a => Number(a)).sort((a, b) => a - b);

    if (filter.toString() === '2,3') {
        return true;
    }

    else {
        return false;
    }


}


console.log(checkThreeAndTwo(["b", "b", "c", "a", "a"]));



//  Test.assertEquals( checkThreeAndTwo(["a", "a", "a", "a", "a"]), false );
// ['a', 'a', 'a', 'b', 'b'] => true  // 3 x 'a' and 2 x 'b'
// ['a', 'b', 'c', 'b', 'c'] => false // 1 x 'a', 2 x 'b' and 2 x 'c'
// ['a', 'a', 'a', 'a', 'a'] => false // 5 x 'a'