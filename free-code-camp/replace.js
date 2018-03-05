function myReplace(str, before, after) {

    var ConvertSTringIntoArray = str.split(' ');
     var index =  ConvertSTringIntoArray.indexOf(before);
     
    var beforeFirstIndex = before.charAt(0);
    var beforeCapitalizedIndex = before.charAt(0).toUpperCase();




    if (beforeFirstIndex === beforeCapitalizedIndex) {

        ConvertSTringIntoArray[index] = after.charAt(0).toUpperCase() + after.slice(1);

        finalString = ConvertSTringIntoArray.join(' ');
        
    }

    else{

         ConvertSTringIntoArray[index] = after;

        var finalString = ConvertSTringIntoArray.join(' ');
    }

    return finalString;
};

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping","sitting"));

//myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
