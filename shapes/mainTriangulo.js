"use strict";
exports.__esModule = true;
var Triangulo = /** @class */ (function () {
    function Triangulo(h, w) {
        this.heigth = h;
        this.width = w;
    }
    Triangulo.prototype.setHeigth = function (h) {
        this.heigth = h;
    };
    Triangulo.prototype.getWidth = function () {
        return this.width;
    };
    Triangulo.prototype.getArea = function () {
        var area = (this.heigth * this.width) / 2;
        return area;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var triangulo1 = new Triangulo(4, 6);
console.log(triangulo1);
var areaTriangulo1 = triangulo1.getArea();
console.log(areaTriangulo1);
