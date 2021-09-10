const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const categoresValidator = require('../validator/categoresValidator');

router.get('/categores',categoryController.categoryIndex);
router.get('/categores/create',categoryController.categoryCreate);
router.post('/categores/store',categoresValidator,categoryController.categoryStore);
router.post('/categores/update/:id',categoryController.categoryUpdate);
router.post('/categores/show/:id',categoryController.categoryShow);
router.get('/categores/delete/:id',categoryController.categoryDelete);


module.exports = router