

function falsyOrTruthy(arr) {
    var newArr = [];

    var display = arr.filter(function(element , index , array){
       if(element){
        newArr.push(element);
       }

    })

    return newArr;

}



console.log(falsyOrTruthy([false,NaN,NaN,4,5,{}]));


// Test.assertSimilar(falsyOrTruthy([false,NaN,NaN,4,5,{}]), [4,5,{}], "should return an array with falsy/truthy values or an empty one");
