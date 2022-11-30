const fileUpload = require('express-fileupload');
const express = require('express');

// Express Router
const router = express.Router();

// Controllers
const adminController = require('../controllers/adminController');


router.post('/admin/write-projects-api', adminController.adminWriteProjectsApi);
router.use('/admin/form-projects-api', adminController.adminFormProjectsApi);

router.use('/admin/read-projects-api', adminController.adminReadProjectsApi);

router.use(fileUpload());
router.use('/admin/add-image', adminController.adminAddImage);
router.post('/admin/upload', adminController.adminUploadImage);

router.use('/admin/list-images', adminController.adminListImages);

router.use('/admin/dashboard', adminController.adminDashboard);


module.exports = router;
