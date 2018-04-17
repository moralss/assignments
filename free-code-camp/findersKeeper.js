function findElement(array, functionCondition) {
  
  return array.filter(functionCondition)[0];
     
}

console.log(findElement([1, 2, 3, 4] , function(number){ return number % 2 === 0; }));



