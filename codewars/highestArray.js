var newArray = [11, 2, 2, 3, 2, 11];


function findHighestArray(array) {
    var counter = 0;
    var temp = [];

    array.sort(function (a, b) { return a - b });
    for (var i = 0; i < array.length; i++) {

        
        if (array[counter] === array[i]) {
    
             temp.push(array[i]);
 
        }




    }
    return temp;
};

console.log(findHighestArray(newArray));