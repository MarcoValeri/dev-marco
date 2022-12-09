const express = require('express');

// Express Router
const router = express.Router();

// Controllers
const apiController = require('../controllers/apiController');

router.use('/api/projects', apiController.apiProjects);

module.exports = router;
