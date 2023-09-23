<template>
	<div>
		<Header />
		<div class="header_detail" style="display: flex; justify-content: center; background: white; padding-bottom: 10px;">
			<div style="width: 70%; padding-top: 7px;">
				<router-link to="/about" style="text-decoration: none; color: green;">Trang chủ /</router-link>
				<span style="font-weight: 300; font-size: 14px; color: rgb(161, 160, 160);">Thông Tin Chi Tiết</span>
			</div>
		</div>
		<div class='container'>
            <div class="login">
                <form style="width: 40%" @submit.prevent="handleSubmit">
                    <h1 style="font-size: 60px; margin-bottom: 30px; display: flex; justify-content: center; font-weight: 600">Login</h1>
					<span style="color: red;">{{ error }}</span>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example1">Account</label>
                        <input type="text" id="form1Example1" class="form-control" v-model="username" required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example2">Password</label>
                        <input type="password" id="form1Example2" class="form-control" v-model="password" required/>
                    </div>

                    <div class="row mb-4 d-flex justify-content-between" >
                        <div class="col">
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
								<label class="form-check-label" for="form1Example3"> Remember me </label>
							</div>
                        </div>

                        <div class="col d-flex justify-content-end">
                            <router-Link to='/register'>Register here?</router-Link>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block" style="width: 100%">Sign in</button>
                </form>
            </div>
        </div>
		<Footer />
	</div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios';

export default {
	data() {
		return {
			username: '',
			password: '',
			error: ''
		}
	},
	methods: {
		handleSubmit() {
			let data = {
				username: this.username,
				password: this.password
			}
			axios.post('http://localhost:3003/api/users/login',
				data
			)
			.then(res => {
				if(res.data.message == false) {
					this.error = 'Tài khoản và mật khẩu không chính xác!'
				}else{
					localStorage.setItem('tokenLogin', res.data.token)
					this.$router.push('/about');
				}
			})
			.catch(error => {
				console.log(error)
			})
		}
	},
	components: {
		Header,
		Footer
	},
}
</script>
<style>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    background-color: white;
    border-radius: 5px;
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 10px;
}
</style>