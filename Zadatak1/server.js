const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  // Proveri da li je zahtev GET
  if (req.method === 'GET' && req.url === '/') {
    // Čitanje sadržaja datoteke "imenik.txt"
    fs.readFile('imenik.txt', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      } else {
        // Pretvaranje CSV podataka u JSON format
        const lines = data.split('\n');
        const result = lines.map((line) => {
          const [ime, prezime, adresa, broj_telefona] = line.split(',');
          return {
            ime,
            prezime,
            adresa,
            broj_telefona,
          };
        });

        // Slanje odgovora u JSON formatu
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      }
    });
  } else {
    // Odgovor za nepodržane putanje
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// Pokretanje servera na portu 8080
const port = 8080;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
