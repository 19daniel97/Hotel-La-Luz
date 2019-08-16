export class Tipohab {
    constructor(_id = '', tipohab = '', descripcion = '') {
        this._id = _id;
        this.tipohab = tipohab;
        this.descripcion = descripcion;
    }

    _id: string;
    tipohab: string;
    descripcion: string;
}
