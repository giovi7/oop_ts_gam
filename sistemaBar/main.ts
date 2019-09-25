export class Bar {
    nombre:string; // atributo
    capacidad: number; //atributo
    constructor (nom: string, cap:number ){
        this.nombre = nom;
        this.capacidad = cap;
    }
}
export class BarMan {
    nombre: string;
    apellido: string;
    constructor(nom: string, apell:string){
        this.nombre = nom
        this.apellido = apell;
    }
}
export class Trago {
    nombre: string;
    color: string;
    cantidad: number;
    constructor(nom: string,col:string,cant: number){
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
}
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
let bar1:Bar = new Bar("nueva era",50);
let bar2: Bar = new Bar("el patio",200);

let barman1 :BarMan = new BarMan("julio","perez");

let trago1 : Trago = new Trago("mojito","rojo",1);

console.log(bar1);
console.log(bar2);
console.log(barman1);
console.log(trago1);


