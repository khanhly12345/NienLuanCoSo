const express = require('express');
const router = express.Router();

const AdminControllers = require('../app/controllers/AdminControllers')

router.post('/create', AdminControllers.create)
router.get('/show', AdminControllers.show)
router.post('/edit', AdminControllers.edit)
router.post('/update', AdminControllers.update)
router.post('/delete', AdminControllers.delete)
router.post('/checkadmin', AdminControllers.checklogin)
router.post('/getadmin', AdminControllers.getadmin)

module.exports = router;