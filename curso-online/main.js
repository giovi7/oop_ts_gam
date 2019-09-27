"use strict";
exports.__esModule = true;
/**
 * Se nesesita resolver el siguiente problema usando programacion orientada a objetos.
 * Se desea realizar un sistema de venta de cursos online como por ejemlo Udemy, Platzi,etc.
 * Para ello se nesesita interactuar con estudiantes, profesores de los mismos se nesesita registrar
 * su informacion basica como nombre, apellido, correo, direccion;
 * *por otra parte se nesesita interactuar con los cursos que se impartiran de los mismos se nesesita
 * registrar su precio, nombre, descripcion; finalmente se desea guardar el registro de los estudiantes
 * que compraron algun curso.
 * Un estudiante o profesor puede tener una o mas direcciones, al mismo tiempo una direccion esta
 * compuesta por la siguiente informacion: ciudad, barrio, calle.
 * Para los profesores en particular se nesesita guardar su profesion
 */
var Curso = /** @class */ (function () {
    function Curso(nom, des, prec, doc) {
        this.nombre = nom;
        this.descripcion = des;
        this.precio = prec;
        this.docente = doc;
    }
    return Curso;
}());
exports.Curso = Curso;
var Estudiante = /** @class */ (function () {
    function Estudiante(nom, ape, co, dir) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
        this.direccion = dir;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var Docente = /** @class */ (function () {
    function Docente(nom, ape, co, dir) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
        this.direccion = dir;
    }
    return Docente;
}());
exports.Docente = Docente;
var CompraCurso = /** @class */ (function () {
    function CompraCurso(cu, est, fe) {
        this.curso = cu;
        this.estudiante = est;
        this.fecha = fe;
    }
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
var Direccion = /** @class */ (function () {
    function Direccion(ciu, ba, ca) {
        this.ciudad = ciu;
        this.barrio = ba;
        this.calle = ca;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
