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
        type: Sequelize.INTEGER,
    },
    sub_cat_id: {
        type: Sequelize.INTEGER,
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    product_image: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
}, {
    timestamps: true
});

module.exports = Products