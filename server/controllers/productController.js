const Categores = require('../models/categores');
const SubCategorey = require('../models/sub_categores');

module.exports.show_product = (req,res)=>{

    res.render('./products/index');
}

module.exports.create = (req,res)=>{

    const categores =Categores.findAll({}).then((cat)=>{
        // return cat;
        res.json({sub_cat});
    });
    const sub_categores = SubCategorey.findAll({}).then(sub_cat=>{
        // return sub_cat;
        res.json({sub_cat});
    })
    // return res.json(categores,sub_categores);
    res.json({sub_categores});

    // res.render('./products/create',{categores,sub_categores});
}