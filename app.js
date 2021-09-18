//Import Packages

const express = require('express');
const cors = require('cors');

const route = require('./Router/index');
const sequelize = require('./connection');

const app = express();

const host = 'localhost';
const port = 4040;

//Cors - Cross Origin Resource Sharing

app.use(cors());
app.options('*' , cors());

app.use(express.json());
sequelize.sync();

app.use('/' , router);

app.listen(port, host, () => {
    console.log('Server is Running at ${host}:${port}')
});