let word = ['super', 'bow', 'bowl', 'tar', 'get', 'book', 'let'];
var temp = [];
var store = [];

function compoundMatch(words, target) {
    for (let i in words) {
        temp.push(target.match(words[i]));
    };

    for (let i in temp) {
        
    }
};


console.log(compoundMatch(word, "superbowl"))


// "superbowl")=> ['super','bowl',   [0,2]]


// fn( ['super','bow','bowl','tar','get','book','let'], "superbowl")=>      ['super','bowl',   [0,2]]
// fn( ['bow','crystal','organic','ally','rain','line'], "crystalline")=>   ['crystal','line', [1,5]]
// fn( ['bow','crystal','organic','ally','rain','line'], "rainbow")=>       ['bow','rain',     [4,0]]
// fn( ['bow','crystal','organic','ally','rain','line'], "organically")=>   ['organic','ally', [2,3]]
// fn( ['top','main','tree','ally','fin','line'], "mainline")=>             ['main','line',    [1,5]]
// fn( ['top','main','tree','ally','fin','line'], "treetop")=>              ['top','tree',     [2,0]]