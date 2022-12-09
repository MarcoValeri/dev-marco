const fs = require('fs');
const path = require('path');

// Get API files path
const pathApi = path.join(__dirname, '../', '/api/');

exports.apiProjects = (req, res, next) => {

    // Save projects into a variable
    const projectData = fs.readFileSync(`${pathApi}projects.json`);
    const project = JSON.parse(projectData);

    res.json({project});

}
