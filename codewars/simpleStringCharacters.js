function solve(s) {
    var captialLetters = s.match(/[A-Z]/g).length;
    var smallLetters = s.match(/[a-z]/g).length;
    var numbers = s.match(/\d/g).length;
   
    var total = s.split('').length -  (smallLetters + captialLetters + numbers ) ; 

    var count = 0;

    return [smallLetters , captialLetters , numbers , total];
}


console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"));


// Test.assertDeepEquals(solve("Codewars@codewars123.com"),[1,18,3,2]);
// Test.assertDeepEquals(solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
// Test.assertDeepEquals(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]);