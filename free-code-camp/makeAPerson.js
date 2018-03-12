
var Person = function (firstAndLast) {
    var initialsArray = firstAndLast.split(" ");

    this.getFirstName = function () {
        return initialsArray[0];
    }

    this.getLastName = function(){
        return initialsArray[1];
    }

    this.setFirstName = function (name) {
        initialsArray[0] = name;
    }

    this.setLastName = function (name) {
        initialsArray[1] = name;
    }

    this.setFullName = function(firstAndLast){
        var arrayInitials = firstAndLast.split(" ");
        this.setFirstName(arrayInitials[0]);
        this.setLastName(arrayInitials[1]);
    }

    this.getFullName = function(){
        return initialsArray[0] + " " + initialsArray[1];
    }

};

var bob = new Person('Bob Ross');

bob.setFirstName("Moral");
bob.setLastName("Jera");
bob.setFullName("Thabo Noboli");

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());




// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)