

var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
myFish.splice(myFish.length - 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]

console.log(myFish);


// The splice method changes the contents of an array by removing existing elements and/or adding new elements.
// for example if you want to add a element into an array using splice , 
// you would use the splice method and pass in three argument first  one representing the index of which you want to insert a new element , second one would be how many elements 
// should it remove after the first argument (index) before inserting a new element. 
//    and your third argument would be the element you want to insert . 
//  and without the third argument the splice function will only give you the ability to remove elements 



