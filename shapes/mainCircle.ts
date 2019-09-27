export class Circle {
    private radio: number;
 
    constructor( r: number, ) {
        this.radio = r;
        
    }
    
    public setRadio(r : number): void {
        this.radio = r;
    }
    
    public getRadio() : number {
        return this.radio;
    }
     
    public getArea(): number{
        let area: number = Math.PI * (this.radio * this.radio);
        return area;
    } 
    
}

let circle1: Circle = new Circle(5);
console.log(circle1);

let areacircle1 : number = circle1.getArea();
console.log(areacircle1);
