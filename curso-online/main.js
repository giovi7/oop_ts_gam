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
    Curso.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Curso.prototype.getNombre = function () {
        return this.nombre;
    };
    Curso.prototype.setDescripcion = function (des) {
        this.descripcion = des;
    };
    Curso.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Curso.prototype.setPrecio = function (prec) {
        this.precio = prec;
    };
    Curso.prototype.getPrecio = function () {
        return this.precio;
    };
    Curso.prototype.setDocente = function (doc) {
        this.docente = doc;
    };
    Curso.prototype.getDocente = function () {
        return this.docente;
    };
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
    Estudiante.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Estudiante.prototype.getNombre = function () {
        return this.nombre;
    };
    Estudiante.prototype.setApellido = function (ape) {
        this.apellido = ape;
    };
    Estudiante.prototype.getApellido = function () {
        return this.apellido;
    };
    Estudiante.prototype.setCorreo = function (co) {
        this.correo = co;
    };
    Estudiante.prototype.getCorreo = function () {
        return this.correo;
    };
    Estudiante.prototype.setDireccion = function (dir) {
        this.direccion = dir;
    };
    Estudiante.prototype.getDireccion = function () {
        return this.direccion;
    };
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
    Docente.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Docente.prototype.getNombre = function () {
        return this.nombre;
    };
    Docente.prototype.setApellido = function (ape) {
        this.apellido = ape;
    };
    Docente.prototype.getAellido = function () {
        return this.apellido;
    };
    Docente.prototype.setCorreo = function (co) {
        this.correo = co;
    };
    Docente.prototype.getCorre = function () {
        return this.correo;
    };
    Docente.prototype.setDireccion = function (dir) {
        this.direccion = dir;
    };
    Docente.prototype.getDireccion = function () {
        return this.direccion;
    };
    return Docente;
}());
exports.Docente = Docente;
var CompraCurso = /** @class */ (function () {
    function CompraCurso(cu, est, fe) {
        this.curso = cu;
        this.estudiante = est;
        this.fecha = fe;
    }
    CompraCurso.prototype.setCurso = function (cu) {
        this.curso = cu;
    };
    CompraCurso.prototype.getCurso = function () {
        return this.curso;
    };
    CompraCurso.prototype.setEstudiante = function (est) {
        this.estudiante = est;
    };
    CompraCurso.prototype.getEstudiante = function () {
        return this.estudiante;
    };
    CompraCurso.prototype.setFecha = function (fe) {
        this.fecha = fe;
    };
    CompraCurso.prototype.getFecha = function () {
        return this.fecha;
    };
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
var Direccion = /** @class */ (function () {
    function Direccion(ciu, ba, ca) {
        this.ciudad = ciu;
        this.barrio = ba;
        this.calle = ca;
    }
    Direccion.prototype.setCiudad = function (ciu) {
        this.ciudad = ciu;
    };
    Direccion.prototype.getCiudad = function () {
        return this.ciudad;
    };
    Direccion.prototype.setBarrio = function (ba) {
        this.barrio = ba;
    };
    Direccion.prototype.getBarrio = function () {
        return this.barrio;
    };
    Direccion.prototype.setCalle = function (ca) {
        this.calle = ca;
    };
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
/**
 * pruebas
 */
/**
 * Crear 5 instancias de la clase curso
 * Crear 10 instacias de la clase estudiante
 * Crear 2 instancias de la clase Docente
 * Crear 12 instancias de CompraCurso
 * Hacer correr y verificar el correcto funcionamiento de las clases
 * implementadas.
 * Subir a su repositorio
 */
var direccion1 = new Direccion("Cochabamba", "Fortaleza", "Sin Nombre");
var dir = [direccion1];
console.log(direccion1);
var docente1 = new Docente("Marcelo", "Antezana", "dkfkd@gmail.com", dir);
var docente2 = new Docente("David", "Claros", "sdj@gmail.com", dir);
console.log(docente1);
console.log(docente2);
var curso1 = new Curso("programacion", "nivel basico", 200, docente1);
var curso2 = new Curso("robotica", "nivel medio", 150, docente2);
var curso3 = new Curso("web", "nivel basico", 180, docente1);
var curso4 = new Curso("javaScript", "nivel avanzado", 200, docente2);
var curso5 = new Curso("arduino", "medio", 120, docente1);
console.log(curso1);
console.log(curso2);
console.log(curso3);
console.log(curso4);
console.log(curso5);
var estudiante1 = new Estudiante("Gio", "Brañez", "gi@gmail.com", dir);
var estudiante2 = new Estudiante("gladis", "Zarsuri", "glad@.com", dir);
var estudiante3 = new Estudiante("Rene", "Antezana", "sdhd@.com", dir);
var estudiante4 = new Estudiante("Erick", "Fernandez", "dsbfjd@.com", dir);
var estudiante5 = new Estudiante("Diego", "Pinto", "shdh@.com", dir);
var estudiante6 = new Estudiante("Juan", "Oropeza", "gscnks@.com", dir);
var estudiante7 = new Estudiante("Yuss", "Meneces", "mcis@.com", dir);
var estudiante8 = new Estudiante("Miguel", "Salvatierra", "ansvdhs@.com", dir);
var estudiante9 = new Estudiante("Abel", "Montecinos", "xmncmx@.com", dir);
var estudiante10 = new Estudiante("Samuel", "Alegre", "amk@.com", dir);
console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);
console.log(estudiante4);
console.log(estudiante5);
console.log(estudiante6);
console.log(estudiante7);
console.log(estudiante8);
console.log(estudiante9);
console.log(estudiante10);
var compraCurso1 = new CompraCurso(curso1, estudiante1, " 20/02/19");
var compraCurso2 = new CompraCurso(curso2, estudiante2, " 05/01/19");
var compraCurso3 = new CompraCurso(curso3, estudiante3, " 23/03/19");
var compraCurso4 = new CompraCurso(curso4, estudiante4, " 13/04/19");
var compraCurso5 = new CompraCurso(curso5, estudiante5, " 29/06/19");
var compraCurso6 = new CompraCurso(curso1, estudiante6, " 20/02/19");
var compraCurso7 = new CompraCurso(curso2, estudiante7, " 05/01/19");
var compraCurso8 = new CompraCurso(curso3, estudiante8, " 23/03/19");
var compraCurso9 = new CompraCurso(curso4, estudiante9, " 13/04/19");
var compraCurso10 = new CompraCurso(curso5, estudiante10, "29/06/19");
var compraCurso11 = new CompraCurso(curso1, estudiante1, " 20/02/19");
var compraCurso12 = new CompraCurso(curso3, estudiante2, " 05/01/19");
console.log(compraCurso1);
console.log(compraCurso2);
console.log(compraCurso3);
console.log(compraCurso4);
console.log(compraCurso5);
console.log(compraCurso6);
console.log(compraCurso7);
console.log(compraCurso8);
console.log(compraCurso9);
console.log(compraCurso10);
console.log(compraCurso11);
console.log(compraCurso12);
