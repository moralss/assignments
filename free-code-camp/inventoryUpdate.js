function updateInventory(arr1, arr2) {
    for (var i in arr2) {
        var existing = arr1.every(function (element) {
            return arr2[i][1] !== element[1]
        });
        if (existing) {
            arr1.push(arr2[i]);
        }
            arr1.forEach(function (element) {
                if (element.indexOf(arr2[i][1]) !== -1) {
                    element[0] = element[0] + arr2[i][0]
                }
            });
    }
    return arr1.sort((a , b ) => (a[1] < b[1]) ? -1 : 1);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));