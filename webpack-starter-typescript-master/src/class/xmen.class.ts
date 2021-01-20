@imprimirConsola
export class Xmen {
    constructor(
        public nombre: string,
        public clave: string) {
    }

    public imprimir(){
        console.log(`${this.nombre}  - ${this.clave} }`);
    }
}

function imprimirConsola(constructorClase: Function){
    console.log(constructorClase);
}