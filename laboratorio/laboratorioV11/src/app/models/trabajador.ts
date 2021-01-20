export class Trabajador {
    public nombre: string;
    public edad: number;
    public fechaContatacion: Date;
    public msFechaContatacion: number;
    public salario: number;
    public activo: boolean;

    constructor(){
        this.nombre = '';
        this.edad = 0;
        this.fechaContatacion = new Date();
        this.msFechaContatacion = this.fechaContatacion.getTime();
        this.salario = 0.0;
        this.activo = true;
    }
}
