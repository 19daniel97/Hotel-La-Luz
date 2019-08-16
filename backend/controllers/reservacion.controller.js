const Reservacion = require('../models/reservacion');

const reservacionCtrl = {};

reservacionCtrl.getReservaciones = async (req, res, next) => {
    const reservaciones = await Reservacion.find();
    res.json(reservaciones);
};

reservacionCtrl.createReservacion = async (req, res, next) => {
    const reservacion = new Reservacion({
        Nombre: req.body.Nombre,
        Telefono: req.body.Telefono,
        Email: req.body.Email,
        FechaEnt: req.body.FechaEnt,
        FechaSal: req.body.FechaSal,
        TipHab: req.body.TipHab,
        NumHab: req.body.NumHab,
        RegAlo: req.body.RegAlo
    
    });
    await reservacion.save();
    res.json({status: 'Reservacion creada'});
};

reservacionCtrl.getReservacion = async (req, res, next) => {
    const { id } = req.params;
    const reservacion = await Reservacion.findById(id);
    res.json(reservacion);
};

reservacionCtrl.editReservacion = async (req, res, next) => {
    const { id } = req.params;
    const reservacion = {
        Nombre: req.body.Nombre,
        Telefono: req.body.Telefono,
        Email: req.body.Email,
        FechaEnt: req.body.FechaEnt,
        FechaSal: req.body.FechaSal,
        TipHab: req.body.TipHab,
        NumHab: req.body.NumHab,
        RegAlo: req.body.RegAlo
    };
    await Reservacion.findByIdAndUpdate(id, {$set: reservacion}, {new: true});
    res.json({status: 'Reservacion actualizada'});
};

reservacionCtrl.deleteReservacion = async (req, res, next) => {
    await Reservacion.findByIdAndRemove(req.params.id);
    res.json({status: 'Reservacion Eliminada'});
};

module.exports = reservacionCtrl;