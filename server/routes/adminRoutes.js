const express = require('express');

// Controllers
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/admin/write-projects-api', adminController.adminWriteProjectsApi);
router.use('/admin/read-projects-api', adminController.adminReadProjectsApi);
router.use('/admin/form-projects-api', adminController.adminFormProjectsApi);
router.use('/admin/dashboard', adminController.adminDashboard);

module.exports = router;
