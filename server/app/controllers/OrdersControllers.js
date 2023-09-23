const jwt = require('jsonwebtoken');
const Orders = require('../models/Orders')

class Order {
	create(req, res) {
		const { getIdCart, getQuantity, getToken, total } = req.body
		const newCart = getIdCart.map((cart, index) => (
			{
				product: cart,
				quantity: getQuantity[index]
			}
		))
		const order = new Orders({
			user: getToken.userId,
			item: newCart,
			totalAmout: total
		})
		if(order.save()) {
			res.json({ message: true })
		}

	}
}

module.exports = new Order()