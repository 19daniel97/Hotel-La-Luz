export class Contacto {
    constructor(_id = '', nombre = '', email = '', infadi = '') {
        this._id = _id;
        this.nombre = nombre;
        this.email =email
        this.infadi =infadi;
       
    }

    _id: string;
    
    nombre: string;
    email: string;
   
    infadi: string;
   
}

