function GetSum(a, b) {
  var sum = 0;
  var lastIndex = b;
  var firstIndex = a;

  if ( lastIndex > firstIndex) {
    for (var i = firstIndex; i <= lastIndex; i++) {
       
      sum += i;
      
    }
    console.log(sum);
  }

  else if (firstIndex > lastIndex) {
  for (var i = lastIndex; i <= firstIndex; i++) {
      
      sum += i;
       
      }
      console.log(sum);
    }
  else if(firstIndex === lastIndex){
    return firstIndex;
  }  

  
}

console.log(GetSum(4, 4));

//  a=536 & b=-346 83885

