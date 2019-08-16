const mongoose = require('mongoose');
const { Schema } = mongoose;

const PaqueteSchema = new Schema({
    name: {type: String, required: true},
    characteristics: {type: String, required: true},
    prize: {type: Number, required: true}
});

module.exports = mongoose.model('Paquetes', PaqueteSchema);