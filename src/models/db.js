const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define:{
        timestamps: true
    },
    timezone: "-03:00",
})

sequelize.authenticate()
.then(function(){
    console.log("Sucesso na Conexão com banco de dados")
}).catch(function(error){
    console.log("Erro na Conexão com banco de dados", error)
}) 

module.exports = sequelize;