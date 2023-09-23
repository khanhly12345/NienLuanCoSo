const express = require('express');
const router = express.Router();

const OrdersControllers = require('../app/controllers/OrdersControllers')

router.post('/create', OrdersControllers.create)

module.exports = router;