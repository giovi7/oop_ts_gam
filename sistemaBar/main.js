"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, apell) {
        this.nombre = nom;
        this.apellido = apell;
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, col, cant) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    return Trago;
}());
exports.Trago = Trago;
/**
 * Concepto: Los atributos son las caracteristicas individuales que diferencian un objeto  de otro y determinan su
 * apariencia, estado u otras cualidades. Los atributos se guardan en variables denominadas de instancia, y  cada
 * objeto particular puede tener valores distintos para estas variables.
 */
/************************************************************** */
/** En programacion orientado a objetos (POO), un constructor es una sub rutina cuya mision es inicializar
 * un objeto de una clase con valores predeterminados.
 */
/**estamos creando objetos de bar */
var bar1 = new Bar("nueva era", 50);
var bar2 = new Bar("el patio", 200);
var barman1 = new BarMan("julio", "perez");
var trago1 = new Trago("mojito", "rojo", 1);
console.log(bar1);
console.log(bar2);
console.log(barman1);
console.log(trago1);
