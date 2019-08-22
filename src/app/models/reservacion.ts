import { Habitacion } from './habitacion';

export class Reservacion {
    constructor(_id = '', Nombre = '', Telefono = '', Email = '', FechaEnt = '', habitacion = new Habitacion(),
                numPer = 0) {
        this._id = _id;
        this.Nombre = Nombre;
        this.Telefono = Telefono;
        this.Email = Email;
        this.FechaEnt = FechaEnt
        this.habitacion = habitacion;
        this.numPer = numPer;
    }

    _id: string;
    Nombre: string;
    Telefono: string;
    Email: string;
    FechaEnt: string;
    habitacion: Habitacion;
    numPer: number;
}
