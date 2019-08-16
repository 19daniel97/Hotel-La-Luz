const Infogen = require('../models/infogen');

const infogenCtrl = {};

infogenCtrl.getInfogens = async (req, res, next) => {
    const infogens = await Infogen.find();
    res.json(infogens);
};

infogenCtrl.createInfogen = async (req, res, next) => {
    const infogen = new Infogen({
        informacion: req.body.informacion,
        descripcion: req.body.descripcion

    });
    await infogen.save();
    res.json({status: 'Información general creada'});
};

infogenCtrl.getInfogen = async (req, res, next) => {
    const { id } = req.params;
    const infogen = await Infogen.findById(id);
    res.json(infogen);
};

infogenCtrl.editInfogen = async (req, res, next) => {
    const { id } = req.params;
    const infogen = {
        informacion: req.body.informacion,
        descripcion: req.body.descripcion
    };
    await Infogen.findByIdAndUpdate(id, {$set: infogen}, {new: true});
    res.json({status: 'Información general actualizada'});
};

infogenCtrl.deleteInfogen = async (req, res, next) => {
    await Infogen.findByIdAndRemove(req.params.id);
    res.json({status: 'Información general eliminada'});
};

module.exports = infogenCtrl;