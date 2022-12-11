const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const sessions = require('express-session');

const cors = require('cors');

const app = express();

// DotEnv Configuration
dotenv.config();

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
const apiRoutes = require('./routes/apiRoutes');
const contactRoutes = require('./routes/contactRoutes');
const loginRoutes = require('./routes/loginRoutes');

// Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static('images'));

// Views
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(adminRoutes);
app.use(apiRoutes);
app.use(contactRoutes);
app.use(loginRoutes);

app.listen(process.env.SERVER_PORT);
