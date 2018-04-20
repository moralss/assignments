
function topScores(records, nTop) {
    // let topScores = [];
    // let sortedNameArray = records.sort();
    var nonDuplicateArray = []

    // let sortedRecords = sortedNameArray.sort((a, b) => b[1] - a[1]);
    // for (let record = 0; record < nTop; record++) {
    //     topScores.push(sortedRecords[record]);
    // };
    console.log(records);
    for (var i = 0; i < records.length; i++) {
        if (records[i++][0] === records[i][0]) {
            nonDuplicateArray.push(records[i])

        }

    };
    return nonDuplicateArray;
    // return topScores;
};


// var recordScores = [["Sauron", 1000], ["Frodo", 500], ["Frank", 500], ["Bilbo", 100]];

console.log(topScores([["Sauron", 1000], ["Sauron", 500]], 3));
console.log(topScores([["Sauron", 1000], ["kagiso", 300] , ["Sauron", 500]], 3));


// Test.assertDeepEquals(topScores([
//     ["Sauron", 1000],
//     ["Frodo", 500],
//     ["Frank", 500],
//     ["Bilbo", 100]
// ], 3),