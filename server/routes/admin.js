const express = require('express');

// Controllers
const adminController = require('../controllers/adminController');

const router = express.Router();

router.use('/admin', adminController.adminDashboard);

module.exports = router;
