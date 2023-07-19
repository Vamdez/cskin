const Sequelize = require("sequelize");
const db = require("./db")
const Signup = db.define(
    'signup',
    {
        id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        nome:{
            type: Sequelize.ARRAY,
            allowNull: false
        },
        email:{
            type: Sequelize.ARRAY,
            allowNull: false
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false
        },
        define:{
            timestamps: true,
            timezone: "-03:00"
        }
})

module.exports(Signup);