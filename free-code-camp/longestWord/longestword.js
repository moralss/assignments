

        function findLongestWord(string) {

            var longestWord = "";

            var changeIntoAnArray = string.split(' ');


            var sortArray = changeIntoAnArray.sort(function (a, b) { return b.length - a.length; });
            
            longestWord = sortArray[0];

            return longestWord;

}
     
  
