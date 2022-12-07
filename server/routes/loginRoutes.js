const express = require('express');

// Express Router
const router = express.Router();

// Controllers
const loginController = require('../controllers/loginController');

router.post('/login-validation', loginController.loginValidator);

router.use('/login', loginController.loginPage);

router.use('/', loginController.homePage);

module.exports = router;
