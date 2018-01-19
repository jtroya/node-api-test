const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ message: 'hola' });
});

app.listen(5000);