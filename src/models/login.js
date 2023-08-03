const Sequelize = require("sequelize");
const db = require("./db")
const Signup = db.define(
    'signup',
    {
        id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        email:{

            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false
        }
})
//sync({ force: true }) ==> Force to create a table, dropping if it alerady existed
//sync({ alter: true }) ==> Alters the columns and data types of an existing table
Signup.sync() //Create table if not existed
    .then(() => {
        console.log('Tabela criada com sucesso ou já existente.');
    })
    .catch((error) => {
        console.error('Erro ao criar a tabela:', error);
    });

module.exports = Signup;
