const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const {
    check,
    validationResult
} = require('express-validator/check');

const Admin = require('../../models/Admin');

//@route  GET api/admin
//@desc   Registering admin account
//@access Public

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please provide an email').isEmail(),
    check('password', 'Please enter a password with 14 or more characters').isLength({
        min: 14
    })
], async (req, res) => {
    const errors = validationResult(req);
    // Sets status to bad request & sends messages
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    //deconstructing 
    const {
        name,
        email,
        password
    } = req.body;

    try {
        //Checking if user exists
        let admin = await Admin.findOne({
            email
        });
        if (admin) {
            return res.status(400).json({
                errors: [{
                    msg: 'Admin already exists! O_O'
                }]
            });
        }

        admin = new Admin({
            name,
            email,
            password
        });

        //Encrypt password
        const salt = await bcrypt.genSalt(10);

        admin.password = await bcrypt.hash(password, salt);

        await admin.save();

        //Return jsonwebtoken

        console.log(req.body);
        res.send("Admin route");
    } catch (err) {
        console.log(err.message);
        res.status(500).send(`Server Error: ${err.message}`);
    }
})

module.exports = router;