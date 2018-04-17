Will the functions below return the same results? Clearly state the reason(s) for your answer?
function bragFirst()
{
  return {
      brag: "Ska ba forgiva!"
  };
}

function bragAgain()
{
  return
  {
      brag: "Ska ba forgiva!"
  };
}

No, the two functions will not return the same results because:

The first function will return an object containing a property of brag, that's because the return statement is in the same line as the  opening curly brace for the object.

The second function will return undefined because the return statement is returning nothing and the object is after the return statement, therefor not being included in the execution of the function.