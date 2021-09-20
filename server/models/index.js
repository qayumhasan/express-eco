const Categorey = require('./categores');
const SubCategory = require('./sub_categores');
const Product = require('./products');

module.exports.relationwith=()=>{
    SubCategory.belongsTo(Categorey,{constraints:true,onDelete:'CASCADE'});
    Categorey.hasMany(SubCategory);
    Product.belongsTo(Categorey,{foreignKey: 'cat_id', targetKey: 'id'});
    Product.belongsTo(SubCategory,{foreignKey: 'sub_cat_id', targetKey: 'id'});

};