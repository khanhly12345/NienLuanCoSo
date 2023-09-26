const express = require('express');
const router = express.Router();
const upload = require('../until/multer')

const ProductsController = require('../app/controllers/ProductsController')

router.post('/create', upload.single('file'), ProductsController.create)
router.get('/show', ProductsController.show)
router.post('/edit', ProductsController.edit)
router.post('/update', upload.single('file'), ProductsController.update)
router.post('/delete', ProductsController.delete)
router.post('/detail', ProductsController.detail)
router.post('/showcart', ProductsController.showcart)
router.get('/sortbypriceasc', ProductsController.sortbypriceasc)
router.get('/sortbypricedesc', ProductsController.sortbypricedesc)
router.get('/sortbynameasc', ProductsController.sortbynameasc)
router.get('/sortbynamedesc', ProductsController.sortbynamedesc)
router.post('/search', ProductsController.search)

module.exports = router;