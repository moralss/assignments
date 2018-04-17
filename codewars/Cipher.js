

function encode(str) {
    var encodedArray = [];
    var finalArray = [];
    

    for (var i in str.split('')) {
        encodedArray.push(str.charCodeAt(i));
    }

    var newEncodeArray = encodedArray.map(a => a * 6);

    for (var i in newEncodeArray) {
        finalArray.push(String.fromCharCode(newEncodeArray[i]));
    }

    return finalArray.join('');


}

function decode(str) {

    var encodedArray = [];
    var finalArray = [];
    

for (var i in str.split('')) {
        encodedArray.push(str.charCodeAt(i));
    }

    var newEncodeArray = encodedArray.map(a => a / 6);

    for (var i in newEncodeArray) {
        finalArray.push(String.fromCharCode(newEncodeArray[i]));
    }

    return finalArray.join('');
    
}


console.log(decode("ưɞʈʈʚÀȊʚʬʈɘÆ"));
