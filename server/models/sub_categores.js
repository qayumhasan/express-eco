const Sequelize = require('sequelize');
const sequelize = require('../config/db')
const Category = require('../models/categores');

const SubCategorey = sequelize.define('sub_category',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sub_cat_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    cat_id:{
        type:Sequelize.STRING,
        allowNull:false,
    }
}, {
    timestamps: true
})


module.exports = SubCategorey