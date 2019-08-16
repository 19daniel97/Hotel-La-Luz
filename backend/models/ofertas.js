const mongoose = require('mongoose');
const { Schema } = mongoose;

const OfertaSchema = new Schema({
    name: {type: String, required: true},
    characteristics: {type: String, required: true},
    prize: {type: Number, required: true}
});

module.exports = mongoose.model('Ofertas', OfertaSchema);