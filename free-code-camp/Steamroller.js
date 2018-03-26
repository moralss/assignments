function steamrollArray(arr) {
  var flattenedArray = [];

  var flatter = function (arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    
  }
    else {
      for (var i in arg) {
        flatter(arg[i]);
      }
    }

  }

  arr.forEach(flatter)
  return flattenedArray;


  return flattenedArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
