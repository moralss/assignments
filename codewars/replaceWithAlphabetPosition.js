var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

function replaceWithPosition(string) {
    let positionArray = [];
    let splitString = string.split('');
    for (var i in splitString) {
        positionArray.push(alphabets.indexOf(splitString[i].toLowerCase()));
    };
    return positionArray.filter(element => element !== -1).map((a) => a + 1);
};

let text = "The sunset sets at twelve o' clock.";
console.log(replaceWithPosition(text));
