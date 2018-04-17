function filter_list(list) {
    var regex = /[0-9]/g;
    // var show = list.join("").match(regex)
    var listOfNumbers = [];
    for (var i in list) {
        if(typeof list[i] === "number"){
            listOfNumbers.push(Number(list[i]));
        }
    };
    return listOfNumbers;
}




console.log(filter_list([1, 2, 'a', 'b']));





console.log((filter_list([1,2,'a','b']) === [1,2]))
// Test.assertSimilar(filter_list([1,'a','b',0,15]),[1,0,15])
// Test.assertSimilar(filter_list([1,2,'aasf','1','123',123]),[1,2,123])