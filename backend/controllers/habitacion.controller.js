const Habitacion = require('../models/habitacion');

const habitacionCtrl = {};

habitacionCtrl.getHabitaciones = async (req, res, next) => {
    const habitaciones = await Habitacion.find();
    res.json(habitaciones);
};

habitacionCtrl.createHabitacion = async (req, res, next) => {
    const habitacion = new Habitacion({
        numeroh: req.body.numeroh,
        numeroc: req.body.numeroc,
        precio: req.body.precio,
        tipoh: req.body.tipoh,
        descripcion: req.body.descripcion
    });
    await habitacion.save();
    res.json({status: 'Habitacion created'});
};

habitacionCtrl.getHabitacion = async (req, res, next) => {
    const { id } = req.params;
    const habitacion = await Habitacion.findById(id);
    res.json(habitacion);
};

habitacionCtrl.editHabitacion = async (req, res, next) => {
    const { id } = req.params;
    const habitacion = {
        numeroh: req.body.numeroh,
        numeroc: req.body.numeroc,
        precio: req.body.precio,
        tipoh: req.body.tipoh,
        descripcion: req.body.descripcion
    };
    await Habitacion.findByIdAndUpdate(id, {$set: habitacion}, {new: true});
    res.json({status: 'Habitacion Updated'});
};

habitacionCtrl.deleteHabitacion = async (req, res, next) => {
    await Habitacion.findByIdAndRemove(req.params.id);
    res.json({status: 'Habitacion Deleted'});
};

module.exports = habitacionCtrl;