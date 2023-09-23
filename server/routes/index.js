const ProductRoute = require('./ProductsRouter')
const UserRouter = require('./UserRouter')
const OrderRouter = require('./OrderRouter')

function route(app) {
	app.use('/api/products', ProductRoute)
	app.use('/api/users', UserRouter)
	app.use('/api/orders', OrderRouter)
}

module.exports = route;