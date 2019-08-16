export class Usuario {
    constructor(_id = '', nombre = '', puesto = '', email = '', usuario = "", password = '') {
        this._id = _id;
        this.nombre = nombre;
        this.puesto = puesto;
        this.email = email;
        this.usuario = usuario;
        this.password = password;
    }

    _id: string;
    nombre: string;
    puesto: string;
    email: string;
    usuario: string;
    password: string;
}
