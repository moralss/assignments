

function truthCheck(collection, pre) {

  var counter = 0;
  for (var i in collection) {
    
    if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
      counter++;
    }
  }
  
  return counter == collection.length;
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"},
 {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"},
  {"user": "Po", "sex": "female"}], "sex"));