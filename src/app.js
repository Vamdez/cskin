require('dotenv').config();
const express = require("express");
const routes = require("./routes.js");
const bodyParser = require('body-parser');


const server = express();

server.use('/public', express.static('public', {
    extensions: ['html','css','js']
}));
server.use(bodyParser.json());
server.use(routes);


module.exports = server;