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
export class Curso {
    private nombre: string;
    private descripcion:string;
    private precio: number;
    private docente: Docente;

    constructor(nom: string, des: string, prec: number, doc: Docente) {
        this.nombre = nom;
        this.descripcion = des;
        this.precio = prec;
        this.docente = Docente;
    }
}

export class Estudiante {
    private nombre: string;
    private apellido: string;
    private  correo: string;
    private direccion: Dierccion;

    constructor(nom: string, ape: string, co: string, dir: Direccion) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
        this.direccion = Direccion;

    }
}
exportc class Docente {
    private nombre: string;
    private apellido: string;
    private  correo: string;
    private direccion: Dierccion;

    constructor(nom: string, ape: string, co: string, dir: Direccion) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
        this.direccion = Direccion;
        
    }
}

export class CompraCurso {
    private curso: Curso;
    private estudiante: Estudiante;
    private fecha: string;
    constructor(cu: Curso, est:Estudiante, fe: string) {
        this.curso = cu;
        this.estudiante = est;
        this.fecha = fe;
        
    }
}
export class Direccion {
    private ciudad: string;
    private barrio: string;
    private calle: string;
    constructor(ciu: string, ba:string, ca:string) {
        this.ciudad = ciu;
        this.barrio = ba;
        this.calle = ca;
    }
}