<template>
	<div>
		<AdminNav />
		<AdminHeader />
		<div class='productadmin' style="padding: 10px">
			<div className="login" style="width: 100%; display: flex; justify-content: center">
				<form style="width: 40%" @submit.prevent="handleSubmit">
					<h1
						style="font-size: 60px; margin-bottom: 30px; display: flex' justify-content: center; font-weight: 600">
						Register
					</h1>

					<div class="form-outline mb-4">
						<label class="form-label" for="form1Example1">Fullname</label>
						<input type="text" id="form1Example1" class="form-control" v-model="fullname" required/>
					</div>

					<div class="form-outline mb-4">
						<label class="form-label" for="form1Example2">Account</label>
						<input type="text" id="form1Example12" class="form-control"  v-model="account" required/>
					</div>

					<div class="form-outline mb-4">
						<label class="form-label" for="form1Example3">Password</label>
						<input type="password" id="form1Example3" class="form-control" v-model="password" required />
					</div>

					<div class="form-outline mb-4">
						<label class="form-label" for="form1Example4">Role</label>
						<input type="text" id="form1Example4" class="form-control" v-model="role" required />
					</div>

					<div class="form-outline mb-4">
						<label class="form-label" for="form1Example5">Phone</label>
						<input type="text" id="form1Example5" class="form-control" v-model="phone" required />
					</div>

					<button type="submit" class="btn btn-primary btn-block" style="width: 100%">Sign in</button>
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
			fullname: '',
			account: '',
			password: '',
			role: '',
			phone: '',
		}
	},
	methods: {
		handleSubmit() {
			const fullname = this.fullname
			const account = this.account
			const password = this.password
			const role = this.role
			const phone = this.phone

			axios.post('http://localhost:3003/api/admin/create' ,
				{
					fullname,
					account,
					password,
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
				console.log(error)
			})
		}
	},
	components: {
		AdminNav,
		AdminHeader
	},
}
</script>