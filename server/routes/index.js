const ProductRoute = require('./ProductsRouter')

function route(app) {
	app.use('/api/products', ProductRoute)
}

module.exports = route;