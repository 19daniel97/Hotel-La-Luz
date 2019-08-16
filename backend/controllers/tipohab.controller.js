const Tipohab = require('../models/tipohab');

const tipohabCtrl = {};

tipohabCtrl.getTiposhab = async (req, res, next) => {
    const tiposhab = await Tipohab.find();
    res.json(tiposhab);
};

tipohabCtrl.createTipohab = async (req, res, next) => {
    const tipohab = new Tipohab({
        tipohab: req.body.tipohab,
        descripcion: req.body.descripcion,
    });
    await tipohab.save();
    res.json({status: 'Tipo de habitación creada'});
};

tipohabCtrl.getTipohab = async (req, res, next) => {
    const { id } = req.params;
    const tipohab = await Tipohab.findById(id);
    res.json(tipohab);
};

tipohabCtrl.editTipohab = async (req, res, next) => {
    const { id } = req.params;
    const tipohab = {
        tipohab: req.body.tipohab,
        descripcion: req.body.descripcion
    };
    await Tipohab.findByIdAndUpdate(id, {$set: tipohab}, {new: true});
    res.json({status: 'Tipo de habitación actualizado'});
};

tipohabCtrl.deleteTipohab = async (req, res, next) => {
    await Tipohab.findByIdAndRemove(req.params.id);
    res.json({status: 'Tipo de habitación eliminado'});
};

module.exports = tipohabCtrl;