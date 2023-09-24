<template>
	<div class="nav">
		<div class='nav_header' style="padding: 20px; border-bottom: 1px solid rgb(47, 55, 70); height: 150px;">
			<img style="width: 15%" src='../assets/avatar.jpg' alt='' />
			<div
				style="height: 70px; width: 100%; background-color: rgba(255, 255, 255, 0.04); display: flex; justify-content: center; align-items: center; border-radius: 10px; color: white; margin-top: 10px">
				<h1>Admin</h1>
			</div>
		</div>
		<div class="navigation">
			<ul class='ul'>
				<li class="li">
					<router-link to='overview' class='outStading'><i class="fa fa-chart-line"></i><span class="sub">Overview</span> </router-link>
				</li>
				<li class="li">
					<router-link to='user'  class='outStading'><i class="fa fa-users"></i><span class="sub">Customer</span> </router-link>
				</li>
				<li class="li">
					<router-link to='product'  class='outStading'><i class="fa fa-laptop"></i><span class="sub">Products</span></router-link>
				</li>
				<li class="li">
					<router-link to='order'  class='outStading'><i class="fa fa-cart-plus"></i><span class="sub">Orders</span></router-link>
				</li>
				<li class="li">
					<router-link to='account'  class='outStading'><i class="fa fa-user"></i><span class="sub">Account</span></router-link>
				</li>
				<li class="li"><router-link to=''  class='outStading'><i class="fa fa-wrench"></i><span class="sub">Setting</span> </router-link></li>
				<li class="li" @click.prevent="handleLogin"><router-link to=''  class='outStading'><i class="fa fa-lock"></i><span class="sub">Login</span> </router-link></li>
				<li class="li"><router-link to=''  class='outStading'><i class="fa fa-arrow-right"></i><span class="sub">Log out </span></router-link></li>
			</ul>
		</div>
	</div>
</template>
<script>
import axios from 'axios'

export default {
	methods: {
		handleLogin() {
			localStorage.removeItem('admin')
			this.$router.push('/admin/login')
		}
	},
}
</script>

<style scoped>
.nav {
    width: 280px;
    background-color: rgb(28, 37, 54);
    height: 750px;
    position: fixed;
    top: 0;
    left: 0;
}

.navigation li{
    list-style-type: none;
	padding: 10px;
    font-weight: 600;
}

.navigation {
	position: relative;
	top: -100px;
}
.li a {
    padding: 10px;
}
.li .outStading {
	text-decoration: none;
	color: rgb(127, 125, 125);
}

.sub {
	margin-left: 10px;
}

</style>