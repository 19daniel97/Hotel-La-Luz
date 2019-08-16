const mongoose = require('mongoose');
const { Schema } = mongoose;

const AtraccionSchema = new Schema({
    img: { type: String, required: true},
    nombre: { type: String, required: true},
    contenido: { type: String, required: true }
});

module.exports = mongoose.model('Atraccion', AtraccionSchema);