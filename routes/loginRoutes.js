const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config.js');
const db = require("../models");
const verifyToken = require('../public/js/verifyToken.js');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/register', function (req, res) {
    console.log("in register");
    console.log(req.body);
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    db.Login.findOneAndUpdate({
        login_email: req.body.email
    }, {first_name: req.body.firstname,
        last_name: req.body.lastname,
        login_email: req.body.email,
        password: hashedPassword
    }, { upsert: true, returnNewDocument: true }, 
    function (logins, err) {
        console.log(logins);
        if (err) return res.status(500).send("There was a problem registering the user.")
        // create a token
        var token = jwt.sign({ id: logins._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    });
});

router.post('/login', function (req, res) {
    console.log(req.body);
    db.Login.findOne( { login_email: req.body.email } ).then((logins, err) => {
        console.log(err, logins);
        if (err) return res.status(500).send('Error on the server.');
        if (!logins) return res.status(404).send({ auth: false });
        var passwordIsValid = bcrypt.compareSync(req.body.password, logins.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        var token = jwt.sign({ id: logins._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    })
    .catch(err => console.log(err));
});

router.get('/logout', function (req, res) {
    res.status(200).send({ auth: false, token: null });
});

router.get('/check', verifyToken, function (req, res, next) {

    db.Login.findOne( { _id: req.loginsId } )
        .then(function (logins, err) {
            if (err) return res.status(500).send("There was a problem finding the user.");
            if (!logins) return res.status(404).send("No user found.");
            // res.status(200).send(user); Comment this out!
            res.status(200).send(logins);
            console.log(logins);
            next();
        });
});

module.exports = router;