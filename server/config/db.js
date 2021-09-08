const Sequelize = require('sequelize');
const sequelize = new Sequelize('exp_eco','root','', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports =sequelize;