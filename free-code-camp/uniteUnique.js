

function uniteUnique(arr) {

var noDuplicates = [];

var combinedArray = Array.from(arguments).join('');
var findDigits = combinedArray.match(/[0-9]/g).map(x => Number(x));

for (var i in findDigits){
    if(noDuplicates.indexOf(findDigits[i]) === -1){
        noDuplicates.push(findDigits[i]);
    }
}


return noDuplicates.sort((a , b) => a - b);




}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
