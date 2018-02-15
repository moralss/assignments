function mutation(arr) {
    var stringValue = arr[1].toUpperCase();
    var stringCompare = arr[0].toUpperCase();
    for (i = 0; i < stringValue.length; i++) {
        if (stringCompare.indexOf(stringValue[i]) === -1)
            return false;
    }
    return true;
}

console.log(mutation(["Hello", "heLo"]));