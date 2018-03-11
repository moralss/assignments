function minSum(array) {
count = 0;
var sumOfArray = [];
var results = 0;
    while (array.length > count) {

        
  chunk = array.splice(0,2).reduce((a , b) => a  * b);;
  sumOfArray.push(chunk);
}

return sumOfArray.reduce((a , b) => a + b);

}


console.log(minSum([5,4,2,3]));

//  Test.assertEquals(minSum([5,4,2,3]), 22);