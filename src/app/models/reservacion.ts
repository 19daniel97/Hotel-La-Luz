export class Reservacion {
    constructor(_id = '', Nombre = '', Telefono = '', Email = '', FechaEnt = '', TipHab = '', NumHab = '') {
        this._id = _id;
        this.Nombre = Nombre;
        this.Telefono = Telefono;
        this.Email = Email;
        this.FechaEnt = FechaEnt
        this.TipHab = TipHab;
        this.NumHab = NumHab;
        
    }

    _id: string;
    Nombre: string;
    Telefono: string;
    Email: string;
    FechaEnt: string;
    TipHab: string;
    NumHab: string;
   

   
}
