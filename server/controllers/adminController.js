const fs = require('fs');
const path = require('path');
const pathBackEnd = path.join(__dirname, '../', '/public/images/');

// Models
const Project = require('../models/Project');

exports.adminDashboard = (req, res, next) => {

    if (req.session.adminUser) {
        res.render('./admin/admin-dashboard', {
            pageTitle: 'Admin Dashboard'
        });
    } else {
        res.redirect('/login');
    }


};

exports.adminReadProjectsApi = (req, res, next) => {


    if (req.session.adminUser) {
        /**
         * Read JSON API file
         */
        const project = new Project('./api/projects.json');

         res.render('./admin/admin-read-projects-api', {
             pageTitle: 'Admin Projects API',
             projectsApi: project.read()
         });
    } else {
        res.redirect('/login');
    }

}

exports.adminWriteProjectsApi = (req, res, next) => {

    if (req.session.adminUser) {
        /**
         * Write JSON API file
         */
        const project = new Project('./api/projects.json');
        project.save(req.body.projectsApi);

         res.render('./admin/admin-write-projects-api', {
            pageTitle: 'Admin Projects API'
         });
    } else {
        res.redirect('/login');
    }


}

exports.adminFormProjectsApi = (req, res, next) => {

    if (req.session.adminUser) {
        res.render('./admin/admin-form-projects-api', {
            pageTitle: 'Admin Form Projects API'
        });
    } else {
        res.redirect('/login');
    }


}

exports.adminAddImage = (req, res, next) => {

    if (req.session.adminUser) {
        res.render('./admin/admin-add-image', {
            pageTitle: 'Admin Add Image'
        });
    } else {
        res.redirect('/login');
    }


}

exports.adminUploadImage = (req, res, next) => {

    if (req.session.adminUser) {
        const { image } = req.files;

        if (!image) return res.sendStatus(400);

        image.mv(pathBackEnd + image.name);

        res.sendStatus(200);
    } else {
        res.redirect('/login');
    }


}

exports.adminListImages = async (req, res, next) => {

    if (req.session.adminUser) {
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

                res.render('./admin/admin-list-images', {
                    pageTitle: 'Admin List Images',
                    fileImages: getFileImages
                });

            })
        } catch (err) {
            console.error(`Error: ${err}`);
        }
    } else {
        res.redirect('/login');
    }


}
