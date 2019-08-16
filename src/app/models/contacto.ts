export class Contacto {
    constructor(_id = '', img = '', nombre = '', email = '', telefono = '0', ocupacion = '', infadi = '') {
        this._id = _id;
        this.img = img;
        this.nombre = nombre;
        this.email =email;
        this.telefono = telefono;
        this.ocupacion =ocupacion;
        this.infadi =infadi;
       
    }

    _id: string;
    img: string;
    nombre: string;
    email: string;
    telefono: string;
    ocupacion: string;
    infadi: string;
   
}

