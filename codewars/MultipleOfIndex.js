

function multipleOfIndex(array) {
    var display = array.filter(function (element, index) {
        return element % index == 0;
    })

    return display;
}



console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));


//  Test.assertSimilar(multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]);