const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dodajte endpoint za prikaz forme za unos
app.get('/unos', function(req, res) {
    const form = `
        <form action="/unos" method="post">
            <label for="ime">Ime:</label>
            <input type="text" name="ime" required><br>

            <label for="prezime">Prezime:</label>
            <input type="text" name="prezime" required><br>

            <label for="adresa">Adresa:</label>
            <input type="text" name="adresa" required><br>

            <label for="broj_telefona">Broj telefona:</label>
            <input type="text" name="broj_telefona" required><br>

            <input type="submit" value="Submit">
        </form>
    `;
    res.send(form);
});

// Dodajte POST endpoint za dodavanje zapisa u imenik i prikaz HTML tabele
app.post('/unos', function(req, res) {
    let tijelo = req.body;
    let novaLinija = "\n" + tijelo['ime'] + "," + tijelo['prezime'] +
        "," + tijelo['adresa'] + "," + tijelo['broj_telefona'];
    fs.appendFile('imenik.txt', novaLinija, function(err) {
        if (err) throw err;

        // Čitanje sadržaja iz datoteke i prikaz u HTML tabeli
        fs.readFile('imenik.txt', 'utf8', function(err, data) {
            if (err) throw err;

            const linije = data.split('\n');
            let tabela = '<table border="1"><tr><th>Ime</th><th>Prezime</th><th>Adresa</th><th>Broj Telefona</th></tr>';
            
            linije.forEach(function(linija) {
                if (linija !== "") {
                    const podaci = linija.split(',');
                    tabela += `<tr><td>${podaci[0]}</td><td>${podaci[1]}</td><td>${podaci[2]}</td><td>${podaci[3]}</td></tr>`;
                }
            });

            tabela += '</table>';
            res.send(tabela);
        });
    });
});

app.listen(8085, function() {
    console.log('Server pokrenut na portu 8085');
});
