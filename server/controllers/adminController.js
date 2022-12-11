const nodemailer = require('nodemailer');
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

exports.adminListImages = (req, res, next) => {

    res.render('admin-list-images', {
        pageTitle: 'Admin List Images'
    });

}

exports.adminContact = (req, res, next) => {

    // const contactEmail = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'info@marcovaleri.net',
    //         pass: 'wjabtpkaeqcvgcvg',
    //     },
    // });

    // contactEmail.verify((error) => {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log(`Ready to Send`);
    //     }
    // });

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`message: ${message}`);

    // const mail = {
    //     from: name,
    //     to: 'info@marcovaleri.net',
    //     subject: 'Contact Form Submission',
    //     html: `<p>Test: ${message}</p>`,
    // };

    // contactEmail.sendMail(mail, (error) => {
    //     if (error) {
    //         res.json({ status: 'Error' });
    //     } else {
    //         res.json({ status: 'Message Sent' });
    //     }
    // });

}