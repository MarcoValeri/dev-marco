// Models
const User = require('../models/User');

exports.loginPage = (req, res, next) => {

    /**
     * Set up session adminUser
     * to false
     */
    req.session.adminUser = false;

    if (!req.session.adminUser) {
        req.session.adminUser = false;
    }

    res.render('login', {
        pageTitle: 'Login Page'
    });

}

exports.loginValidator = (req, res, next) => {

    /**
     * Save user inputs by login form into
     * two variables
     */
    const userInputEmail = req.body.email;
    const userInputPassword = req.body.password;

    const userLogin = new User;
    const validUsers = userLogin.isValidUser(userInputEmail, userInputPassword);

    if (validUsers) {
        req.session.adminUser = true;
        res.redirect('/admin/dashboard');
    } else {
        res.render('login', {
            pageTitle: 'Login Page'
        });
    }

}

exports.homePage = (req, res, next) => {

    res.render('home', {
        pageTitle: 'Home'
    });

}
