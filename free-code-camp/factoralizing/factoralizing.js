var arrNumbersToFactorlize = [];
var sumTotal = 1;

function factorialize(Number) {

    for (var i = 1; i <= Number; i++) {
        arrNumbersToFactorlize.push(i);
    }

    for (var i = 1; i <= arrNumbersToFactorlize.length; i++) {
        sumTotal = sumTotal * i;

    }
    return sumTotal;
}