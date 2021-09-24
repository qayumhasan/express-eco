const Sequelize = require('sequelize');
const sequelize = require('../config/db')

const User = sequelize.define('users', {

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

    email: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
}, {
    timestamps: true
});

module.exports = User