export class HeroeModel {
    id: string;
    nombre: string;
    poder: string;
    vivo: boolean;

    constructor(){
        this.id = "";
        this.nombre = "";
        this.poder = "";
        this.vivo = true;
    }

    update(object: any) {
        if(object.id && object.id.length > 0){
            this.id = object.id;
        }
        this.nombre = object.nombre;
        this.poder = object.poder;
        this.vivo = object.vivo;
    }
}
