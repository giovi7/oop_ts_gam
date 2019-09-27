"use strict";
exports.__esModule = true;
var Square = /** @class */ (function () {
    function Square(l) {
        this.length = l;
    }
    Square.prototype.setLength = function (l) {
        this.length = l;
    };
    Square.prototype.getLength = function () {
        return this.length;
    };
    Square.prototype.getArea = function () {
        var area = this.length * 2;
        return area;
    };
    return Square;
}());
exports.Square = Square;
var square1 = new Square(7);
console.log(square1);
var areaSquare1 = square1.getArea();
console.log(areaSquare1);
