

function add(stringNumber) {
    var filteredString = stringNumber.match(/-\d|\d/g);
    var calculatedResults = 0;

    if (stringNumber === "") {
        calculatedResults = 0;

    } else {
        for (let i = 0; i < filteredString.length; i++) {
            if(filteredString[i] < 0) {
                throw "Negative numbers not allowed";
            }
            
            if (filteredString[i] > 0) {
                calculatedResults = filteredString.reduce(function (a, c) {
                    return parseInt(a) + parseInt(c);
                });
            }
        };
    }

    return calculatedResults;
}

console.log(add("1\n2,3"));
console.log(add(""));
console.log(add("1\n2,-3"));




































