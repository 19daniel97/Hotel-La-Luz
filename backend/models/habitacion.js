const mongoose = require('mongoose');
const { Schema } = mongoose;

const HabitacionSchema = new Schema({
    numeroh: { type: Number, required: true},
    numeroc: { type: Number, required: true },
    precio: { type: Number, required: true },
    tipoh: { type: String, required: true},
    descripcion: { type: String, required: true }
});

module.exports = mongoose.model('Habitacion', HabitacionSchema);