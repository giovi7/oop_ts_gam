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
 * 
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
        this.docente = doc;
    }
    public setNombre(nom : string): void {
        this.nombre = nom;
    }
    public getNombre() : string {
        return this.nombre
    }
    public setDescripcion(des : string): void {
        this.descripcion = des;
    }
    public getDescripcion() : string {
        return this.descripcion;
    }
    public setPrecio(prec : number): void {
        this.precio = prec;
    }
    public getPrecio() : number {
        return this.precio;
    }
    public setDocente(doc : Docente): void {
        this.docente = doc;
    }
    public getDocente() : Docente {
        return this.docente; 
    }
      
}

export class Estudiante {
    private nombre: string;
    private apellido: string;
    private  correo: string;
    private direccion: Direccion[];

    constructor(nom: string, ape: string, co: string, dir: Direccion[]) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
        this.direccion = dir;

    }
    public setNombre(nom : string): void {
        this.nombre = nom;
    }
    public getNombre() : string {
        return this.nombre;
    }
    public setApellido(ape : string): void {
        this.apellido = ape;
    }
    public getApellido() : string {
        return this.apellido;
    }
    public setCorreo(co : string) {
        this. correo = co;
    }
    public getCorreo() : string {
        return this.correo;
    }
    public setDireccion(dir : Direccion[]) {
        this.direccion = dir;
    }
    public getDireccion() : Direccion[] {
        return this.direccion;
    }
    
}

export class Docente {
    private nombre: string;
    private apellido: string;
    private  correo: string;
    private direccion: Direccion[];

    constructor(nom: string, ape: string, co: string, dir: Direccion[]) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
        this.direccion = dir;
        
    }
    public setNombre(nom : string): void {
        this.nombre = nom;
    }
    public getNombre() : string {
        return this.nombre;
    }
    public setApellido(ape : string): void {
        this.apellido = ape;
    }
    public getAellido() : string {
        return this.apellido;
    }
    public setCorreo(co : string): void {
        this.correo = co;
    }
    public getCorre() : string {
        return this.correo;
    }
    public setDireccion(dir : Direccion[]) {
        this.direccion = dir;
    }
    public getDireccion() : Direccion[] {
        return this.direccion;
    }
    public agregarDireccion(){
        console.log(this.direccion);    
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
    public setCurso(cu : Curso): void {
        this.curso = cu;
    }
    public getCurso() : Curso {
        return this.curso;
    }
    public setEstudiante(est : Estudiante) {
        this.estudiante = est;
    }
    public getEstudiante() : Estudiante {
        return this.estudiante;
    }
    public setFecha(fe : string): void {
        this.fecha = fe;
    }
    public getFecha() : string {
        return this.fecha;
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
    public setCiudad(ciu : string): void {
        this.ciudad = ciu;
    }
    public getCiudad() : string {
        return this.ciudad;
    }
    public setBarrio(ba : string): void {
        this.barrio = ba;
    }
    public getBarrio() : string {
        return this.barrio;
    }
    public setCalle(ca : string): void {
        this.calle = ca;
    }
    public getCalle() : string {
        return this.calle;
    }  
}
 
export class PlataformaEducativa{
    private nombre: string;
    private lista: CompraCurso[];
    constructor(nom:string, lis: CompraCurso[]){
        this.nombre = nom;
        this.lista = lis;
    }
    
    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    public getNombre() : string {
        return this.nombre;
    }
    public setLista(lis : CompraCurso[]): void {
        this.lista = lis;
    }
    public RegistroCompraCurso(cursoComp: CompraCurso): void {
        this.lista.push(cursoComp);  
    }
       
}

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
 let direccion1: Direccion = new Direccion("Cochabamba", "Fortaleza", "Sin Nombre");
 let direcion1:Direccion[] = [direccion1]
 console.log(direccion1);

 let direccion2: Direccion = new Direccion("Cochabamba", "primero de mayo", "zona5");
 let direcion2:Direccion[] = [direccion2]
 console.log(direccion2);

 let direccion3: Direccion = new Direccion("Cochabamba", "azirumarca", "Sin Nombre");
 let direcion3:Direccion[] = [direccion3]
 console.log(direccion3);

 let direccion4: Direccion = new Direccion("Cochabamba", "praderas", "Sin Nombre");
 let direcionc4:Direccion[] = [direccion4]
 console.log(direccion4);

 let direccion5: Direccion = new Direccion("Cochabamba", "Fortaleza chica", "Sin Nombre");
 let direcion5:Direccion[] = [direccion5]
 console.log(direccion5);

 let direccion6: Direccion = new Direccion("Cochabamba", "bolivar", "calle1");
 let direcion6:Direccion[] = [direccion6]
 console.log(direccion6);

 let direccion7: Direccion = new Direccion("Cochabamba", "Fortaleza", "Sin Nombre");
 let direcion7:Direccion[] = [direccion7]
 console.log(direccion7);

 let direccion8: Direccion = new Direccion("Cochabamba", "tamborada", "pampa");
 let direcion8:Direccion[] = [direccion8]
 console.log(direccion8);

 let direccion9: Direccion = new Direccion("Cochabamba", "itocta", "Sin Nombre");
 let direcion9:Direccion[] = [direccion9]
 console.log(direccion9);

 let direccion10: Direccion = new Direccion("Cochabamba", "villa mexico", "Sin Nombre");
 let direcion10:Direccion[] = [direccion10]
 console.log(direccion10);

 let direccion11: Direccion = new Direccion("Cochabamba", "pucarita", "Sin Nombre");
 let direcionc11:Direccion[] = [direccion11]
 console.log(direccion11);

 let docente1: Docente = new Docente("Marcelo", "Antezana","dkfkd@gmail.com", direcion1);
 let docente2: Docente = new Docente("David", "Claros","sdj@gmail.com", direcion2,);
 console.log(docente1);
 console.log(docente2);
 docente1.agregarDireccion();
 
 let curso1: Curso = new Curso("programacion", "nivel basico", 200, docente1);
 let curso2: Curso = new Curso("robotica", "nivel medio", 150, docente2);
 let curso3: Curso = new Curso("web", "nivel basico", 180, docente1);
 let curso4: Curso = new Curso("javaScript", "nivel avanzado", 200, docente2);
 let curso5: Curso = new Curso("arduino", "medio", 120, docente1);
 console.log(curso1);
 console.log(curso2);
 console.log(curso3);
 console.log(curso4);
 console.log(curso5);
 
 let estudiante1: Estudiante = new Estudiante("Gio", "Brañez", "gi@gmail.com",direcion7);
 let estudiante2: Estudiante = new Estudiante("gladis", "Zarsuri", "glad@.com", direcion2);
 let estudiante3: Estudiante = new Estudiante("Rene", "Antezana", "sdhd@.com", direcion3);
 let estudiante4: Estudiante = new Estudiante("Erick", "Fernandez" , "dsbfjd@.com", direcion1);
 let estudiante5: Estudiante = new Estudiante("Diego", "Pinto", "shdh@.com", direcionc4);
 let estudiante6: Estudiante = new Estudiante("Juan", "Oropeza", "gscnks@.com", direcion5);
 let estudiante7: Estudiante = new Estudiante("Yuss", "Meneces", "mcis@.com", direcion6);
 let estudiante8: Estudiante = new Estudiante("Miguel", "Salvatierra", "ansvdhs@.com", direcion10);
 let estudiante9: Estudiante = new Estudiante("Abel", "Montecinos", "xmncmx@.com", direcion8);
 let estudiante10: Estudiante = new Estudiante("Samuel", "Alegre", "amk@.com", direcion9);
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

let compraCurso1: CompraCurso = new CompraCurso(curso1, estudiante1," 20/02/19");
let compraCurso2: CompraCurso = new CompraCurso(curso2, estudiante2," 05/01/19");
let compraCurso3: CompraCurso = new CompraCurso(curso3, estudiante3," 23/03/19");
let compraCurso4: CompraCurso = new CompraCurso(curso4, estudiante4," 13/04/19");
let compraCurso5: CompraCurso = new CompraCurso(curso5, estudiante5," 29/06/19");
let compraCurso6: CompraCurso = new CompraCurso(curso1, estudiante6," 20/02/19");
let compraCurso7: CompraCurso = new CompraCurso(curso2, estudiante7," 05/01/19"); 
let compraCurso8: CompraCurso = new CompraCurso(curso3, estudiante8," 23/03/19");
let compraCurso9: CompraCurso = new CompraCurso(curso4, estudiante9," 13/04/19");
let compraCurso10: CompraCurso = new CompraCurso(curso5, estudiante10,"29/06/19");
let compraCurso11: CompraCurso = new CompraCurso(curso1, estudiante1," 20/02/19");
let compraCurso12: CompraCurso = new CompraCurso(curso3, estudiante2," 05/01/19");

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

let plataformaEducativa1: PlataformaEducativa = new PlataformaEducativa(compraCurso1,);
