const db = require("./db");
const Sequelize = require("sequelize");

const Skin_Table = db.define('skin', {
    id:{
        type: Sequelize.INTEGER,
        autoincrement: true,
        allownull: false,
        unique: true,
        primarykey: true
    },
    name_skin:{
        type: Sequelize.STRING,
        unique: true,
        allownull: false
    },
    type_skin:{
        type: Sequelize.STRING,
        allownull: false
    },
    define: {
        timestamps: true,
    }
});

module.exports = Skin_Table;