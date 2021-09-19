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

Categores.associate = models =>{
    Categores.hasOne(models.SubCategorey,{
        foreignKey:cat_id
    })
}


module.exports = Categores