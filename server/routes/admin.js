const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')
const {isAuthenticated} = require('../middleware/IsAuthenticated');

router.get('/',isAuthenticated,adminController.dashboard);
router.get('/login',adminController.login);
router.get('/register',adminController.register);
router.post('/register',adminController.storeUser);
router.post('/login',adminController.loginUser);
router.get('/logout',adminController.logout);

module.exports = router