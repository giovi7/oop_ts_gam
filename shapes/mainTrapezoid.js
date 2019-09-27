"use strict";
exports.__esModule = true;
var Trapezoid = /** @class */ (function () {
    function Trapezoid(h, w, a) {
        this.heigth = h;
        this.width = w;
        this.horiz = a;
    }
    Trapezoid.prototype.setHeigth = function (h) {
        this.heigth = h;
    };
    Trapezoid.prototype.getHeigth = function () {
        return this.heigth;
    };
    Trapezoid.prototype.setWidth = function (w) {
        this.width = w;
    };
    Trapezoid.prototype.getWidth = function () {
        return this.width;
    };
    Trapezoid.prototype.setHoriz = function (a) {
        this.horiz = a;
    };
    Trapezoid.prototype.getHoriz = function () {
        return this.horiz;
    };
    Trapezoid.prototype.getArea = function () {
        var area = ((this.horiz + this.width) / 2) * this.heigth;
        return area;
    };
    return Trapezoid;
}());
exports.Trapezoid = Trapezoid;
var trapezoid1 = new Trapezoid(5, 9, 4);
console.log(trapezoid1);
var areaTrapezoid1 = trapezoid1.getArea();
console.log(areaTrapezoid1);
