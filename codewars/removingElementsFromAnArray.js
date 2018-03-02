var numbersToBeCut = [1,2,2,2,3];
function cutNumbersFromArray(array , cut){
    var index = cut[0];
    for (i=0;i < array.length;i++){
      if (array[i] === index){
        var results = array.splice(i , index);
        console.log(results);
      }
   
    }
    

}

console.log(cutNumbersFromArray( numbersToBeCut , [2]));


