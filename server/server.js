const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');

const cors = require('cors');

const app = express();

// Parse incoming requests with JSON
app.use(express.json());

// Move data from back-end to front-end
app.use(cors());

// BodyParse
app.use(bodyParser.urlencoded({extended: true}));

// Routes
const adminRoutes = require('./routes/adminRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Static Files
app.use(express.static('public'));
app.use('/images', express.static('images'));

// Views
app.set('view engine', 'ejs');
app.set('views', 'views');

let projectData = fs.readFileSync('./api/projects.json');
let project = JSON.parse(projectData);

app.use(adminRoutes);
app.use(contactRoutes);

app.get('/api/projects', (req, res, next) => {
    res.json({project});
})

app.listen(8000);
