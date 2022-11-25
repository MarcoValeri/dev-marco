exports.sendMessage = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
}
