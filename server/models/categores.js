const Sequelize = require('sequelize');
const sequlize = require('../config/db')

const Categores = sequlize.define('Categores', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
},
    {
        timestamps: true
    }
);

module.exports = Categores