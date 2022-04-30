const express = require('express');
const router = express.Router();

const userConstroller = require('../controllers/userController')

router.get('', userConstroller.getAllUsers);

router.post('/signup', userConstroller.signup);

module.exports = router;
