
var Person = function (firstAndLast) {

    var initialsArray = firstAndLast.split(' ');

    this.getFullName = function () {
        return initialsArray[0] + " " + initialsArray[1];
    };

    this.getLastName = function () {
        return initialsArray[1];
    };

    this.getFirstName = function () {
        return initialsArray[0];
    };

    this.setFirstName = function (firstName) {
         initialsArray[0] = firstName;
    };


    this.setLastName = function (LastName) {
        initialsArray[1] = LastName;
    };

    this.setFullName = function (firstAndLast) {
        var arraySplit = firstAndLast.split(' ');
        this.setFirstName(arraySplit[0]);
        this.setLastName(arraySplit[1]);
    };


};

var bob = new Person('Bob Ross');

bob.setFullName('Moral Smith');
console.log(bob.getFullName());
console.log(bob.getLastName());
console.log(bob.getFirstName());




// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)