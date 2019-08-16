const mongoose = require ('mongoose');
const { Schema } = mongoose;

const tipohabSchema = new Schema({
    tipohab: { type: String, required: true },
    descripcion: { type: String, required: true }
});

module.exports = mongoose.model('Tipohab', tipohabSchema);