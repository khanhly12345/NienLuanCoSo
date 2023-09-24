<template>
	<div class="heading">
            <div class='wrap_admin' style="display: flex; float: right; position: relative; left: 650px ; padding: 10px">
                <div style="padding: 10px 20px 10px 10px; position: relative">
                    <i class="fa fa-bell" style="font-size: 30px"></i>
                    <span style="height: 10px; width: 10px; background-color: rgb(16, 185, 129); color: rgb(16, 185, 129); border-radius: 26px; padding: 5px; display: flex; position: absolute; top: 0; right: 15px"></span>
                </div>
                <div style="display: flex">
                    <img src='../assets/avatar.jpg' style="width: 5%; height: 80%; border-radius: 50%"/>
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

export default {
	data() {
		return {
			getAdmin: {}
		}
	},
	mounted() {
		const getToken = localStorage.getItem('admin')
		if(!getToken) {
			this.$router.push('/admin/login')
		}
	},
	mounted() {
		const getToken = localStorage.getItem('admin')
		axios.post('http://localhost:3003/api/admin/getadmin', {getToken})
			.then(res =>{
				this.getAdmin = res.data
			})
			.catch(error =>{
				console.log("admin nav", error)
			})
	}
}
</script>
<style>
.heading {
    position: fixed;
    left: 283px;
    height: 70px;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    z-index: 1;
}
</style>