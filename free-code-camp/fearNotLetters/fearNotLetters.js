function fearNotLetter(string) {

  for(var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);

    if (code !== string.charCodeAt(0) + i) {

      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}

console.log(fearNotLetter("abcek"));
