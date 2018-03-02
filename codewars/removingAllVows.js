var vows = ["a", "e", "i", "o", "u"];
var name = "moral";

function removeAllVows(string) {
    var count = 0;
    var view = string.split('');
    for (var i = 0; i < vows.length; i++) {
        for (var j = 0; j < view.length; j++) {
            if (vows[i] === view[j]) {
                view.splice(string.indexOf(view[j]), 1);
            }
        }
    }
    return view;
}
console.log(removeAllVows("sponge bob"));
console.log(removeAllVows("testing"));
console.log(removeAllVows("Yahoo"));
console.log(removeAllVows("name"));