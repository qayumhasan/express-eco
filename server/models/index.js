const Categorey = require('./categores');
const SubCategory = require('./sub_categores')


module.exports.relationwith=()=>{
    
    SubCategory.belongsTo(Categorey,{constraints:true,onDelete:'CASCADE'})
    Categorey.hasMany(SubCategory)
}