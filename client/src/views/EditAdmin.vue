<template>
	<div>
		<AdminNav />
		<AdminHeader />
		<div className="productadmin">
            <div className="login" style="width: 100%; display: flex; justify-content: center; padding-bottom: 50px">
                <form style="width: 40%" @submit.prevent="handleSubmit">
                    <h1 style="font-size: 60px; margin-bottom: 30px; display: flex; justify-content: center; font-weight: 600">Edit Admin</h1>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example1">Fullname</label>
                        <input type="text" id="form1Example1" class="form-control" v-model="fullname"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example2">Account</label>
                        <input type="text" id="form1Example12" class="form-control" v-model="username"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example3">Password</label>
                        <input type="password" id="form1Example3" class="form-control" v-model="password"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example3">New Password</label>
                        <input type="password" id="form1Example3" class="form-control" v-model="newPassword"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example4">Role</label>
                        <input type="text" id="form1Example4" class="form-control" v-model="role"/>
                    </div>


                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example5">Phone</label>
                        <input type="text" id="form1Example5" class="form-control" v-model="phone"/>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block" style="width: 100%">Edit</button>
                </form>
            </div>
        </div>
	</div>
</template>
<script>
import AdminNav from '../components/AdminNav.vue'
import AdminHeader from '../components/AdminHeader.vue';
import axios from 'axios'

export default {
	data() {
		return {
			id: '',
			fullname: '',
			username: '',
			password: '',
			newPassword: '',
			role: '',
			phone: '',
		}
	},
	methods: {
		handleSubmit() {
			const id = this.id
			const fullname = this.fullname
			const username = this.username
			const password = this.password
			const newPassword = this.newPassword
			const role = this.role
			const phone = this.phone

			axios.post('http://localhost:3003/api/admin/update' ,
				{
					id,
					fullname,
					username,
					password,
					newPassword,
					role,
					phone,
				}
			)
			.then(res => {
				if(res.data.message) {
					this.$router.go(-1)
				}
			})
			.catch(error => {
				console.log("edit admin : ", error)
			})
		}
	},
	components: {
		AdminNav,
		AdminHeader
	},
	mounted() {
		const id = this.$route.params.id
		this.id = id
		axios.post('http://localhost:3003/api/admin/edit', {
			id
		})
			.then(res => {
				this.fullname = res.data.fullname
				this.username = res.data.username
				this.phone = res.data.phone
				this.role = res.data.role
			})
			.catch(error => {
				console.log("edit admin : ", error)
			})
	}
}
</script>