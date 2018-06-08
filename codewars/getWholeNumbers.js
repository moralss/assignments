const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {

    const squaredIntegers = arr;

    return squaredIntegers.filter(element => {
        if (element % 1 === 0) {
            return element;
        }
    }

    ).map(element => {return Math.pow(element , 2)});
};


const squaredIntegers = squareList(realNumberArray);

console.log(squaredIntegers);