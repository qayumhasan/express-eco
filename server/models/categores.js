const Sequelize = require('sequelize');
const sequlize = require('../config/db');
const SubCategorey = require('./sub_categores');


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