export class Triangulo {
    private heigth : number;
    private width : number;
    constructor(h: number, w: number) {
        this.heigth = h;
        this.width = w;
    }
     
     public setHeigth(h: number): void {
         this.heigth = h;
     }
     public getWidth() : number {
         return this.width;
     }
     public getArea(): number{
         let area: number = (this.heigth * this.width)/2;
         return area;
     }

     
     
}
let triangulo1: Triangulo = new Triangulo(4,6);
console.log(triangulo1);

let areaTriangulo1: number = triangulo1.getArea();
console.log(areaTriangulo1);

