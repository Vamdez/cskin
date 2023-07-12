async()=>{
const db = require('./models/db');
const Pattern_Table = require("./models/patterns");
const Skin_Table = require("./models/skins");
try{
    const resultado = await db.sync();
    console.log(resultado);
}
catch(error){
    console.log(error);
}
};

const express = require("express");
const app = express();


app.listen(3000, ()=>{
    console.log("API Runnig")
});

//https://www.luiztools.com.br/post/tutorial-de-crud-com-node-js-sequelize-e-mysql/