function pairElement(string) {

  var paired = [];

  
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  
  for (var i = 0; i < string.length; i++) {
    search(string[i]);
  }

  return paired;
}

console.log(pairElement("GCG"));
