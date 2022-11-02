exports.adminDashboard = (req, res, next) => {
    // res.send(`<h1>Admin Section</h1>`);
    res.render('admin', {
        pageTitle: 'Admin Dashboard'
    });
};
