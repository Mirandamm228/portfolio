const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');

const {
    check,
    validationResult
} = require('express-validator/check');

const Admin = require('../../models/Admin');

//@route  GET api/auth
//@desc   Retrieving admin info
//@access Public
router.get('/', auth, async (req, res) => {
    try {
        //bring back admin info except password
        const admin = await Admin.findById(req.admin.id).select('-password');
        res.json(admin);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send(`Server Error: ${err.message}`);
    }
});


//@route  POST api/auth
//@desc   Auth user & get token
//@access Public
router.post('/', [
    check('email', 'Please provide an email').isEmail(),
    check('password', 'Please password is required').exists()
], async (req, res) => {
    const errors = validationResult(req);

    //Sets status to bad request & sends messages
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    //deconstruction
    const {
        email,
        password
    } = req.body;

    try {
        // Testing if admin exists
        let admin = await Admin.findOne({
            email
        });

        if (!admin) {
            return res.status(400).json({
                errors: [{
                    msg: 'Invalid Credentials'
                }]
            });
        }

        //match email & password
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(400).json({
                errors: [{
                    msg: 'Invalid Credentials'
                }]
            });
        }

        const payload = {
            admin: {
                id: admin.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'), {
                expiresIn: 3600
            }, (err, token) => {
                if (err) throw err;
                res.json({
                    token
                });
            });
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Server Error: ${err.message}`)
    }
});

module.exports = router;