const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactoSchema = new Schema({
    img: { type: String, required: true},
    nombre: { type: String, required: true},
    email: { type: String, required: true },
    telefono: { type: Number, required: true},
    ocupacion: { type: String, required: true},
    infadi: { type: String, required: true }

});

module.exports = mongoose.model('Contacto', ContactoSchema);