/**
 * clases
 */
 export class Rectangle{
    private posX: number;
    private posY: number;
    private height: number;
    private width: number;

    public constructor(px : number, py: number, h: number, w: number){
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.width = w;
    }
    public setPosX(px : number): void{
        this.posX = px;
    }
    public setPosY(py : number): void{
        this.posY = py;
    }
    public setHeight(h : number) {
        this.height = h;
    }
    public setWidth(w : number) {
        this.width = w;
    }
    public getPosX() : number {
        return this.posX;
    }
    public getPosY() : number {
        return this.posY;
    }
    public getHeight() : number {
        return this.height;
    }
    public getWidth() : number {
        return this.width;
    }
    
    public desplazar(posXnew:number, posYnew: number): void{
        this.posX = posXnew;
        this.posY = posYnew;

    }
    public getArea():number{
        let area: number = this.height * this.width;
        return area;
    }
    public getPerimeter() : number{
        let perimeter : number = 2*this.height + 2 * this.width;
        return perimeter;
    }
 }


 
 /**
  * Pruebas
  */


 let rectangle1: Rectangle = new Rectangle(5,5,2,3);
 console.log(rectangle1);

 rectangle1.setHeight(10);
 rectangle1.setWidth(20);
 console.log(rectangle1);
 rectangle1.desplazar(100,100);
 console.log(rectangle1);
 /// en aqui seria la variable let como nuestro en el cual se guarda papel let areaRectangle1: number = rectangle1.getArea();
 let areaRectangle1: number = rectangle1.getArea();
 console.log(areaRectangle1);
 let perimeterRectangle1: number = rectangle1.getPerimeter();
 console.log(perimeterRectangle1);
 



 // en aqui ases uso de get con el cual se realiza el calculo del area del rectangulo
 //let areaRectangle1: number = rectangle1.getHeight() * rectangle1.getWidth();
 //console.log(areaRectangle1);
 