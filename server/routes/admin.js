const express = require('express');

// Controllers
const adminController = require('../controllers/adminController');

const router = express.Router();

router.use('/admin/write-projects-api', adminController.adminWriteProjectsApi);
router.use('/admin/read-projects-api', adminController.adminDashboard);
router.use('/admin/dashboard', adminController.adminDashboard);

module.exports = router;
