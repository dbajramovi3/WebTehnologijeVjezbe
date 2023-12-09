const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const usersData = fs.readFileSync('users.csv', 'utf8').split('\n');
  const currentTime = new Date().toISOString();

  let responseXML = '<loginResponse>';
  responseXML += `<timestamp>${currentTime}</timestamp>`;

  const user = usersData.find((userData) => {
    const [storedUsername, storedHashedPassword] = userData.split(',').map((item) => item.split(':')[1].trim());
    const hashFunction = (char) => (char.charCodeAt(0) + 55) % 16;

    return username === storedUsername && crypto.createHash('md5').update(password.split('').map(hashFunction).join('')).digest('hex') === storedHashedPassword;
  });

  if (user) {
    const [, name, surname] = user.split(',').map((item) => item.split(':')[1].trim());
    responseXML += `<status>success</status>`;
    responseXML += `<user><name>${name}</name><surname>${surname}</surname></user>`;
  } else {
    responseXML += `<status>failure</status>`;
    responseXML += `<username>${username}</username>`;
  }

  responseXML += '</loginResponse>';
  res.send(responseXML);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});