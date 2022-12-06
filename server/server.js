const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const express = require('express');
const sessions = require('express-session');

const cors = require('cors');

const app = express();

// Session
const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
    secret: 'thisismysecretkey',
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// Cookie parser middleware
app.use(cookieParser());

// Parse incoming requests with JSON
app.use(express.json());

// Move data from back-end to front-end
app.use(cors());

// BodyParse
app.use(bodyParser.urlencoded({extended: true}));

// Routes
const adminRoutes = require('./routes/adminRoutes');
const contactRoutes = require('./routes/contactRoutes');
const loginRoutes = require('./routes/loginRoutes');

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
app.use(loginRoutes);

app.get('/api/projects', (req, res, next) => {
    res.json({project});
})

app.listen(8000);
