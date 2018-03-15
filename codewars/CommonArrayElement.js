//  long way 
function correct(string) {
    var splitedString = string.split('');

    for (var i in splitedString) {
        if(splitedString[i] === "0"){
            splitedString[i] = "O";
        }
         else if(splitedString[i] === "1"){
            splitedString[i] = "I";
        }
        else if(splitedString[i] === "5"){
            splitedString[i] = "S";
        }

    }

    return splitedString.join("");
}

//  short Way
 correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')


