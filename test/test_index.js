'use strict';

var expect    = require('chai').expect;
var theApp    = require('../dist/index');

describe('#myApp', function() {
    it('should exist', function() {
        expect(theApp).to.exist;
    });

    it('name should be "this-is-an-app-instance"', function() {
        expect(theApp.name).to.equal("this-is-an-app-instance");
    });
});
