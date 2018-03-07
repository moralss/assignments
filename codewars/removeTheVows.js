
function disemvowel(str) {


    var vows = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    var spittedString = str.split('');
    var filteredKeywords = spittedString.filter((word) => !vows.includes(word));
    console.log(filteredKeywords.join(''));


}


console.log(disemvowel("This website is for losers LOL!"));
//   "Ths wbst s fr lsrs LL!")