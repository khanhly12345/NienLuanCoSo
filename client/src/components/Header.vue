<template>
	<div class="wrap_header" style="margin-bottom: 15px;">
		<img src="../assets/logo.webp" width="100%" alt="">
		<div class="container">
			<div class="row" style="padding: 5px 0px 0px 0;">
				<div class="same col-2 logo_header">
					<router-link to="/about"><img src="../assets/vgt5.png" alt="" style="width: 50%;"></router-link>
				</div>
				<div class="same col-4 search_header" style="display: inline;">
					<div class="search" style="margin-top: 20px;">
						<input type='text' placeholder="Tìm kiếm" v-model="search" />
						<router-link :to="'/search/' + search" style="color: green;"><i
								class="fas fa-search"></i></router-link>
					</div>
				</div>
				<div class="same col-2 login_header">
					<a href="" style="display: flex; color: rgb(130, 134, 158); text-decoration: none; margin-left: 100px;">
						<div class="sub_user">
							<i class="fa fa-phone"></i>
						</div>
						<div class="user_signin" style="color: green; width: 150px;">HT. khách hàng <br>0911018650</div>
					</a>
				</div>
				<div class="same col-2 login_header">
					<div style="display: flex; position: relative" v-if="status">
						<div class="wrap_info" style="display: flex; width: 100%" @click="toggle">
							<img src='../assets/avatar.jpg' style="width: 50px; border-radius: 50px" />
							<div style="padding-left: 5px; width: 90px">Xin chào, <br><span
									style="color: red; font-weight: 550; padding-top: 10px">{{ getDecoded.username }}</span>
							</div>
							<div class="infor" :class="{'none': show}">
								<div class="sub_infor">
									<button style="width: 100%" class='btn btn-primary' @click="logOut">Đăng Xuất</button>
								</div>
							</div>
						</div>
						<!-- <div className={clsx(style.infor)}>
                                        <div className={clsx(style.sub_infor)}>
                                            <button style="width: 100%" className='btn btn-primary' onClick={handleLogout}>Đăng Xuất</button>
                                        </div>
                                    </div> -->
					</div>
					<router-link to="/login"
						style="display: flex; color: rgb(130, 134, 158); text-decoration: none; margin-left: 20px;" v-else>
						<div class="sub_user">
							<i class="fa fa-user"></i>
						</div>
						<div class="user_signin" style="color: green; width: 100px; ">Đăng nhập <br> Đăng ký</div>
					</router-link>
				</div>
				<div class="same col-2 cart_header">
					<router-link to="/cart" style="display: flex; color: rgb(130, 134, 158); text-decoration: none;">
						<div class="sub_user">
							<i class="fa fa-cart-plus"></i>
						</div>
						<div class="user_signin" style="color: green;">Giỏ hàng của bạn<br><span class="count">{{ count
						}}</span> sản phẩm</div>
					</router-link>
				</div>
			</div>
		</div>
		<!-- <hr style="margin-bottom: 0;"> -->
	</div>
</template>

<script>
import jwtDecode from 'jwt-decode';

export default {
	data() {
		return {
			getDecoded: {},
			status: false,
			count: 0,
			search: '',
			show: false
		};
	},
	methods: {
		toggle() {
			this.show = !this.show
		},
		logOut() {
			localStorage.removeItem('tokenLogin')
			window.location.href = '/about'
		}
	},
	mounted() {
		let getToken = localStorage.getItem('tokenLogin') || {};
		if (getToken) {
			let decoded = jwtDecode(getToken);
			this.getDecoded = decoded;
			this.status = true;
			console.log(this.getDecoded);
		}
		const countCart = () => {
			let count = JSON.parse(localStorage.getItem('cart')) || 0;
			this.count = count.length;
		};
		countCart();

			// let getLogout = document.getElementsByClassName('wrap_info')[0]
			// console.log(getLogout)
			// let getInfo = document.getElementsByClassName('infor')[0]
			// console.log(getInfo)
			// getLogout.addEventListener('mouseover', (e) => {
			// 	getInfo.style.display = 'block'
			// })
			// getLogout.addEventListener('mouseout', (e) => {
			// 	getInfo.style.display = 'none'
			// })
			const element = this.$refs.myElement;
			console.log(element)
	},
}
</script>

<style scoped>
.row .same {
	display: flex;
	align-items: center;
	justify-content: center;
}

.search {
	border: 2px solid #e0e0e0;
	border-radius: 20px;
}

.search input {
	border: none;
	font-size: 14px;
	padding: 10px;
	width: 93%;
	border-radius: 20px;
}

input:focus {
	outline: none;
}

img {
	background: transparent;
}

.sub_user {
	font-size: 25px;
	padding: 5px 12px;
	border-radius: 50%;
	border: 1px solid black;
}

.user_signin {
	text-align: center;
	padding-left: 10px;
}

.infor {
	position: absolute;
	height: 100px;
	width: 200px;
	background: white;
	z-index: 1;
	border-radius: 5px;
	text-align: center;
	top: 55px;
	left: -50px;
	padding: 10px;
	border: 1px solid rgba(0, 0, 0, .125);
	display: none;
}

.none {
	display: block;
}

.sub_infor {
	padding: 10px;
}</style>
