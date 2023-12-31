const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const sequelize = require('./baza.js');
const express = require("express");
const app = express();
const Imenik = require('./imenik.js')(sequelize, Sequelize);

// Synchronizacija modela s bazom podataka
sequelize.sync({ force: true }).then(() => {
    console.log('Baza podataka i tablice su stvorene!');
}).catch(err => {
    console.error('Neuspješna sinhronizacija baze podataka:', err);
});

// Postavke Express aplikacije
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Definisanje ruta i logika rute /imenik
app.get('/imenik', (req, res) => {
    Imenik.findAll().then(imenik => {
        res.json(imenik);
    }).catch(err => {
        console.error('Greška prilikom dohvaćanja podataka iz baze:', err);
        res.status(500).send('Internal Server Error');
    });
});

// Pokretanje servera
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
