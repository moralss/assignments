function spinalCase(str) {
//   var whiteSpacing = str.match(/\s/g);

  var res = str.replace(/([a-z])([A-Z])/g,'$1-$2' );

  return res.toLowerCase().replace(/\W|_/g,'-');

}

console.log(spinalCase('This Is Spinal Tap'));

