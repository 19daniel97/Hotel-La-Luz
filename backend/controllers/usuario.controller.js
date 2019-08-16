const Usuario = require('../models/usuario');
const passport = require('passport');
const _ = require('lodash');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res, next) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.createUsuario = async (req, res, next) => {
    const usuario = new Usuario({
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        usuario: req.body.usuario,
        password: req.body.contrasena
    });
    await usuario.save();
    res.json({status: 'Usuario creado'});
};

usuarioCtrl.getUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    res.json(usuario);
};

usuarioCtrl.editUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = {
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        usuario: req.body.usuario,
        password: req.body.contrasena
    };
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({status: 'Usuario actualizado'});
};

usuarioCtrl.deleteUsuario = async (req, res, next) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario eliminado'});
};

usuarioCtrl.register = (req, res, next) => {
    var user = new Usuario();
    user.nombre = req.body.nombre;
    user.puesto = req.body.puesto
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err) {
            res.send(doc);
            usuarioCtrl.authenticate;
        }
        else
        {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email address found.']);
            else
                return next(err);
        }
    });
}

usuarioCtrl.authenticate = (req, res, next) => {
    // call for password authentication
    passport.authenticate('local', (err, user, info) => {
        //error from passport middleware
        if(err) return res.status(400).json(err);
        //registered user
        else if(user) return res.status(200).json({ "token": user.generateJwt() });
        //unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

usuarioCtrl.userProfile = (req, res, next) => {
    User.findOne({_id: req._id},
        (err, user) => {
            if(!user)
                return res.status(404).json({ status: false, message: 'User record not found'});
            else 
                return res.status(200).json({ status: true, user: _.pick(user,['nombre', 'email']) });
        }
    );
}


module.exports = usuarioCtrl;