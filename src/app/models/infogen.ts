export class Infogen {
    constructor(_id = '', informacion = '', descripcion = '') {
        this._id = _id;
        this.informacion = informacion;
        this.descripcion = descripcion;
        
    }

    _id: string;
    informacion: string;
    descripcion: string;
}
