const Atraccion = require('../models/atraccion');

const atraccionCtrl = {};

atraccionCtrl.getAtracciones = async (req, res, next) => {
    const atracciones = await Atraccion.find();
    res.json(atracciones);
};

atraccionCtrl.createAtraccion = async (req, res, next) => {
    const atraccion = new Atraccion({
        img: req.body.img,
        nombre: req.body.nombre,
        contenido: req.body.contenido
    });
    await atraccion.save();
    res.json({status: 'Atraccion Creada'});
};

atraccionCtrl.getAtraccion = async (req, res, next) => {
    const { id } = req.params;
    const atraccion = await Atraccion.findById(id);
    res.json(atraccion);
};

atraccionCtrl.editAtraccion = async (req, res, next) => {
    const { id } = req.params;
    const atraccion = {
        img: req.body.img,
        nombre: req.body.nombre,
        contenido: req.body.contenido
    };
    await Atraccion.findByIdAndUpdate(id, {$set: atraccion}, {new: true});
    res.json({status: 'Atraccion Actualizada'});
};

atraccionCtrl.deleteAtraccion = async (req, res, next) => {
    await Atraccion.findByIdAndRemove(req.params.id);
    res.json({status: 'Atraccion Eliminada'});
};

module.exports = atraccionCtrl;