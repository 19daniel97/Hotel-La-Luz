const mongoose = require('mongoose');
const { Schema } = mongoose;

const PoliticaSchema = new Schema({
    deposito: { type: String, required: true },
    cancelacion: { type: String, required: true }
});

module.exports = mongoose.model('Politica', PoliticaSchema);