
function nameInStr(str, name) {
    
    var splitString = str.split('');
    var splitName = name.split('');
    var count = 0;
    var temp = [];
    var noDuplicates = [];
    
    for (var i in splitString) {
        for (var j in splitName) {
            if (splitString[i] === splitName[j]) {

                if (temp.indexOf(splitString[i]) === -1) {
                    temp.push(splitString[i]);
                }
            }
        }
    }

    for (var i in temp){
        count ++;
    }

    if(count === splitName.length){
        return true;
    }
    else{
        return false;
    }
}


console.log(nameInStr('Across the rivers', 'chris'));
console.log(nameInStr('Next to a lake', 'chris'));
console.log(nameInStr('A crew that boards the ship', 'chris'));


// Test.assertEquals(nameInStr('A crew that boards the ship', 'chris'), false)
// Test.assertEquals(nameInStr('Across the rivers', 'chris'), true)
// Test.assertEquals(nameInStr('Next to a lake', 'chris'), false)