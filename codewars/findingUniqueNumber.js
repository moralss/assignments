function findUnique(numbers) {
    var duplicates = [];
    
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if(numbers[i] === numbers[j]){
                duplicates.push(numbers[i]);
            }
        }
    }


    var findSingleNumber = numbers.filter(function(element){
        return duplicates.indexOf(element) === -1;
    })

    return Number(findSingleNumber);

}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8]))

// Test.assertEquals(findUnique([1, 8, 4, 4, 6, 1, 8]), 6);