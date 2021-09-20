const Sequelize = require('sequelize');
const sequelize = require('../config/db')

const Products = sequelize.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    cat_id: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    timestamps: true
});

module.exports = Products