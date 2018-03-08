function whatIsInAName(collection, source) {
  var show = collection.filter(function (item) {
    
    for (i in source) {
      if (source[i] === item[i]) {
        return true;
      }
      return false;
    }
  })

  return show;
}

// test here
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


