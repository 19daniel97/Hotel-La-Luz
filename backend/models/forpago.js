const mongoose = require ('mongoose');
const { Schema } = mongoose;

const forpagoSchema = new Schema({
    forpago: { type: String, required: true },
    descripcion: { type: String, required: true }
});

module.exports = mongoose.model('Forpago', forpagoSchema);