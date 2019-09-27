export class Square {
    private length: number;
    
    constructor( l: number) {
        this.length = l;
    }
    
    public setLength(l : number): void {
        this.length = l;
    }
    
    public getLength() : number {
        return this.length
    }
       
    public getArea(): number{
        let area: number = this.length*2;
        return area;
    } 
    
}

let square1: Square = new Square(7);
console.log(square1);

let areaSquare1 : number = square1.getArea();
console.log(areaSquare1);
