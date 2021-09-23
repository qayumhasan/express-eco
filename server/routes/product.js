const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
var multer  = require('multer');
const path = require('path');



const FILE_UPLOAD ='./server/public/uploads/product';

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, FILE_UPLOAD)
  },

  filename: function (req, file, cb) {
  	const fileExt = path.extname(file.originalname);
  	const filename = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, filename + fileExt);
  }
});



var upload = multer({
	storage: storage,
	limits:{
		fileSize:1000000,
	},
	fileFilter:(req,file,cb) =>{
		if(
			file.mimetype =='image/png'||
			file.mimetype =='image/jpg'||
			file.mimetype =='image/jpeg'
			){
			cb(null,true);	
		}else{
			cb(new Error('Only .jpg,.png, or .jpeg formate allowed!'))
		}
		
	},
	onError : function(err, next) {
      console.log('error', err);
      next(err);
    }
});





router.get('/',productController.show_product);
router.get('/create',productController.create);
router.post('/store',upload.single('product_image'),productController.store);

module.exports = router