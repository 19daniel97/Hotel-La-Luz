/*const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ocupacionSchema = new Schema({
    habitacion: { type: Schema.ObjectId, ref: "Habitacion" },
    huespedes: { 
        adultos: { type: Number },
        ninos: { type: Number }
     },
    estancia: {
        entrada: { type: Date, require:true },
        salida: { type: Date, require:true }
    },
    infopersonal: {
        nombre: { type: String, require:true },
        email: { type: String, require:true },
        telefono: { type: String, require:true },
        comentarios: { type: String }
    },
    forpago: { type: Schema.ObjectId, ref: "Forpago" }
});

module.exports = mongoose.model('Ocupacion', ocupacionSchema); */

//Otro modelo
const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ocupacionSchema = new Schema({
        habitacion: { type: String, required:true },
        entrada: { type: Date, require:true },
        salida: { type: Date, require:true },
        nombre: { type: String, require:true },
        telefono: { type: String, require:true },
        comentarios: { type: String, required: true }
});

module.exports = mongoose.model('Ocupacion', ocupacionSchema);