export class Parallelogram {
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
        return this.heigth;
    }
    
    public setWidth(w : number): void{
        this.width = w;
    }
    
    public getWidth() : number {
        return this.width;
    }   
    public getArea(): number{
        let area: number = this.heigth * this.width;
        return area;
    } 
    
}

let parallelogram1: Parallelogram = new Parallelogram(5,5);
console.log(parallelogram1);

let areaParallelogram1 : number = parallelogram1.getArea();
console.log(areaParallelogram1);
