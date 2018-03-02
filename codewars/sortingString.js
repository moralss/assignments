function createPhoneNumber(numbers){
array = [];
for (var i=0; i < numbers.length ;i++){
   array.push(numbers[i]); 
   var firstNumbers = array.slice(0 , 3).join('');
   var secondNumbers = array.slice(3 , 7).join('');
   var thirdNumbers = array.slice(7 , 10).join('');

};
    result = "("+firstNumbers +")" +" "+ secondNumbers +"-"+ thirdNumbers;
  return result; 
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(numbers));
