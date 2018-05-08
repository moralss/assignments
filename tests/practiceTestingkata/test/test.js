var assert = require('assert');
var testUnite = require('../uniteUnique');
var expect = require('chai').expect;

describe("combine",function(){
    it("combine should return 1 2 2 3 3",function(){
        let combineArray = testUnite.combineArray([[1],[2,3],[3,2]]);
        expect(combineArray).to.be.eql([1,2,3,3,2]);
    })
})


describe("non duplicates" , function(){
    it("remove duplicates" , function(){
        let removeDuplicates = testUnite.removeDuplicates([1,2,3,3,2]);
        expect(removeDuplicates).to.be.eql([1,2,3]);
    })
})




