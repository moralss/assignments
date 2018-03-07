function solve(st, a, b) {
    var reverse = st.slice(a, b + 1).split('').reverse().join('');
    replaceString = st.replace(st.slice(a, b + 1), reverse);
    return replaceString;

};



// Test.assertEquals(solve("codewars",1,5),"cawedors");
// Test.assertEquals(solve("codingIsFun",2,100),"conuFsIgnid");