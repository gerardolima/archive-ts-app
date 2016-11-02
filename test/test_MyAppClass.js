'use strict';

var expect    = require('chai').expect;
var theModule = require('../dist/MyAppClass');

describe('#theModule', function() {
    it('should exist', function() {
        expect(theModule).to.exist;
    });

    it('should include "MyAppClass"', function() {
        expect(theModule).to.include.keys('MyAppClass');
    });
});

describe('#theClass', function() {
    it('should exist', function() {
        expect(theModule.MyAppClass).to.exist;
    });

    it('should be function', function() {
        expect(theModule.MyAppClass).to.be.instanceof(Function);
    });

    it('should contain "double"', function() {
        expect(theModule.MyAppClass).to.include.keys('double');
    });    

    it('"double" should be function', function() {
        expect(theModule.MyAppClass.double).to.be.instanceof(Function);
    });

    it('"double" 1 shold be 2', function() {
        expect(theModule.MyAppClass.double(1)).to.be.equal(2);
    });

    var instance = new theModule.MyAppClass();
    it('name should be undefined', function() {
        expect(instance.name).to.be.undefined;
    });
       
});
