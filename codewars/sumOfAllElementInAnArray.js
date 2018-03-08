function arrayPlusArray(arr1, arr2) {
 var combinedString = Array.from(arguments);

 combinedString = combinedString.reduce(function(a , b){
    return a.concat(b);
}) 

return combinedString.reduce((a ,b ) =>a +b );

 //something went wrong
}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));


//  Test.assertEquals(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);