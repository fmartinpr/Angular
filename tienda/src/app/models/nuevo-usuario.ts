export class NuevoUsuario {
    nombre: string;
    nombreUsuario: string;
    email: string;
    roles: string[];
    password: string;
    verifyPassword: string;

    constructor(nombre: string, nombreUsuario: string, email: string, password: string, verifyPassword: string) {
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.verifyPassword = verifyPassword;
        this.roles = ['user'];
    }
}