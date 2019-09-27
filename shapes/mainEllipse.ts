export class Ellipse{
    private heigth: number;
    private width: number;
    constructor( h: number, w: number) {
        this.heigth = h;
        this.width = w;
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
    public getArea(): number{
        let area: number = Math.PI*this.heigth * this.width;
        return area;
    } 
    
}

let ellipse1: Ellipse = new Ellipse(5,5);
console.log(ellipse1);

let areaEllipse1 : number = ellipse1.getArea();
console.log(areaEllipse1);
