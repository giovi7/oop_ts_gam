//ruedas, color, puertas, marca, modelo
export class Auto {
    ruedas: number;
    color : string;
    puerta : number;
    marca : string;
    modelo :string;
    constructor (_ruedas, _color, _puerta, _marca, _modelo){
        this.ruedas = _ruedas;
        this.color = _color;
        this.puerta = _puerta;
        this.marca = _marca;
        this.modelo = _modelo;

    }
    mostrarRuedas(){
        console.log(this.ruedas);
        
    }
    mostrarColor(){
        console.log(this.color);
    }
    mostrarPuerta(){
        console.log(this.puerta);    
    }
    mostrarMarca(){
        console.log(this.marca);
        
    }
    mostrarModelo(){
        console.log(this.modelo);
        
    }
}
let vagoneta: Auto = new Auto(5,"plomo", 4, "Toyota"," Hilux 2.4L Tdi 4x2 CD");
vagoneta.mostrarRuedas();
vagoneta.mostrarColor();
vagoneta.mostrarPuerta();
vagoneta.mostrarMarca();
vagoneta.mostrarModelo();







