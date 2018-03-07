// Expected: 987654321, instead got: 123456789
//  
function descendingOrder(n){

    var array = n.toString().split('').reverse().join('');
    return parseInt(array);


}

console.log(descendingOrder(123456789));