function uniteUnique(arr) {
    var array = Array.from(arguments);
    var newArray = [];
    array = array.reduce(function (a, b) {
        return a.concat(b)
    })

    
    var sortedArray = array.sort(function(a , b){
        return a - b;
    })

    

      for (var i = 0; i < sortedArray.length; i++){
          if(newArray.indexOf(sortedArray[i]) === -1){
              newArray.push(sortedArray[i]);
              

          }
        }
        console.log(newArray);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
