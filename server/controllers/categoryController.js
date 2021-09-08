const Category = require('../models/categores')

module.exports.categoryIndex =async(req,res)=>{
    const categores =await Category.findAll({})
    res.status(200).json(categores);
}

module.exports.categoryCreate = async(req,res)=>{
    const category =await Category.create({
        name:req.body.name
    });
    res.status(200).json(category);
}

module.exports.categoryUpdate = (req,res)=>{
    const category = Category.update({name:req.body.name},{
        where:{
            id:req.params.id
        }
    }).then(async()=>{
        await res.status(200).json(category)
    })
}

module.exports.categoryShow = async(req,res)=>{
    const category = await Category.findAll({
        where:{
            id:req.params.id
        }
    }).then((result)=>{
        res.status(200).json(result);
    })
}
module.exports.categoryDelete = async (req,res)=>{
    await Category.findByPk(req.params.id).then(category=>{
        category.destroy(req.params.id);
    })
    res.status(200);
}