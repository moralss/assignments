
function translatePigLatin(str) {
    var shiftedArray = [];
    var results = "";

    var splitedSting = str.split('');
    vows = (/[aeiou]/g);

    if (vows.test(splitedSting[0])) {
         return str + "way";
    }

    while (!vows.test(splitedSting[0])) {
        shiftedArray.push(splitedSting.shift());
        var results = splitedSting.join('') + shiftedArray.join('') + "ay";

    }


    return results;
}




 console.log(translatePigLatin("glove"));

console.log(translatePigLatin("algorithm"));



// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("california") should return "aliforniacay".