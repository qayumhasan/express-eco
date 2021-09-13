const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const categoresValidator = require('../validator/categoresValidator');

router.get('/',categoryController.categoryIndex);
router.get('/create',categoryController.categoryCreate);
router.post('/store',categoresValidator,categoryController.categoryStore);

router.get('/edit/:id',categoryController.categoryEdit);

router.post('/update/:id',categoryController.categoryUpdate);
router.post('/show/:id',categoryController.categoryShow);
router.get('/delete/:id',categoryController.categoryDelete);


module.exports = router