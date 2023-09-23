const ProductRoute = require('./ProductsRouter')
const UserRouter = require('./UserRouter')
const OrderRouter = require('./OrderRouter')
const AdminRouter = require('./AdminRouter')

function route(app) {
	app.use('/api/products', ProductRoute)
	app.use('/api/users', UserRouter)
	app.use('/api/orders', OrderRouter)
	app.use('/api/admin', AdminRouter)
}

module.exports = route;