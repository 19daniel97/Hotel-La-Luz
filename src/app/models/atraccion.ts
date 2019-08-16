export class Atraccion {
    constructor(_id = '', img = '', nombre = '', contenido = '') {
        this._id = _id;
        this.img = img;
        this.nombre = nombre;
        this.contenido =contenido;
       
    }

    _id: string;
    img: string;
    nombre: string;
    contenido: string;
   
}
