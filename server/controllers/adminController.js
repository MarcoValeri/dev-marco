const fs = require('fs');
const { runInNewContext } = require('vm');

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

     res.render('read-projects-api', {
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

     res.render('admin-write-projects-api', {
        pageTitle: 'Admin Projects API'
     });

}
