
const db = require('./models/db');
const express = require("express");
const app = express();


app.listen(3000, ()=>{
    console.log("API Runnig")
});

//https://www.luiztools.com.br/post/tutorial-de-crud-com-node-js-sequelize-e-mysql/