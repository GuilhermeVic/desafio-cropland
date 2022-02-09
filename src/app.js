const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = 3000
const db = require('./Models/db');
const Registro = require('./Models/RegistrosModel');

app.use(express.json());

app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true
}));

app.use(require('./Routes/RegistroRoutes'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})