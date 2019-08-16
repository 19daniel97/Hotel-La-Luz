const Politica = require('../models/politica');

const politicaCtrl = {};

politicaCtrl.getPoliticas = async (req, res, next) => {
    const politicas = await Politica.find();
    res.json(politicas);
};

politicaCtrl.createPolitica = async (req, res, next) => {
    const politica = new Politica({
        deposito: req.body.deposito,
        cancelacion: req.body.cancelacion
    });
    await politica.save();
    res.json({status: 'Politica Creada'});
};

politicaCtrl.getPolitica = async (req, res, next) => {
    const { id } = req.params;
    const politica = await Politica.findById(id);
    res.json(politica);
};

politicaCtrl.editPolitica = async (req, res, next) => {
    const { id } = req.params;
    const politica = {
        deposito: req.body.deposito,
        cancelacion: req.body.cancelacion
    };
    await Politica.findByIdAndUpdate(id, {$set: politica}, {new: true});
    res.json({status: 'Politica Actualizada'});
};

politicaCtrl.deletePolitica = async (req, res, next) => {
    await Politica.findByIdAndRemove(req.params.id);
    res.json({status: 'Politica Eliminada'});
};

module.exports = politicaCtrl;