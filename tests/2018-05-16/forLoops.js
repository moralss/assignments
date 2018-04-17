
function returnEvenOrOdd() {
    var lastValue = 21;
    for (var i = 0; i < lastValue; i++) {
       console.log(i % 2 == 0 ? `${i} is even`:`${i} is odd`);        
    };
};
    

function returnNineMultiply() {

    for (var i = 0; i <= 10; i++) {
        console.log(`"${i} * 9 = ${i * 9}"`);
    };
};

returnNineMultiply()

function gradeAssigner(classMarks) {
    if (classMarks > 90) {
        return "A";
    };
    if (classMarks > 80) {
        return "B";
    };
};

const lastValue = 101;

for (var i = 60; i < lastValue; i++) {
    console.log(gradeAssigner(i));
};



