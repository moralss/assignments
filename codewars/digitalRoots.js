function digitalRoot(number) {
    var splitNumber = number.toString().split('');
    var convertToNumber = splitNumber.map(a => Number(a));
    var reduceValue = convertToNumber.reduce((a, b) => a + b);

    while (reduceValue > 10) {
        var splitNumber = reduceValue.toString().split('');
        var convertToNumber = splitNumber.map(a => Number(a));
        var reduceValue = convertToNumber.reduce((a, b) => a + b);
    }

    return reduceValue;
};


console.log(digitalRoot(942));