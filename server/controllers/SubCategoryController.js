const Category = require('../models/categores');

const SubCategorey =require('../models/sub_categores')

module.exports.sub_category_index=async(req,res)=>{
    let SubCategores = [];
    await SubCategorey.findAll({
        include: {
            model: Category,
            as: 'categores'
          }
    }).then((subCat)=>{
        SubCategores =subCat;

        res.status(200).json({
            msg:'Success',
            data:subCat
        })
    })
    // res.render('./sub_category/index',{SubCategores});
}
module.exports.sub_category_create=async(req,res)=>{

    let categores = [];
    await Category.findAll({}).then((cat)=>{
        categores =cat;
    })
    res.render('./sub_category/create',{categores});
}

module.exports.sub_category_store=async(req,res)=>{
    await SubCategorey.create({
        'sub_cat_name':req.body.sub_cat_name,
        'cat_id':req.body.cat_id,
    }).then(()=>{
        res.redirect('/sub-categores');
    })
    
}