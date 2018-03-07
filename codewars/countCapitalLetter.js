var capitals = function (word) {
    // var indexOfCaptialLetters = [];
    // // Write your code here
    //  var capitalLetters = word.match(/[A-Z ]+/g);
    //  console.log(capitalLetters);
    //  for(var i = 0 ; i < word.split('').length;i++){
    //      for (var c =0 ; c < capitalLetters.length;c++){
    //         if(word[i] === capitalLetters[c])
    //          indexOfCaptialLetters.push(word.indexOf(capitalLetters[c]));
    //      }
         
    //     }
        
    //     return indexOfCaptialLetters;


    var splitted = word.split('');
    var res = [];
    for (var i in splitted){
        if(splitted[i] === splitted[i].toUpperCase()){
            res.push(splitted.indexOf(splitted[i]));
        }
    }
    return res;
};

console.log(capitals("HellO"));

