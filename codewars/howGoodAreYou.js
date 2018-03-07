function betterThanAverage(classPoints, yourPoints) {
  var totalScore = classPoints.reduce((a , b) => a + b);

  var average =  totalScore / classPoints.length -1;

  return  (average  < yourPoints) ;
}


console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88] , 75));


//   Test.assertEquals(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);