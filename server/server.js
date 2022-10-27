const fs = require('fs');
const express = require('express');

const app = express();

let projectData = fs.readFileSync('./api/projects.json'); // file into the project
let project = JSON.parse(projectData);

app.get('/api/projects', (req, res, next) => {
    res.json({project});
})

app.listen(8000);
