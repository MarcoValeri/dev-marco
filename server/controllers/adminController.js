const path = require('path');
const pathFrontEnd = path.join(__dirname, '../../', 'dev-marco/public/images/');

// Models
const Project = require('../models/Project');

exports.adminDashboard = (req, res, next) => {

    res.render('admin-dashboard', {
        pageTitle: 'Admin Dashboard'
    });

};

exports.adminReadProjectsApi = (req, res, next) => {

    /**
     * Read JSON API file
     */
    const project = new Project('./api/projects.json');

     res.render('admin-read-projects-api', {
         pageTitle: 'Admin Projects API',
         projectsApi: project.read()
     });

}

exports.adminWriteProjectsApi = (req, res, next) => {

    /**
     * Write JSON API file
     */
    const project = new Project('./api/projects.json');
    project.save(req.body.projectsApi);

     res.render('admin-write-projects-api', {
        pageTitle: 'Admin Projects API'
     });

}

exports.adminFormProjectsApi = (req, res, next) => {

    res.render('admin-form-projects-api', {
        pageTitle: 'Admin Form Projects API'
    });

}

exports.adminAddImage = (req, res, next) => {

    console.log(req.files);

    res.render('admin-add-image', {
        pageTitle: 'Admin Add Image'
    });

}

exports.adminUploadImage = (req, res, next) => {

    const { image } = req.files;

    if (!image) return res.sendStatus(400);

    image.mv(pathFrontEnd + image.name);

    res.sendStatus(200);

}