const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hola Mundo! Probando el pipeline from beginning to end!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
