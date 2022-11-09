const fileUpload = require('express-fileupload');
const express = require('express');

// Controllers
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/admin/write-projects-api', adminController.adminWriteProjectsApi);
router.use('/admin/form-projects-api', adminController.adminFormProjectsApi);

router.use('/admin/read-projects-api', adminController.adminReadProjectsApi);

router.use(fileUpload());
router.use('/admin/add-image', adminController.adminAddImage);
router.post('/admin/upload', adminController.adminUploadImage);

router.use('/admin/dashboard', adminController.adminDashboard);


module.exports = router;
