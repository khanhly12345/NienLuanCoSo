const express = require('express');
const router = express.Router();

const AdminControllers = require('../app/controllers/AdminControllers')

router.post('/create', AdminControllers.create)
router.get('/show', AdminControllers.show)
router.post('/edit', AdminControllers.edit)
router.post('/update', AdminControllers.update)
router.post('/delete', AdminControllers.delete)

module.exports = router;