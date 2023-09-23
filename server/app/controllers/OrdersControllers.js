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

	async show(req, res) {
		const order = await Orders.find().populate('user')
		res.json(order)
	}

	async detailOrder(req, res) {
		const { id } = req.body
		const detailOrder = await Orders.findOne({ _id: id}).populate('item.product')
		res.json(detailOrder)
	}

	async delete(req, res) {
		const { id } = req.body
		const product = await Orders.deleteOne({ _id: id})
		if(product) {
			res.json({message: true})
		}else{
			res.json({message: false})
		}
	}
}

module.exports = new Order()