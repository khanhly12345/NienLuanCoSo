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
            <div class="register">
                <form style="width: 40%" @submit.prevent="handleSubmit">
                    <h1 style="font-size: 60px; margin-bottom: 30px; display: flex; justify-content: center; font-weight: 600">Register</h1>
					<span class="error" style="color: red;">{{ error }}</span>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example1">Tài Khoản</label>
                        <input type="text" id="form1Example1" class="form-control" v-model="username" required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example2">Mật Khẩu</label>
                        <input type="password" id="form1Example2" class="form-control" v-model="password" required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example3">Nhập lại mật khẩu</label>
                        <input type="password" id="form1Example3" class="form-control" v-model="confirmPw" required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example4">Số Điện Thoại</label>
                        <input type="text" id="form1Example4" class="form-control" v-model="phone" required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example5">Thành Phố</label>
                        <input type="text" id="form1Example5" class="form-control" v-model="city" required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example6">Huyện</label>
                        <input type="text" id="form1Example6" class="form-control" v-model="district" required/>
                    </div>

                    <div class="row mb-4 d-flex justify-content-between">
                        <div class="col ">
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="form1Example7" checked />
								<label class="form-check-label" for="form1Example7"> Remember me </label>
							</div>
                        </div>

                        <div class="col d-flex justify-content-end">
                            <router-link to='/login'>Login here?</router-link>
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
			confirmPw: '',
			phone: '',
			city: '',
			district: '',
			doman: 'http://localhost:3003/',
			error: '',
		}
	},
	methods: {
		handleSubmit() {
			let data = {
				username: this.username,
				password: this.password,
				confirmPw: this.confirmPw,
				city: this.city,
				district: this.district,
				phone: this.phone,
			}

			axios.post('http://localhost:3003/api/users/create',
					data
			)
			.then(res => {
				if(res.data.message == false) {
					this.error = 'Xác nhận mật khẩu không khớp!'
				}else{
					console.log('ok')
					this.$router.push('/login');
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
.register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 10px;
	padding-bottom: 20px;
}
</style>