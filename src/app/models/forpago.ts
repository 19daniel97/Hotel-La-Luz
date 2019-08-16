export class Forpago {
    constructor(_id = '', forpago = '', descripcion = '') {
        this._id = _id;
        this.forpago = forpago;
        this.descripcion = descripcion;
    }

    _id: string;
    forpago: string;
    descripcion: string;
}
