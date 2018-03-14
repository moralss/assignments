function diffArray(arr1, arr2) {
  var arrayElementsTheSame = [];
  var finalArray = [];

  var checkAndCompare = function (firstArray, secondArray) {

    for (var i in firstArray) {
      newArray = secondArray.every(function (element) {
        return element !== firstArray[i];
      });

      if (newArray) {
        arrayElementsTheSame.push(firstArray[i]);
      }

    }

    return arrayElementsTheSame;
  }



  checkAndCompare(arr2, arr1) 
   checkAndCompare(arr1, arr2);
  
  return arrayElementsTheSame;
}




console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));




// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].