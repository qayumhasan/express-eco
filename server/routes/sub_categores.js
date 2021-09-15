const SubCategoryController = require('../controllers/SubCategoryController');

const express = require('express');
const router = express.Router();

router.get('/',SubCategoryController.sub_category_index);
router.get('/create',SubCategoryController.sub_category_create);
router.post('/store',SubCategoryController.sub_category_store);

module.exports=router;