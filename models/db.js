const Sequelize = require('sequelize');
const sequelize = new Sequelize('cskin', 'root', 'senha', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
})

sequelize.authenticate()
.then(function(){
    console.log("Sucesso na Conexão com banco de dados")
}).catch(function(){
    console.log("Erro na Conexão com banco de dados")
})

module.exports = sequelize;