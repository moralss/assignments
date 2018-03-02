function getMiddleNumber(string) {
    for (var i = 0; i < string.split('').length; i++) {
        var divide = Math.round(i / 2);
        var view = string[divide];

    }
    if (string[divide] == undefined) {
        var message = "undefined";
    }

    console.log(message);
    console.log(view);
}

var string = "lmoral";


console.log(getMiddleNumber(string));