const express = require('express');
const router = express.Router();

const CommentsControllers = require('../app/controllers/CommentsControllers')

router.post('/create', CommentsControllers.create)
router.post('/show', CommentsControllers.show)
router.post('/delete', CommentsControllers.delete)

module.exports = router;