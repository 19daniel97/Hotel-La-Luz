export class Reservacion {
    constructor(_id = '', Nombre = '', Telefono = '', Email = '', FechaEnt = '', FechaSal = '', TipHab = '', NumHab = '', RegAlo = '') {
        this._id = _id;
        this.Nombre = Nombre;
        this.Telefono = Telefono;
        this.Email = Email;
        this.FechaEnt = FechaEnt;
        this.FechaSal = FechaSal;
        this.TipHab = TipHab;
        this.NumHab = NumHab;
        this.RegAlo = RegAlo;
    }

    _id: string;
    Nombre: string;
    Telefono: string;
    Email: string;
    FechaEnt: string;
    FechaSal: string;
    TipHab: string;
    NumHab: string;
    RegAlo: string;

   
}
