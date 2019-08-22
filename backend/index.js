require('./config/config');
require('./database');
require('./config/passportConfig');
require("dotenv").config();


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan');
const path = require ('path');

const rtsIndex = require('./routes/index.router');

var app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api',rtsIndex);

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static('./dist/hotel-la-luz'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/hotel-la-luz/backend/index.js'));
});

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

//Routes
app.use('/api/tipohab', require('./routes/tipohab.routes'));
app.use('/api/infogen', require('./routes/infogen.routes'));
app.use('/api/habitaciones', require('./routes/habitacion.routes'));
app.use('/api/atracciones', require('./routes/atraccion.routes'));
app.use('/api/forpago', require('./routes/forpago.routes'));
app.use('/api/usuario', require('./routes/usuario.routes'));
app.use('/api/paquetes', require('./routes/paquetes.route'));
app.use('/api/ofertas', require('./routes/ofertas.route'));
app.use('/api/contactos', require('./routes/contacto.routes'));
app.use('/api/politicas', require('./routes/politica.routes'));
app.use('/api/reservaciones', require('./routes/reservacion.routes'));
app.use('/api/ocupaciones', require('./routes/ocupacion.routes'));
// Starting the server
app.listen(process.env.PORT, () => console.log(`server started on port: ${process.env.PORT}`));