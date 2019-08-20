import { Habitacion } from './habitacion';
import { Forpago } from './forpago';

export class Ocupacion {
    constructor(_id = '', 
                habitacion = '', 
                entrada = new Date,
                salida = new Date,
                nombre = '',
                telefono = '',
                comentarios = '',
                ) {
        
                        
        this._id = _id;
        this.habitacion = habitacion;
        this.entrada = entrada;
        this.salida = salida;
        this.nombre = nombre;
        this.telefono = telefono;
        this.comentarios = comentarios;
    }
    
    _id: string;
    habitacion: string;
    entrada: Date;
    salida: Date;
    nombre: string;
    telefono: string;
    comentarios: string;
}
