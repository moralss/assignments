function mergeArrays(arr1, arr2) {
        var removedDuplicatesArray = [];

        var OneArray =  arr1.concat(arr2);
        for (var i = 0; i < OneArray.length;i++){
            if(removedDuplicatesArray.indexOf(OneArray[i]) === -1){
                removedDuplicatesArray.push(OneArray[i]);
            }
        }
        return removedDuplicatesArray.sort((a , b) => a - b);
}


console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));

// Test.assertSimilar(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12], "Basic tests");