"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(r) {
        this.radio = r;
    }
    Circle.prototype.setRadio = function (r) {
        this.radio = r;
    };
    Circle.prototype.getRadio = function () {
        return this.radio;
    };
    Circle.prototype.getArea = function () {
        var area = Math.PI * (this.radio * this.radio);
        return area;
    };
    return Circle;
}());
exports.Circle = Circle;
var circle1 = new Circle(5);
console.log(circle1);
var areacircle1 = circle1.getArea();
console.log(areacircle1);
