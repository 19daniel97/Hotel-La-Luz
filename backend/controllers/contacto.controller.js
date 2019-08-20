const Contacto = require('../models/contacto');

const contactoCtrl = {};

contactoCtrl.getContactos = async (req, res, next) => {
    const contactos = await Contacto.find();
    res.json(contactos);
};

contactoCtrl.createContacto = async (req, res, next) => {
    const contacto = new Contacto({
       
        nombre: req.body.nombre,
        email: req.body.email,
       
        infadi: req.body.infadi
    });
    await contacto.save();
    res.json({status: 'Mensaje Creada'});
};

contactoCtrl.getContacto = async (req, res, next) => {
    const { id } = req.params;
    const contacto = await Contacto.findById(id);
    res.json(contacto);
};

contactoCtrl.editContacto = async (req, res, next) => {
    const { id } = req.params;
    const contacto = {
       
        nombre: req.body.nombre,
        email: req.body.email,
    
        infadi: req.body.infadi
    };
    await Contacto.findByIdAndUpdate(id, {$set: contacto}, {new: true});
    res.json({status: 'Contacto Actualizado'});
};

contactoCtrl.deleteContacto = async (req, res, next) => {
    await Contacto.findByIdAndRemove(req.params.id);
    res.json({status: 'Contacto Eliminado'});
};

module.exports = contactoCtrl;