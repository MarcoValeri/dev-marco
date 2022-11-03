const fs = require('fs');

exports.adminDashboard = (req, res, next) => {

    res.render('admin-dashboard', {
        pageTitle: 'Admin Dashboard'
    });

};

exports.adminReadProjectsApi = (req, res, next) => {

    /**
     * Read JSON API file
     */
     let projectsJsonData = fs.readFileSync('./api/projects.json');
     let projectsData = JSON.parse(projectsJsonData);

     // projectsData.projects.forEach(project => {
     //     console.log(`Project ID: ${project.projectId}`);
     // })

     res.render('admin-read-projects-api', {
         pageTitle: 'Admin Projects API',
         projectsApi: projectsData
     });

}

exports.adminWriteProjectsApi = (req, res, next) => {

    /**
     * Write JSON API file
     */
    //  let newProjectJsonData = 'Hello Node';
    //  fs.writeFileSync('./api/projects.json', JSON.stringify(newProjectJsonData));

    console.log(req.body);

     res.render('admin-write-projects-api', {
        pageTitle: 'Admin Projects API'
     });

}

exports.adminFormProjectsApi = (req, res, next) => {

    res.render('admin-form-projects-api', {
        pageTitle: 'Admin Form Projects API'
    });

}
