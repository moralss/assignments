function calculateAge(start, end) {
    var calculate = end - start;
    if (calculate > 1) {
        return `You are ${calculate} years old.`
    }

    if (calculate < 1 && calculate != 0) {
        return `You will be born in ${calculate.toString().replace("-", "")} years.`;
    }
    // enter your code here.
    if (calculate == 0) {
        return `You were born this very year!`
    }
    if (calculate == 1) {
        return `You are ${calculate} year old.`
    }

    if (calculate == -1) {
        return `You will be born in ${calculate.toString().replace("-", "")} year.`
    }




}

console.log(calculateAge(1999, 2005))
console.log(calculateAge(2000, 1990))
console.log(calculateAge(3400, 3400))
console.log(calculateAge(3400, 300))


// Test.assertEquals(calculateAge(2000, 1990),"You will be born in 10 years.");
// Test.assertEquals(calculateAge(3400, 3400),"You were born this very year!");
// Test.assertEquals(calculateAge(2011, 2012),"You are 1 year old.");