const fs = require('fs');

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
