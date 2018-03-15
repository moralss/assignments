
function checkExam(array1, array2) {
    var count = 0;
    var correctAnswers = 0;
    for (var i in array1) {
        var fetchCorrect = array2.filter(function (element, index) {
            if (index == i) {
                //  console.log("index of array2" , element , "index of array 1" , array1[i])
                if (element === array1[i]) {
                    count += 4;
                    correctAnswers += 1;
                }
            }
        })
    }
    var emptyElement = 0;
    for (var i in array2) {
        if (array2[i].length === 0) {
            emptyElement += 1;
        }
    }
    if (correctAnswers === 0) {
        return 0
    } else {

        var score = count + ((correctAnswers + emptyElement) - array2.length);
        return score;
    }


}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));



// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0