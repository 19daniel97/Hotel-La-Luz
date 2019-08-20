const Ocupacion = require('../models/ocupacion');
const Habitacion = require('../models/habitacion');

const ocupacionCtrl = {};
const habitacionCtrl = {};

ocupacionCtrl.getOcupaciones = async (req, res, next) => {
    const ocupaciones = await Ocupacion.find();
    res.json(ocupaciones);
};

ocupacionCtrl.getOcupacion = async (req, res, next) => {
    const { id } = req.params;
    const ocupacion = await Ocupacion.findById(id);
    res.json(ocupacion);
};

ocupacionCtrl.editOcupacion = async (req, res, next) => {
    const { id } = req.params;
    const ocupacion = {
        habitacion: req.body.habitacion,
        adultos: req.body.adultos,
        salida: req.body.salida,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        comentarios: req.body.comentarios,
    };
    await Ocupacion.findByIdAndUpdate(id, {$set: ocupacion}, {new: true});
    res.json({status: 'Datos de ocupación actualizados'});
};

ocupacionCtrl.deleteOcupacion = async (req, res, next) => {
    await Ocupacion.findByIdAndRemove(req.params.id);
    res.json({status: 'Datos de ocupación eliminados'});
};

//Verificar si la habitacion y fecha esta ocupada
ocupacionCtrl.createOcupacion = async (req, res, next) => {
    //try {
       
        /*let entrada = req.body.entrada
        let salida = req.body.salida
        await db.coleccion('Ocupacion').find({
            
            "$and": [{ "$nor": [ "entrada" : {"$gte" : new Date(entrada) }},
                    {"salida" : {"$lte" : new Date(salida) }} ]
                //{"habitacion" : {"$eq": req.body.habitacion  }}, {"habitacion":{ $exists:false }}
            ]
        
        })
        next();*/
        const ocupacion = new Ocupacion({
            habitacion: req.body.habitacion,
            entrada: req.body.entrada,
            salida: req.body.salida,
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            comentarios: req.body.comentarios,
        });
        await ocupacion.save();
        res.json({status: 'Tipo de habitación creada'});
        
    /*} catch (error) {
        console.log("La habitación está ocupada")
        res.json({status: 'Habitacion Ocupada'});
    } */
    
};

module.exports = ocupacionCtrl;