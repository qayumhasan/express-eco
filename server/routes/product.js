const express = require('express');
const router = express.Router();
const productRoute = require('../controllers/productController')

router.get('/',productRoute.show_product);
router.get('/create',productRoute.create);

module.exports = router