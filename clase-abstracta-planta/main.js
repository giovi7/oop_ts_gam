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
var Planta = /** @class */ (function () {
    function Planta(formaCrecimiento, clasificaion) {
        this.formaCrecimiento = formaCrecimiento;
        this.clasificacion = clasificaion;
    }
    return Planta;
}());
exports.Planta = Planta;
var Pino = /** @class */ (function (_super) {
    __extends(Pino, _super);
    function Pino(formaCrecimiento, clasificacion) {
        return _super.call(this, formaCrecimiento, clasificacion) || this;
    }
    Pino.prototype.plantaDuracion = function () {
        return "el pino es una planta perennes";
    };
    return Pino;
}(Planta));
exports.Pino = Pino;
var DienteDeLeon = /** @class */ (function (_super) {
    __extends(DienteDeLeon, _super);
    function DienteDeLeon(formaCrecimiento, clasificacion) {
        return _super.call(this, formaCrecimiento, clasificacion) || this;
    }
    return DienteDeLeon;
}(Planta));
exports.DienteDeLeon = DienteDeLeon;
var Romero = /** @class */ (function (_super) {
    __extends(Romero, _super);
    function Romero(formaCrecimiento, clasificacion) {
        return _super.call(this, formaCrecimiento, clasificacion) || this;
    }
    return Romero;
}(Planta));
exports.Romero = Romero;
var Roble = /** @class */ (function (_super) {
    __extends(Roble, _super);
    function Roble(formaCrecimiento, clasificacion) {
        return _super.call(this, formaCrecimiento, clasificacion) || this;
    }
    return Roble;
}(Planta));
exports.Roble = Roble;
var Ajo = /** @class */ (function (_super) {
    __extends(Ajo, _super);
    function Ajo(formaCrecimiento, clasificacion) {
        return _super.call(this, formaCrecimiento, clasificacion) || this;
    }
    Ajo.prototype.usoCocina = function () {
        return "el uso de ajo en la comidas ";
    };
    return Ajo;
}(Planta));
exports.Ajo = Ajo;
var planta1 = new Ajo("arbusto", "Liliopsida");
console.log(planta1.usoCocina());
var planta2 = new Pino("Arbol", "strobus");
console.log(planta2.plantaDuracion());
