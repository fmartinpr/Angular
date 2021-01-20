export class Avenger {

    constructor(
        public nombre: string,
        public equipo: string,
        public nombreReal: string,
        public puedePelear = true,
        public peleasGanadas?: number) {
    }

public static parseAvenger(soldado: Soldado): Avenger {
    return new Avenger(soldado.nombre, soldado.equipo,
        soldado.nombreReal);
}
}

export class Soldado {
    constructor(
        public nombre: string,
        public equipo: string,
        public nombreReal: string) {
    }
}