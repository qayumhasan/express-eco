const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController')

router.get('/categores',categoryController.categoryIndex);
router.post('/categores/create',categoryController.categoryCreate);
router.post('/categores/update/:id',categoryController.categoryUpdate);
router.post('/categores/show/:id',categoryController.categoryShow);
router.post('/categores/delete/:id',categoryController.categoryDelete);


module.exports = router