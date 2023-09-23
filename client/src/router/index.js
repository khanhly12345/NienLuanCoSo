import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About'
import Detail from '../views/Detail'
import Cart from '../views/Cart'
import ProductAdmin from '../views/ProductAdmin'
import AddProduct from '../views/AddProduct'
import EditProduct from '../views/EditProduct'
import Login from '../views/Login'
import Register from '../views/Register'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/about',
			component: About
		},
		{
			path: '/detail/:id',
			component: Detail
		},
		{
			path: '/cart',
			component: Cart
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
		{
			path: '/admin/product',
			component: ProductAdmin
		},
		{
			path: '/admin/products/edit/:id',
			component: EditProduct
		},
		{
			path: '/admin/addproduct',
			component: AddProduct
		}
	]
})
