

function translatePigLatin(str) {
    var shiftedArray = [];
    var results = "";

    var splitedSting = str.split('');
    vows = (/[aeiou]/g);

    if (vows.test(splitedSting[0])) {
       results = str + "way";
    }

    while (!vows.test(splitedSting[0])) {
        shiftedArray.push(splitedSting.shift());
         results = splitedSting.join('') + shiftedArray.join('') + "ay";

    }

    return results;
}

console.log(translatePigLatin("glove"));

console.log(translatePigLatin("algorithm"));
