const Paquete = require('../models/paquetes');
const paqueteCtrl = {};

paqueteCtrl.getPaquetes = async (req, res) =>{
    const paquetes = await Paquete.find();
    res.json(paquetes);
};

paqueteCtrl.createPaquete = async (req, res) =>{
    const paquete = new Paquete({
        name: req.body.name,
        characteristics: req.body.characteristics,
        prize: req.body.prize
    });
    await paquete.save();
    res.json({
        'status': 'Paquete Saved'
    });
};

paqueteCtrl.getPaquete = async (req, res) =>{
    const paquete = await Paquete.findById(req.params.id);
    res.json(paquete);
};

paqueteCtrl.editPaquete = async (req, res) =>{
    const { id } = req.params;
    const paquete = {
        name : req.body.name,
        characteristics: req.body.characteristics,
        prize: req.body.prize
    };
    await Paquete.findByIdAndUpdate(id, {$set: paquete}, {new: true});
    res.json({status: 'Paquete update'});
};

paqueteCtrl.deletePaquete = async (req, res) =>{
    await Paquete.findByIdAndRemove(req.params.id);
    res.json({status: "Paquete eliminado"});
};
module.exports = paqueteCtrl;