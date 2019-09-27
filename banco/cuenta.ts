/**
 * Crea una clase cuenta con los métodos ingreso , reintegro y transferiencia. 
 * La clase contendrá un constructor por defecto, un constructor con parámetros,
 *  un constructor copia y los métodos getters y setters.
 */
export class Cuenta {
    private saldo: number;
    private movimiento:  string [];
    constructor(s:number, m:string[]) {
        this.saldo = s;
        this.movimiento = m;
    }
    
    public setSaldo(s : number): void {
        this.saldo = s;
    }
    
    public getSaldo() : number {
        return this.saldo;
    } 
    public setMovimiento(m : string []): void {
        this.movimiento = m;
    }
    public getMovimiento() : string [] {
        return this.movimiento;
    }
    public setIngreso(monto: number): void{
        this.saldo = monto + this.saldo;
        this.movimiento.push('ingreso '+  monto ); 
    }
    public setTransferencia(mont:number): void{
        this.saldo = this.saldo -mont;
        this.movimiento.push('transferencia ' + mont)
    }
    
}

let cuenta1: Cuenta = new Cuenta(100, [] );
 console.log(cuenta1);

 cuenta1.setIngreso( 10);
 console.log(cuenta1);
 
 cuenta1.setIngreso( 50);
 console.log(cuenta1);

 cuenta1.setTransferencia(30);
 console.log(cuenta1);
 
