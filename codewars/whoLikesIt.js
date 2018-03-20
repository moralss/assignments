function likes(names) {
    var result = "";

    if (names.length === 0){
        result = "no one likes this";
    }
    if (names.length === 1) {
        result = `${names} likes this`;
    }

    if (names.length === 2) {
        result = `${names[0]} and ${names[1]} like this`;
    }

    if (names.length === 3) {
        result = `${names[0]} , ${names[1]} and ${names[2]} like this`;
    }


    if (names.length >= 4) {
        var others = names.length - 2;
        result = `${names[0]}, ${names[1]} and ${others} others like this`;
    }

    return result;

}

console.log(likes(["Peter"]));

console.log(likes(["Jacob", "Alex"]));

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));


// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"