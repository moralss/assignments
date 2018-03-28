var money = [
    { name: "ONE HUNDRED", currencyValue: 100.00 },
    { name: "TWENTY", currencyValue: 20.00 },
    { name: "TEN", currencyValue: 10.00 },
    { name: "FIVE", currencyValue: 5.00 },
    { name: "ONE", currencyValue: 1.00 },
    { name: "QUATER", currencyValue: 0.25 },
    { name: "DIME", currencyValue: 0.10 },
    { name: "NICKEL", currencyValue: 0.05 },
    { name: "PENNY", currencyValue: 0.01 },
]

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    till = cid.reduce(function (a, b) {
        return a + b[1];
    }, 0.0).toFixed(2);

    if (till < change) {
        return "Insufficient Funds";
    } else if (till == change) {
        return "Closed";
    }

    cid = cid.reverse();

    var result = money.reduce(function (acc, next, index) {
        if (change >= next.currencyValue) {
            var bill = 0.0;
            while (change >= next.currencyValue && cid[index][1] >= next.currencyValue) {
                bill += next.currencyValue;
                change -= next.currencyValue;
                change = Math.round(change * 100) / 100;
                cid[index][1] -= next.currencyValue;
            }
            acc.push([next.name], bill);
            return acc;
        }
        else {
            return acc;
        }

    }, []);

    return result.length > 0 && change === 0 ? result : "Insufficient Funds";
}

 var cid3 = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]];
//  [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
 
var cid = [['PENNY', 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["FIVE", 55.00],
['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]
];

console.log(checkCashRegister(3.26, 100.00,cid3));
console.log(checkCashRegister(19.50, 20.00, cid));

