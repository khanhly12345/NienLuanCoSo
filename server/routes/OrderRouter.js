const express = require('express');
const router = express.Router();

const OrdersControllers = require('../app/controllers/OrdersControllers')

router.post('/create', OrdersControllers.create)
router.get('/show', OrdersControllers.show)
router.post('/detailorder', OrdersControllers.detailOrder)
router.post('/delete', OrdersControllers.delete)

module.exports = router;