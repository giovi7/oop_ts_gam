"use strict";
exports.__esModule = true;
var Ellipse = /** @class */ (function () {
    function Ellipse(h, w) {
        this.heigth = h;
        this.width = w;
    }
    Ellipse.prototype.setHeigth = function (h) {
        this.heigth = h;
    };
    Ellipse.prototype.getHeigth = function () {
        return this.heigth;
    };
    Ellipse.prototype.setWidth = function (w) {
        this.width = w;
    };
    Ellipse.prototype.getWidth = function () {
        return this.width;
    };
    Ellipse.prototype.getArea = function () {
        var area = Math.PI * this.heigth * this.width;
        return area;
    };
    return Ellipse;
}());
exports.Ellipse = Ellipse;
var ellipse1 = new Ellipse(5, 5);
console.log(ellipse1);
var areaEllipse1 = ellipse1.getArea();
console.log(areaEllipse1);
