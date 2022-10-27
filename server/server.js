const fs = require('fs');
const http = require('http');

let projectData = fs.readFileSync('./api/projects.json'); // file into the project
let project = JSON.parse(projectData);

const app = http.createServer((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(project));
});

app.listen(8000);
