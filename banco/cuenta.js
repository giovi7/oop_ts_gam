"use strict";
exports.__esModule = true;
/**
 * Crea una clase cuenta con los métodos ingreso , reintegro y transferiencia.
 * La clase contendrá un constructor por defecto, un constructor con parámetros,
 *  un constructor copia y los métodos getters y setters.
 */
var Cuenta = /** @class */ (function () {
    function Cuenta(s, m) {
        this.saldo = s;
        this.movimiento = m;
    }
    Cuenta.prototype.setSaldo = function (s) {
        this.saldo = s;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.setMovimiento = function (m) {
        this.movimiento = m;
    };
    Cuenta.prototype.getMovimiento = function () {
        return this.movimiento;
    };
    Cuenta.prototype.setIngreso = function (monto) {
        this.saldo = monto + this.saldo;
        this.movimiento.push('ingreso ' + monto);
    };
    Cuenta.prototype.setTransferencia = function (mont) {
        this.saldo = this.saldo - mont;
        this.movimiento.push('transferencia ' + mont);
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
var cuenta1 = new Cuenta(100, []);
console.log(cuenta1);
cuenta1.setIngreso(10);
console.log(cuenta1);
cuenta1.setIngreso(50);
console.log(cuenta1);
cuenta1.setTransferencia(30);
console.log(cuenta1);
