require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sql6439874','sql6439874','3ghWPVJwqs', {
    host: 'sql6.freesqldatabase.com',
    dialect: 'mysql'
});

module.exports =sequelize;