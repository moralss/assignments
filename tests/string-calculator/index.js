
const add = (str) => {    
    if(str.length == 1){
        return Number(str);
    }

    if(str.length > 2){
        let total = calculateSum(str);
        return total;
    }

    return 0;
}


const calculateSum = (str)=> {
   
   
    var values = str.split(',');
    console.log(values);    
    var total = 0;

        for(var value of values){
                total += Number(value);
        }

        return total
}




module.exports = {add};


