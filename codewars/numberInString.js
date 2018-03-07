var string = '34334eccc4tg6';
function solve(s){
 var convert = [];
    var thenum = s.match( /\d+/g);
  
   for (var i = 0; i < thenum.length ; i++){
       var value = parseInt(thenum[i]); 
   convert.push(value);
}
convert.sort((a , b) => a - b);

return convert[convert.length -1];

};


console.log(solve(string));


