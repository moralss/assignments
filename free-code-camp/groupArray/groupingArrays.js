// Break it up.
function chunkArrayInGroups(arr, size) {


    var result = [];
    var temp = [];


    for (var i = 0; i < arr.length; i++) {
        if (i % size !== size - 1)
            temp.push(arr[i]);
        else {
            temp.push(arr[i]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0)
        result.push(temp);

    return result;

}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "f", "e"] , 2));
