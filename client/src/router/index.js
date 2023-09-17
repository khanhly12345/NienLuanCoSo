import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About'
import Detail from '../views/Detail'
import Cart from '../views/Cart'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/about',
			component: About
		},
		{
			path: '/detail',
			component: Detail
		}
		,
		{
			path: '/cart',
			component: Cart
		}
	]
})
