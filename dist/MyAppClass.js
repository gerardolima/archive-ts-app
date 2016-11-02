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
