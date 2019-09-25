export class Bar {
    private nombre:string; // atributo
    private capacidad: number; //atributo
    constructor (nom: string, cap: number ){
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

    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    
    public setCapacidad(cap : number) {
        this.capacidad = cap;
    }
    
    public getNombre(): string {
        return this.nombre;
    } 
    
    public getCapacidad() : number {
        return this.capacidad;
    }
       
}
export class BarMan {
    private nombre: string;
    private apellido: string;
    constructor(nom: string, apell: string){
        this.nombre = nom;
        this.apellido = apell;
    } 
    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    
    public setApellido(apell : string): void {
        this.apellido = apell;
    }
    
   
    public getNombre() : string {
        return this.nombre;
    }
    
    public getApellido() : string {
        return this.apellido;
    }
    
    
}
    

export class Trago {
    private nombre: string;
    private color: string;
    private cantidad: number;
    constructor(nom: string, col: string, cant: number){
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    public setNombre(nom : string): void{
        this.nombre = nom;
    }
    
    public setColor(col : string): void {
        this.color = col;
    }
    
    public setCantidad(cant : number): void {
        this.cantidad= cant;
    }
    
    
     
    public getNombre() : string {
        return this.nombre;
    }
    
    public getColor() : string {
        return this.color;
    }
    
    public getCantidad() : number {
        return this.cantidad;
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


