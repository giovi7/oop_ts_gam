"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    /**
     * Cambiar el valor de un atributo
     * Creo el metodo set que recibe como parametro
     * el valor que deseo actualizar
     */
    /**
     * A una propiedad podemos asociarle un metodo llamado set en el momento que se le asigne un valor y otro metodo
     * llamado get cuando se accede al contenido de la propiedad.
     *
     * Estos mètodos son opcionales y nos permiten validar el dato a signar a la propiedad o el valor de retorno
     */
    Bar.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Bar.prototype.setCapacidad = function (cap) {
        this.capacidad = cap;
    };
    Bar.prototype.getNombre = function () {
        return this.nombre;
    };
    Bar.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, apell) {
        this.nombre = nom;
        this.apellido = apell;
    }
    BarMan.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    BarMan.prototype.setApellido = function (apell) {
        this.apellido = apell;
    };
    BarMan.prototype.getNombre = function () {
        return this.nombre;
    };
    BarMan.prototype.getApellido = function () {
        return this.apellido;
    };
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, col, cant) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    Trago.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Trago.prototype.setColor = function (col) {
        this.color = col;
    };
    Trago.prototype.setCantidad = function (cant) {
        this.cantidad = cant;
    };
    Trago.prototype.getNombre = function () {
        return this.nombre;
    };
    Trago.prototype.getColor = function () {
        return this.color;
    };
    Trago.prototype.getCantidad = function () {
        return this.cantidad;
    };
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
bar1.setNombre("El pueblito");
// bar1.nombre = "pueblito"; forma incorrecta actualizar un atributo
console.log(bar1);
// console.log(bar1.nombre);//forma incorrecta de pedir valor
console.log(bar1.getNombre());
bar1.setCapacidad(70);
console.log(bar1.getCapacidad());
barman1.setNombre("Carlos");
console.log(barman1.getNombre());
barman1.setApellido("Alegre");
console.log(barman1.getApellido());
trago1.setNombre("jugo");
console.log(trago1.getNombre());
trago1.setColor("azul");
console.log(trago1.getColor());
trago1.setCantidad(7);
console.log(trago1.getCantidad());
console.log(bar1);
console.log(bar2);
console.log(barman1);
console.log(trago1);
