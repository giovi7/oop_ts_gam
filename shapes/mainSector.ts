export class Sector {
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
        let area: number = (this.radio*this.radio)
        return area;
    } 
    
}

let sector1: Sector = new Sector(5);
console.log(sector1);

let areaSector1 : number = sector1.getArea();
console.log(sector1);
