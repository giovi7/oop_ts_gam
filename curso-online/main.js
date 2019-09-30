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
 *
 * Crear la clase PlataformaEducativa, la misma debe tener el nombre de la plataforma educativa,
 * un listado donde se debe guardar el registro de los cursos comprados.
 * La clase PlataformaEducativa debe contener un metodo que sirva para registrar
 * la venta de un curso, el metodo debe recibir como argumento(parametro de entrada).
 * Una instancia de la clase Compra curso

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
    Docente.prototype.agregarDireccion = function () {
        console.log(this.direccion);
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
var PlataformaEducativa = /** @class */ (function () {
    function PlataformaEducativa() {
    }
    return PlataformaEducativa;
}());
exports.PlataformaEducativa = PlataformaEducativa;
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
 * Agregar un metodo a la clase docente y estudiante que le permita agregar una direccion,
 * la nueva direccion debe agregarse como un elemento mas sobre las direcciones ya existentes.
 * Subir a su repositorio
 */
var direccion1 = new Direccion("Cochabamba", "Fortaleza", "Sin Nombre");
var direcion1 = [direccion1];
console.log(direccion1);
var direccion2 = new Direccion("Cochabamba", "primero de mayo", "zona5");
var direcion2 = [direccion2];
console.log(direccion2);
var direccion3 = new Direccion("Cochabamba", "azirumarca", "Sin Nombre");
var direcion3 = [direccion3];
console.log(direccion3);
var direccion4 = new Direccion("Cochabamba", "praderas", "Sin Nombre");
var direcionc4 = [direccion4];
console.log(direccion4);
var direccion5 = new Direccion("Cochabamba", "Fortaleza chica", "Sin Nombre");
var direcion5 = [direccion5];
console.log(direccion5);
var direccion6 = new Direccion("Cochabamba", "bolivar", "calle1");
var direcion6 = [direccion6];
console.log(direccion6);
var direccion7 = new Direccion("Cochabamba", "Fortaleza", "Sin Nombre");
var direcion7 = [direccion7];
console.log(direccion7);
var direccion8 = new Direccion("Cochabamba", "tamborada", "pampa");
var direcion8 = [direccion8];
console.log(direccion8);
var direccion9 = new Direccion("Cochabamba", "itocta", "Sin Nombre");
var direcion9 = [direccion9];
console.log(direccion9);
var direccion10 = new Direccion("Cochabamba", "villa mexico", "Sin Nombre");
var direcion10 = [direccion10];
console.log(direccion10);
var direccion11 = new Direccion("Cochabamba", "pucarita", "Sin Nombre");
var direcionc11 = [direccion11];
console.log(direccion11);
var docente1 = new Docente("Marcelo", "Antezana", "dkfkd@gmail.com", direcion1);
var docente2 = new Docente("David", "Claros", "sdj@gmail.com", direcion2);
console.log(docente1);
console.log(docente2);
docente1.agregarDireccion();
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
var estudiante1 = new Estudiante("Gio", "Brañez", "gi@gmail.com", direcion7);
var estudiante2 = new Estudiante("gladis", "Zarsuri", "glad@.com", direcion2);
var estudiante3 = new Estudiante("Rene", "Antezana", "sdhd@.com", direcion3);
var estudiante4 = new Estudiante("Erick", "Fernandez", "dsbfjd@.com", direcion1);
var estudiante5 = new Estudiante("Diego", "Pinto", "shdh@.com", direcionc4);
var estudiante6 = new Estudiante("Juan", "Oropeza", "gscnks@.com", direcion5);
var estudiante7 = new Estudiante("Yuss", "Meneces", "mcis@.com", direcion6);
var estudiante8 = new Estudiante("Miguel", "Salvatierra", "ansvdhs@.com", direcion10);
var estudiante9 = new Estudiante("Abel", "Montecinos", "xmncmx@.com", direcion8);
var estudiante10 = new Estudiante("Samuel", "Alegre", "amk@.com", direcion9);
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
