(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var myAppInstance = require('gerardolima-ts-app');
var msg = "application instance name: " + myAppInstance.get_name() + "\n"
        + "double(1): " + myAppInstance.constructor.double(1); 

document.getElementById('date-placeholder').innerText = (new Date()).toString();
document.getElementById('output-placeholder').innerText = msg; 

},{"gerardolima-ts-app":3}],2:[function(require,module,exports){
"use strict";
var MyAppClass = (function () {
    // constructor
    function MyAppClass(name) {
        this.name = name;
    }
    MyAppClass.prototype.get_name = function () { return this.name; };
    MyAppClass.double = function (x) { return 2 * x; };
    return MyAppClass;
}());
exports.MyAppClass = MyAppClass;

},{}],3:[function(require,module,exports){
"use strict";
var MyAppClass_1 = require("./MyAppClass");
module.exports = new MyAppClass_1.MyAppClass("this-is-an-app-instance");

},{"./MyAppClass":2}]},{},[1]);
