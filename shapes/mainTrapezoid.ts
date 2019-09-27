export class Trapezoid {
    private heigth: number;
    private width: number;
    private horiz: number
    constructor( h: number, w: number, a: number) {
        this.heigth = h;
        this.width = w;
        this.horiz = a
    }
    public setHeigth(h : number): void {
        this.heigth = h;
    }
    public getHeigth() : number {
        return this.heigth
    }
    public setWidth(w : number): void{
        this.width = w;
    }
    public getWidth() : number {
        return this.width;
    }     
    public setHoriz(a : number) {
        this.horiz = a;
    }
    public getHoriz() : number {
        return this.horiz
    }
    
    
    public getArea(): number{
        let area: number = ((this.horiz + this.width) / 2) * this.heigth
        return area;
    } 
    
}

let trapezoid1: Trapezoid = new Trapezoid(5,9,4);
console.log(trapezoid1);

let areaTrapezoid1 : number = trapezoid1.getArea();
console.log(areaTrapezoid1);
