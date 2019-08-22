import { Habitacion } from './habitacion';

export class Ocupacion {
    constructor(_id = '', 
                habitacion = new Habitacion(), 
                entrada = new Date,
                nombre = '',
                telefono = '') {
        
                        
        this._id = _id;
        this.habitacion = habitacion;
        this.entrada = entrada;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    
    _id: string;
    habitacion: Habitacion;
    entrada: Date;
    nombre: string;
    telefono: string;
}
