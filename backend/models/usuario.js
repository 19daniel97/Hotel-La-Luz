const mongoose = require ('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    puesto: { type: String, required: true },
    email: {type: String,required: 'Email can/`t be empty',unique: true},
    usuario: { type: String, required: false },
    password: { type: String, required: true, minlength: [4,'contraseña no puede ser menor a 4 caracteres'] },
    saltSecret: String
});

//Custom validation for email
usuarioSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

//Events
usuarioSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

usuarioSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

usuarioSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

module.exports = mongoose.model('User', usuarioSchema);