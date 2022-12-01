const fs = require('fs');
const path = require('path');
const pathBackEnd = path.join(__dirname, '../', '/public/images/');

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

    res.render('admin-add-image', {
        pageTitle: 'Admin Add Image'
    });

}

exports.adminUploadImage = (req, res, next) => {

    const { image } = req.files;

    if (!image) return res.sendStatus(400);

    image.mv(pathBackEnd + image.name);

    res.sendStatus(200);

}

exports.adminListImages = async (req, res, next) => {

    try {
        /**
         * Create an array where to store
         * all images links
         */
        let getFileImages = [];

        await fs.readdir(pathBackEnd, (err, files) => {

            if (err) {
                return console.log(`Unable to scan directory: ${err}`);
            }

            files.forEach(file => {
                getFileImages.push(`http://localhost:8000/images/${file}`);
            })

            res.render('admin-list-images', {
                pageTitle: 'Admin List Images',
                fileImages: getFileImages
            });

        })
    } catch (err) {
        console.error(`Error: ${err}`);
    }

}
