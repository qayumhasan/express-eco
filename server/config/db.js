const Sequelize = require('sequelize');
const sequelize = new Sequelize('exp_eco1','root','', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports =sequelize;