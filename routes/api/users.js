const express = require('express');
const router = express.Router();
const logger = require('../../config/logger');
const {check, validationResult} = require('express-validator/check');
// @route   POST api/users
// @desc    register users
// @access  Public
 router.post('/',[
     check('name', 'Name is required').not().isEmpty(), 
     check('email', 'Email is not valid').isEmail(),
     check('password', 'Password should be 6 or more characters').isLength({min: 6})
 ] ,(req,res) => {
     const errors = validationResult(req);
     if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
     }
    console.log(req.body);
    res.send('user route');
});


module.exports = router;
