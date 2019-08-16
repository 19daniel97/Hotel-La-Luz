const mongoose = require ('mongoose');
const { Schema } = mongoose;

const infogenSchema = new Schema({
    informacion: { type: String, required: true },
    descripcion: { type: String, required: true },
    
});

module.exports = mongoose.model('Infogen', infogenSchema);