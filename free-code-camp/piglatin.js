
function translatePigLatin(str) {
    var shiftedArray = [];
    var results = "";

    var splitedSting = str.split('');
    vows = (/[aeiou]/g);

    if (vows.test(splitedSting[0])) {
        //MM: here rather assign to results instead of returning 
         return str + "way";
    }

    while (!vows.test(splitedSting[0])) {
        shiftedArray.push(splitedSting.shift());
        //MM: no need to declare results again after you've initialised it at the top of the file
        var results = splitedSting.join('') + shiftedArray.join('') + "ay";

    }


    return results;
}




 console.log(translatePigLatin("glove"));

console.log(translatePigLatin("algorithm"));



// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("california") should return "aliforniacay".
