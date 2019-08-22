import { Tipohab } from './tipohab';

export class Habitacion {
    constructor(_id = '', numeroh = 0, numeroc = 0, precio = 0, tipoh = new Tipohab(), descripcion = '',
                ocupacion = false) {
        this._id = _id;
        this.numeroh = numeroh;
        this.numeroc = numeroc;
        this.precio = precio;
        this.tipoh = tipoh;
        this.descripcion = descripcion;
        this.ocupacion = ocupacion;
    }

    _id: string;
    numeroh: number;
    numeroc: number;
    precio: number;
    tipoh: Tipohab;
    descripcion: string;
    ocupacion: boolean;
   
}
