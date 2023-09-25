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
import Order from '../views/Order'
import DetailOrder from '../views/DetailOrder'
import AccountAdmin from '../views/AccountAdmin'
import AddAdmin from '../views/AddAdmin'
import EditAdmin from '../views/EditAdmin'
import LoginAdmin from '../views/LoginAdmin'
import Overview from '../views/Overview'
import SeeMore from '../views/SeeMore'

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
		},
		{
			path: '/admin/order',
			component: Order
		},
		{
			path: '/admin/detailorder/:id',
			component: DetailOrder
		},
		{
			path: '/admin/account',
			component: AccountAdmin
		},
		{
			path: '/admin/addAdmin',
			component: AddAdmin
		},
		{
			path: '/admin/edit/:id',
			component: EditAdmin
		},
		{
			path: '/admin/login',
			component: LoginAdmin
		},
		{
			path: '/admin/overview',
			component: Overview
		},
		{
			path: '/seemore',
			component: SeeMore
		}
	]
})
