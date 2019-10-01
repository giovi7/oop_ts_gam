export class GeometricFigure {
    private nombre: string;
    private posX: number;
    private posY: number;
    public constructor(nomb: string, posX: number, posY: number) {
        this.nombre = nomb;
        this.posX = posX;
        this.posY = posY;
    }
}
export class Square extends GeometricFigure  {
    private lado: number;
    public constructor(nomb: string, posX: number, posY: number, lado:number) {
        super(nomb, posX, posY);
        this.lado = lado;

    }
}
export class Circle extends GeometricFigure {
    private radio: number;
    public constructor(nomb: string, posX: number, posY: number, radio: number) {
        super(nomb, posX, posY);
        this.radio = radio;
        
    }
}
export class Triangle extends GeometricFigure {
    private base: number;
    private altura: number;
    public constructor(nomb: string, posX: number, posY: number, base: number, altura: number) {
        super(nomb, posX, posY);
        this.base = base;
        this.altura = altura;
    }
}
export class Rectangle extends GeometricFigure {
    private base: number;
    private altura: number;
    public constructor(nomb: string, posX: number, posY: number, base: number, altura: number) {
        super(nomb, posX, posY);
        this.base = base;
        this.altura = altura;
    }
}

let rectangulo1: Rectangle = new Rectangle('rectangulo',3,3,6,5)
console.log(rectangulo1);
let GeometricFigure1: GeometricFigure = new Triangle('triangulo', 2,9,5,5)
console.log(GeometricFigure1);

var resul: boolean = rectangulo1 instanceof GeometricFigure;
console.log(resul);

