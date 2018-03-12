function fearNotLetter(string) {

  var missingLetter = [];
  var alphabets = "abcdefghijklmnopqrstuvwxyz";
  var alphabetsArray = alphabets.split('');
  var stringArray = string.split('');
  
  if(stringArray[0] !== alphabetsArray[0]){
    return undefined;
  }


  for (var i in stringArray) {
    if (stringArray[i] !== alphabetsArray[i]) {
      return alphabetsArray[i];
    }

  }

}

console.log(fearNotLetter("bcek"));
