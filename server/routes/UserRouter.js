const express = require('express');
const router = express.Router();

const UserControllers = require('../app/controllers/UserControllers')

router.post('/create', UserControllers.create)
router.post('/login', UserControllers.login)

module.exports = router;