function gooseFilter (birds) {

  var geese = ["African", "Roman", "Toulouse", "Pilgrim"];

  return birds.filter( bird => geese.indexOf(bird) === -1 );
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);



