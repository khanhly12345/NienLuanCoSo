<template>
	<div class='container' style="position: absolute; transform: translate(-50%, -50%); left: 75%; top: 45%">
            <div class="login" style="width: 100%">
                <form style="width: 40%" @submit.prevent="handleSubmit">
                    <h1 style="font-size: 60px; margin-bottom: 30px; display: flex; justify-content: center; font-weight: 600">Login</h1>
					<span v-if="!status" style="color: red;">Tài Khoản và Mật Khẩu không chính xác!</span>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example1">Account</label>
                        <input type="text" id="form1Example1" class="form-control" v-model="username"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example2">Password</label>
                        <input type="password" id="form1Example2" class="form-control" v-model="password"/>
                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                            <label class="form-check-label" for="form1Example3"> Remember me </label>
                        </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block" style="width: 100%">Sign in</button>
                </form>
            </div>
        </div>
</template>
<script>
import axios from 'axios';
export default {
	data() {
		return {
			username: '',
			password: '',
			status: true,
		}
	},
	methods: {
		handleSubmit() {
			const username = this.username
			const password = this.password

			axios.post('http://localhost:3003/api/admin/checkadmin', {
				username,
				password
			})
			.then(res => {
				if(res.data.message) {
					localStorage.setItem('admin', res.data.token)
					this.status = true
					this.$router.push('/admin/product');
				}else{
					this.status = false
				}
			})
			.catch(error =>{
				console.log("error login admin", error)
			})
		}
	}
}
</script>
<style>

</style>