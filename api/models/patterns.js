const db = require("./db");
const Sequelize = require("sequelize");
const Skin_Table = require("./skins")

const Pattern_Table = db.define('patterns',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true,
        unique: true,
    },
    valuable:{
        type: Sequelize.INTEGER,
        allownull: true,
    },
    image_url:{
        type: Sequelize.STRING,
        allownull: false,
    },
    pattern:{
        type: Sequelize.INTEGER,
        allownull: false,
        unique: true,
    },
    skin_id:{
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
            model: Skin_Table,
            key: 'id',
        }
    },
    define: {
        timestamps: true,
    }
})

module.exports = Pattern_Table;