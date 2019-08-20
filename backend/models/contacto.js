const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactoSchema = new Schema({
   
    nombre: { type: String, required: true},
    email: { type: String, required: true },
    
    infadi: { type: String, required: true }

});

module.exports = mongoose.model('Contacto', ContactoSchema);