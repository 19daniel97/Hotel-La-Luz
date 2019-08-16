const Forpago = require('../models/forpago');

const forpagoCtrl = {};

forpagoCtrl.getForpagos = async (req, res, next) => {
    const forpagos = await Forpago.find();
    res.json(forpagos);
};

forpagoCtrl.createForpago = async (req, res, next) => {
    const forpago = new Forpago({
        forpago: req.body.forpago,
        descripcion: req.body.descripcion,
    });
    await forpago.save();
    res.json({status: 'Forma de pago creada'});
};

forpagoCtrl.getForpago = async (req, res, next) => {
    const { id } = req.params;
    const forpago = await Forpago.findById(id);
    res.json(forpago);
};

forpagoCtrl.editForpago = async (req, res, next) => {
    const { id } = req.params;
    const forpago = {
        forpago: req.body.forpago,
        descripcion: req.body.descripcion
    };
    await Forpago.findByIdAndUpdate(id, {$set: forpago}, {new: true});
    res.json({status: 'Froma de pago actualizada'});
};

forpagoCtrl.deleteForpago = async (req, res, next) => {
    await Forpago.findByIdAndRemove(req.params.id);
    res.json({status: 'Forma de pago eliminada'});
};

module.exports = forpagoCtrl;