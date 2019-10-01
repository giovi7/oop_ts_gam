"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var GeometricFigure = /** @class */ (function () {
    function GeometricFigure(nomb, posX, posY) {
        this.nombre = nomb;
        this.posX = posX;
        this.posY = posY;
    }
    return GeometricFigure;
}());
exports.GeometricFigure = GeometricFigure;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(nomb, posX, posY, lado) {
        var _this = _super.call(this, nomb, posX, posY) || this;
        _this.lado = lado;
        return _this;
    }
    return Square;
}(GeometricFigure));
exports.Square = Square;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(nomb, posX, posY, radio) {
        var _this = _super.call(this, nomb, posX, posY) || this;
        _this.radio = radio;
        return _this;
    }
    return Circle;
}(GeometricFigure));
exports.Circle = Circle;
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(nomb, posX, posY, base, altura) {
        var _this = _super.call(this, nomb, posX, posY) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    return Triangle;
}(GeometricFigure));
exports.Triangle = Triangle;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(nomb, posX, posY, base, altura) {
        var _this = _super.call(this, nomb, posX, posY) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    return Rectangle;
}(GeometricFigure));
exports.Rectangle = Rectangle;
var rectangulo1 = new Rectangle('rectangulo', 3, 3, 6, 5);
console.log(rectangulo1);
var GeometricFigure1 = new Triangle('triangulo', 2, 9, 5, 5);
console.log(GeometricFigure1);
var resul = rectangulo1 instanceof GeometricFigure;
console.log(resul);
