function stringClean(s){
 return s.replace(/\d+/g , "");

}




console.log(stringClean("(E3at m2e2!!)"));


// Test.assertEquals(stringClean("(E3at m2e2!!)"), "(Eat me!!)")
//   Test.assertEquals(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"), "Dsa cdsc csa!!! I Am cool!")