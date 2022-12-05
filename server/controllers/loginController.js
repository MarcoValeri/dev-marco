// Models
const User = require('../models/User');

exports.loginPage = (req, res, next) => {

    const email = req.body.email;
    console.log(`Email: ${email}`);

    res.render('login', {
        pageTitle: 'Login Page'
    });
}

exports.loginValidator = (req, res, next) => {
    // console.log(`Login data:`);
    // console.log(req.body);
    // console.log(`Email: ${req.body.email}`);

    /**
     * Save user inputs by login form into
     * two variables
     */
    const userInputEmail = req.body.email;
    const userInputPassword = req.body.password;

    const userLogin = new User;
    const validUsers = userLogin.isValidUser(userInputEmail, userInputPassword);
    console.log(validUsers);

    res.render('login', {
        pageTitle: 'Login Page'
    });
}

exports.homePage = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login Page'
    });
}
