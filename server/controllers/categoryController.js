const Category = require('../models/categores')

module.exports.categoryIndex =async(req,res)=>{
    const categores =await Category.findAll({
        order: [
            ['id', 'DESC'],
        ],
    }).then((categores)=>{
        res.render('category/index',{
            categores
        });
    })
    req.flash('info', 'Flash is back dfgsgdg!')

    console.log(req.flash('info'))
}

module.exports.categoryCreate = async(req,res)=>{
    res.render('category/create')
}


module.exports.categoryStore = async(req,res)=>{
   
    const category =await Category.create({
        name:req.body.name
    }).then(()=>{
       
        res.redirect('/categores');
    });
   
    
}

module.exports.categoryUpdate = (req,res)=>{
    const category = Category.update({name:req.body.name},{
        where:{
            id:req.params.id
        }
    }).then(async()=>{
        res.redirect('/categores')
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
        category.destroy(req.params.id).then(()=>{
            res.redirect('back');
        });
    })
    
}

module.exports.categoryEdit = async (req,res)=>{
    const id =req.params.id;
    await Category.findByPk(id)
            .then((cat)=>{
                res.render('category/edit',{category:cat,id:id});
            })
    
}