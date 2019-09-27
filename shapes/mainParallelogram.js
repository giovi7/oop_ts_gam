"use strict";
exports.__esModule = true;
var Parallelogram = /** @class */ (function () {
    function Parallelogram(h, w) {
        this.heigth = h;
        this.width = w;
    }
    Parallelogram.prototype.setHeigth = function (h) {
        this.heigth = h;
    };
    Parallelogram.prototype.getHeigth = function () {
        return this.heigth;
    };
    Parallelogram.prototype.setWidth = function (w) {
        this.width = w;
    };
    Parallelogram.prototype.getWidth = function () {
        return this.width;
    };
    Parallelogram.prototype.getArea = function () {
        var area = this.heigth * this.width;
        return area;
    };
    return Parallelogram;
}());
exports.Parallelogram = Parallelogram;
var parallelogram1 = new Parallelogram(5, 5);
console.log(parallelogram1);
var areaParallelogram1 = parallelogram1.getArea();
console.log(areaParallelogram1);
