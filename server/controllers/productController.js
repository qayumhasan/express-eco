const Categores = require('../models/categores');
const SubCategorey = require('../models/sub_categores');
const Product = require('../models/products');

module.exports.show_product = async(req,res)=>{
	await Product.findAll({
		  include: [
		  {model: Categores},
		  {model: SubCategorey}
		  ]
		  
		  
	}).then((products)=>{
		// res.send(products);
		res.render('./products/index',{products});	
	})
}

module.exports.create = async(req,res)=>{

    const categores =await Categores.findAll({}).then((cat)=>{
        return cat;
    });
    const sub_categores =await SubCategorey.findAll({}).then(sub_cat=>{
        return sub_cat;
    })
    res.render('./products/create',{categores,sub_categores});
}

module.exports.store=async (req,res)=>{
    const {name,cat_id,sub_cat_id,brand,description} = req.body;
    
    await Product.create({
    	name:name,
    	cat_id:cat_id,
    	sub_cat_id:sub_cat_id,
    	brand:brand,
    	description:description,
        product_image:req.file.filename,

    }).then((result) =>{
    	res.redirect('/products');
    })
    
   
}