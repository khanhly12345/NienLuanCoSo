<template>
	<div class="heading">
		<div class='wrap_admin' style="display: flex; float: right; position: relative; left: 650px ; padding: 10px">
			<div class="notifications" style="padding: 10px 20px 10px 10px; position: relative">
				<i class="fa fa-bell" style="font-size: 30px"></i>
				<span
					style="border-radius: 26px; padding: 5px; display: flex; position: absolute; top: -5px; right: 4px; color: red;">{{ getNoti.length }}</span>
				<div class='wrap_noti' style="position: absolute;">
					<div class="noti2">
						<div class="sub_noti">
							<ul>
								<li v-for="(value, index) in getNoti" :key="index">
									khách hàng {{ value.userId.username }} vừa {{ value.message }} <br> {{ value.createdAt }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div style="display: flex">
				<img src='../assets/avatar.jpg' style="width: 5%; height: 80%; border-radius: 50%" />
				<div style="padding-left: 5px">
					<span>Chào Admin, </span><br>
					<span style="color: red">{{ getAdmin.username }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import io from 'socket.io-client';

export default {
	data() {
		return {
			getAdmin: {},
			getNoti: []
		}
	},
	mounted() {
		const getToken = localStorage.getItem('admin')
		if (!getToken) {
			this.$router.push('/admin/login')
		}
	},
	mounted() {
		const getToken = localStorage.getItem('admin')
		axios.post('http://localhost:3003/api/admin/getadmin', { getToken })
			.then(res => {
				this.getAdmin = res.data
			})
			.catch(error => {
				console.log("admin nav", error)
			})
		const notifications = () => {
			let getNoti = document.getElementsByClassName('notifications')[0]
			let wrap_noti = document.getElementsByClassName('wrap_noti')[0]
			getNoti.addEventListener('mouseover', (e) => {
				wrap_noti.style.display = 'block'
			})
			getNoti.addEventListener('mouseout', (e) => {
				wrap_noti.style.display = 'none'
			})
		}
		notifications()
		const socket = io('http://localhost:3003');
		socket.on('getnotications', (value) => {
			this.getNoti = value
			console.log(this.getNoti)
		})
		socket.emit('initAllNoti')
		socket.on('getnoti', (value) => {
			this.getNoti = value
		})
	}
}
</script>
<style scoped>
.heading {
	position: fixed;
	left: 283px;
	height: 70px;
	width: 100%;
	background-color: white;
	border-radius: 5px;
	z-index: 1;
}

.noti2 {
	position: absolute;
	height: 200px;
	width: 400px;
	background: white;
	z-index: 1;
	border-radius: 5px;
	text-align: center;
	right: -220px;
	border: 1px solid rgba(0, 0, 0, .125);
	margin-top: 10px;
	overflow: scroll;
	overflow-x: hidden;
}

ul > li{
        list-style-type: none;
        background-color: rgb(238, 226, 226);
        border-bottom: 1px solid gray;
        color: black;
        cursor: pointer;
		padding: 10px 0 10px 0;
}

ul {
        padding: 0;
}
.wrap_noti {
	display: none;
}

</style>