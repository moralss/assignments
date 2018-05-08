var assert = require('assert');
var testing = require('../practiceTesting');
var expect = require('chai').expect;



describe('say hello ', function () {
    it('should return hello world', function () {
        var say = testing.sayHello();
        expect(say).to.be.eql("Hello world");
    });
});


describe('addition ', function () {
    it('4 + 4 should return 8', function () {
        let testResults = testing.addition(4, 4);
        expect(testResults).to.be.eql(8);
    });

    it('4 + 4 should return type number', function () {
        let testResult = testing.addition(4, 4);
        expect(typeof testResult).to.be.eql( 'number');
    })
})


describe('multiply' , function(){
    it('4 * 2 should return 8' , function(){
        let showMultiply = testing.multiplyValues(4 ,2);
        expect(showMultiply).to.be.eql(8);
    })
})