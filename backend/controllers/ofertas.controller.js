const Oferta = require('../models/ofertas');
const ofertaCtrl = {};

ofertaCtrl.getOfertas = async (req, res) =>{
    const ofertas = await Oferta.find();
    res.json(ofertas);
};

ofertaCtrl.createOferta = async (req, res) =>{
    const oferta = new Oferta({
        name: req.body.name,
        characteristics: req.body.characteristics,
        prize: req.body.prize
    });
    await oferta.save();
    res.json({
        'status': 'Oferta Saved'
    });
};

ofertaCtrl.getOferta = async (req, res) =>{
    const oferta = await Oferta.findById(req.params.id);
    res.json(oferta);
};

ofertaCtrl.editOferta = async (req, res) =>{
    const { id } = req.params;
    const oferta = {
        name : req.body.name,
        characteristics: req.body.characteristics,
        prize: req.body.prize
    };
    await Oferta.findByIdAndUpdate(id, {$set: oferta}, {new: true});
    res.json({status: 'Oferta update'});
};

ofertaCtrl.deleteOferta = async (req, res) =>{
    await Oferta.findByIdAndRemove(req.params.id);
    res.json({status: "Oferta eliminado"});
};
module.exports = ofertaCtrl;