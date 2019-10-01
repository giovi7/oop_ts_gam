 export class Disco {
     private nombre: string;
     private titulo: string;
     private precio: number;
     private formato: string;
    public constructor(nom:string, pre:number,form: string) {
        this.nombre = nom;
        this.precio = pre;
        this.formato = form;
    }
}
export class Cd extends Disco {
    public constructor(nom: string, pre: number, form: string) {
        super (nom, pre, form);
    }
}
export class Dvd extends Disco {
     public constructor(nom: string, pre: number, form: string) {
        super(nom, pre, form)
    }
}
export class Bluray extends Disco {
    public constructor(nom: string, pre: number, form: string) {
        super(nom, pre, form)
    }
}
export class Tienda {
    private registro: Disco[];
    private venta: number;
    private cantidadCliente: number;
    
    public constructor(  vent: number, cant: number) {
        this.venta = vent;
        this.cantidadCliente = cant;
    }
}

