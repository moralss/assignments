function smallestCommons(arr) {
  var maxRange = Math.max(arr[0], arr[1]);
  var minRange = Math.min(arr[0], arr[1]);

  var lcm = 0;
  var flag = true;
  

  while (flag) {
    lcm++;
    for (var i = minRange; i <= maxRange ; i++) {
      if (lcm % i !== 0) {
        break;
      }

      if (i === maxRange) {
        flag = false;
      }
    }
  }
  return lcm;

}

console.log(smallestCommons([1, 5])); 