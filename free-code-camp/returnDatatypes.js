var string = "*'&ABCDabcde12345";


function solve(s) {
    var countNumbers = 0;
    var countCaptialLetters = 0;
    var countSepcialCharacters = 0;
    var countSmallLetters = 0;
    var emptyArray = [];

    var convertIntoArray = string.split('');
    var captialLetters = s.match(/[A-Z]/g);
    var digits = s.match(/\d/g);
    var smallLetters = s.match(/[a-z]/g);
    var specialCharacters = s.match(/\W/g);

    for (var i = 0; i < captialLetters.length; i++) {
        var numbers = convertIntoArray.filter(count => count === captialLetters[i]);
        countSepcialCharacters += 1;


    }

    emptyArray.push(countCaptialLetters);

    // for (var i = 0; i < digits.length; i++) {
    //     var numbers = convertIntoArray.filter(count => count === digits[i]);
    //     countNumbers += 1;

    // }

    // emptyArray.push(countNumbers);

    // for (var i = 0; i < smallLetters.length; i++) {
    //     var numbers = convertIntoArray.filter(count => count === smallLetters[i]);
    //     countSmallLetters += 1;


    // }
    // emptyArray.push(countSmallLetters);


    // for (var i = 0; i < specialCharacters.length; i++) {
    //     var numbers = convertIntoArray.filter(count => count === specialCharacters[i]);
    //     countNumbers += 1;



    // }
    emptyArray.push(countSepcialCharacters);
    return emptyArray;

}
console.log(solve(string));

