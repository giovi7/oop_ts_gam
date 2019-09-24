"use strict";
exports.__esModule = true;
//ruedas, color, puertas, marca, modelo
var Auto = /** @class */ (function () {
    function Auto(_ruedas, _color, _puerta, _marca, _modelo) {
        this.ruedas = _ruedas;
        this.color = _color;
        this.puerta = _puerta;
        this.marca = _marca;
        this.modelo = _modelo;
    }
    Auto.prototype.mostrarRuedas = function () {
        console.log(this.ruedas);
    };
    Auto.prototype.mostrarColor = function () {
        console.log(this.color);
    };
    Auto.prototype.mostrarPuerta = function () {
        console.log(this.puerta);
    };
    Auto.prototype.mostrarMarca = function () {
        console.log(this.marca);
    };
    Auto.prototype.mostrarModelo = function () {
        console.log(this.modelo);
    };
    return Auto;
}());
exports.Auto = Auto;
var vagoneta = new Auto(5, "plomo", 4, "Toyota", " Hilux 2.4L Tdi 4x2 CD");
vagoneta.mostrarRuedas();
vagoneta.mostrarColor();
vagoneta.mostrarPuerta();
vagoneta.mostrarMarca();
vagoneta.mostrarModelo();
