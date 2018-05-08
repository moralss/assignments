// find Letters 
// var showReplacedString = myString2.replace(regexWhiteSpacing,'$1-$2');
var regexLetters = /[a-z]/g
var regexNumbers = /\d/g
var regexAllLetters = /[a-zA-Z]/g;
var regexWhiteSpacing = /\ /g
var specialCharacters = /\W_|/g


var myString = "45%  smith dfdf 34#34fdf";

var show2 = myString.match(specialCharacters); 


var myString2 = "F d77sd GGH36 der5y7ffv"





console.log(show2 );