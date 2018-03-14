function myReplace(str, before, after) {
    var newString = "";

    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        newString = str.replace(before, after.charAt(0).toUpperCase() + after.slice(1));

    }

    else {
        newString = str.replace(before , after);
    }
    return newString;

}


 console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

//myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
