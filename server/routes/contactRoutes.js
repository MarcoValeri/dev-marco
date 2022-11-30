const express = require('express');

// Express Router
const router = express.Router();

// Controllers
const contactController = require('../controllers/contactController');

router.post('/contact', contactController.sendMessage);

module.exports = router;
