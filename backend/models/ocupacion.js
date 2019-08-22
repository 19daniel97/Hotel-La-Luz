
const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ocupacionSchema = new Schema({
        habitacion: { type: String, required:true },
        entrada: { type: Date, require:true },
        nombre: { type: String, require:true },
        telefono: { type: String, require:true },
});

module.exports = mongoose.model('Ocupacion', ocupacionSchema);