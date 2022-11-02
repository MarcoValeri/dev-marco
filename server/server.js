const fs = require('fs');
const express = require('express');

const app = express();

// Routes
const adminRoutes = require('./routes/admin');

// Views
app.set('view engine', 'ejs');
app.set('views', 'views');

let projectData = fs.readFileSync('./api/projects.json');
let project = JSON.parse(projectData);

app.use(adminRoutes);

app.get('/api/projects', (req, res, next) => {
    res.json({project});
})

app.listen(8000);
