const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Kreiranje MySQL konekcije
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'imenik'
});

// Povezivanje na bazu podataka
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    process.exit(1); // Izlaz iz aplikacije u slučaju greške
  }
  console.log('Connected to database');
});

// Definiranje rute za /imenik
app.get('/imenik', (req, res) => {
  // Izvršavanje SELECT upita
  connection.query('SELECT * FROM imenik', (err, rows) => {
    if (err) {
      console.error('Error executing SELECT query:', err.message);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Kreiranje HTML tabele
    let htmlTable = '<table border="1"><tr><th>Ime i Prezime</th><th>Adresa</th><th>Broj Telefona</th></tr>';
    rows.forEach((row) => {
      htmlTable += `<tr><td>${row.ime_prezime}</td><td>${row.adresa}</td><td>${row.broj_telefona}</td></tr>`;
    });
    htmlTable += '</table>';

    // Slanje HTML odgovora
    res.send(htmlTable);
  });
});

// Slušanje na određenom portu
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
