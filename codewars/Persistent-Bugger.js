function PersistentBugger(value) {
    var newArray = [];
    var count = 1;
    var numberOfTimes = 1;
    
    if (value.toString().length == 1 && numberOfTimes == 1) {
        numberOfTimes = 0;

    } else {
        var splitString = value.toString().split('');
        splitString.forEach(function (val) {
            return newArray.push(parseInt(val));
        })
        for (i = 0; i < newArray.length; i++) {
            count *= newArray[i];
            numberOfTimes += 1;
        }

        if (value.toString().length >= 2) {
            count = PersistentBugger(count);
        }
    }

    return numberOfTimes;

}



console.log(PersistentBugger(39));
console.log(PersistentBugger(999));
console.log(PersistentBugger(4));

