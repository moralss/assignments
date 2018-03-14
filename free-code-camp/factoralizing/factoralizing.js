
var arrNumbersToFactorlize = [];
var sumTotal = 1;

function factorialize(Number) {

    for (var i = 1; i <= Number; i++) {
        arrNumbersToFactorlize.push(i);
    }

    
    sumTotal = arrNumbersToFactorlize.reduce((a ,b) => a * b );

    return sumTotal;
}

console.log(factorialize(9));