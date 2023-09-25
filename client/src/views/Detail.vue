<template>
	<div>
		<Header />
		<div class="header_detail" style="display: flex; justify-content: center">
			<div style="width: 70%; padding-top: 7px;">
				<router-link to="/about" style="text-decoration: none; color: green;">Trang chủ /</router-link>
				<span style="font-weight: 300; font-size: 14px; color: rgb(161, 160, 160);">Thông Tin Chi Tiết</span>
			</div>
		</div>
		<div class="container" style="display: flex; justify-content: center;">
			<div class="wrap_detail" style="padding: 10px;">
				<div class="row">
					<div class="col-8">
						<img :src="doman + getData['img']" width="90%" alt="">
					</div>
					<div class="col-4">
						<h4 style="color: green;">{{ getData['name'] }}</h4>
						<span style="color: green;">Tình Trạng: </span><span>Còn Hàng</span>
						<div class="price">
							<span>{{ HandlePrice(getData['price']) }}</span>
						</div>
						<hr>
						<span><span style="color: green;">Mô tả:</span> Làm nguyên liệu tươi sạch và bổ sung chất sơ cho món
							ăn cho món ăn.</span>
						<!-- <div style="color: green;">Số lượng: </div>
						<div style="display: flex; justify-content: space-around; background-color: rgb(211 214 227); height: 40px; border-radius: 5px; width: 50%; margin-top: 10px;">
							<button style="border: none; background-color: rgb(211 214 227)">-</button>

							<div class='quantity' style="padding-top: 10px; color: black">0</div>

							<button style="border: none; background-color: rgb(211 214 227)">+</button>
						</div> -->
						<ul class="ul" style="display: flex;">
							<li class="li"><i class="fab fa-facebook-f" style="color: green; font-size: 20px;"></i></li>
							<li style="padding-left: 10px;">
								<i class="fab fa-twitter" style="color: green; font-size: 20px;"></i>
							</li>
							<li style="padding-left: 10px;"><i class="fab fa-behance"
									style="color: green; font-size: 20px;"></i></li>
							<li style="padding-left: 10px;"><i class="fab fa-instagram"
									style="color: green; font-size: 20px;"></i></li>
						</ul>
						<button class="btn btn-warning"
							style="margin-top: 10px; background: #ff5722; color: white; font-size: 20px; font-weight: 500; width: 100%;"
							@click="addCart">Thêm
							vào giỏ hàng</button>
					</div>

				</div>
			</div>
		</div>
		<div class="container" style="display: flex; justify-content: center; margin-top: 10px;">
			<div class="comments wrap_detail" style="padding: 10px;">
				<h4 style="font-weight: 400; color: green;">Đánh Giá Sản Phẩm</h4>
				<div className={clsx(style.comments)}>
					<textarea style="width: 100%; height: 100px; border-radius: 5px;" v-model="getCmt"></textarea>
					<button class='btn btn-primary' @click.prevent="handleSubmit">Bình Luận</button>
				</div>
				<div class="slide_down" style="margin-top: 10px; height: 300px; overflow: scroll; overflow-x: hidden; scrollbar-width: thin;">
					<div style="display: flex; color: black; font-weight: 400" v-for="(value, index) in getDataCmt" :key="index">
						<img src='../assets/avatar.jpg' style="width: 50px; height: 50px; border-radius: 50px" />
						<div style="padding-left: 5px">
							<div style="color: red">{{ value.userId.username }}</div>
							<div style="border: 2px solid lightblue; height: 50px; width: 500px; border-radius: 5px">
								<div style="padding: 0 5px 0 5px">
									{{ value.message }}
								</div>
							</div>
							<div style="marginTop: 5px">
								<span>{{ value.createdAt }}</span>
								<a style="margin-left: 20px; height: 35px" class='btn btn-danger' @click="handleDeleteCmt(value._id, value.productId)">Xóa</a>
							</div>
						</div>
					</div>
					<div style="display: flex; color: black; font-weight: 400">
						<img src='../assets/avatar.jpg' style="width: 50px; height: 50px; border-radius: 50px" />
						<div style="padding-left: 5px">
							<div style="color: red">initComment.userId.username</div>
							<div style="border: 2px solid lightblue; height: 50px; width: 500px; border-radius: 5px">
								<div style="padding: 0 5px 0 5px">
									Sản phẩm tốt quá !
								</div>
							</div>
							<div style="marginTop: 5px">
								<span>initComment.createdAt</span>
								<a style="margin-left: 20px; height: 35px" class='btn btn-danger'>Xóa</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'
import jwtDecode from 'jwt-decode';
import axios from 'axios'

export default {
	name: 'detail',
	data() {
		return {
			id: '',
			getData: {},
			arrayId: [],
			doman: 'http://localhost:3003/',
			getToken: '',
			getCmt: '',
			getDataCmt: []
		}
	},
	components: {
		Header,
		Nav,
		Footer
	},
	methods: {
		HandlePrice(value) {
			const VND = new Intl.NumberFormat('vi-VN', {
				style: 'currency',
				currency: 'VND',
			});
			value = VND.format(value)
			return value
		},
		addCart() {
			const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
			const id = this.$route.params.id;
			if (!storedCartItems.includes(id)) {
				this.arrayId = [...storedCartItems, id]
				const arrayJson = JSON.stringify(this.arrayId)
				localStorage.setItem("cart", arrayJson)
			}
		},
		handleSubmit() {
			const id = this.id
			const getToken = this.getToken
			const comment = this.getCmt

			if (this.getToken) {
				axios.post('http://localhost:3003/api/comments/create', {
					id,
					getToken,
					comment
				})
					.then(res => {
						this.getDataCmt = res.data
						this.getCmt = ''
					})
					.catch(error => {
						console.log('comments error', error)
					})
			}
		},
		handleDeleteCmt(id, productId) {
			axios.post('http://localhost:3003/api/comments/delete', { id, productId })
			.then(res => {
				this.getDataCmt = res.data
			})
			.catch(error => {
				console.log("errror delete cmt", error)
			})
		}
	},
	mounted() {
		const getToken = localStorage.getItem('tokenLogin')
		const id = this.$route.params.id;
		this.id = id
		this.getToken = jwtDecode(getToken)
		axios.post('http://localhost:3003/api/comments/show', { id })
			.then(res => {
				this.getDataCmt = res.data
			})
			.catch(error => {
				console.log("errror get cmt", error)
			})
		axios.post('http://localhost:3003/api/products/detail', { id })
			.then(res => {
				this.getData = res.data
			})
			.catch(error => {
				console.log('error get detail', error)
			})

	}
}
/* eslint-disable */
</script>

<style scoped>
.wrap_detail {
	background: white;
	width: 80%;
	height: 500px;
}

.price {
	height: 50px;
	width: 100%;
	background: #f1f1f1;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
}

.price span {
	color: #f59421;
	font-size: 30px;
	font-weight: 600;
}
.header_detail {
	height: 40px;
	width: 100%;
	background: white;
	margin-bottom: 10px;
}
.slide_down::-webkit-scrollbar  {
    width: 0.5rem;
    height: 1rem;
}

.slide_down::-webkit-scrollbar-thumb  {
    background-color: rgb(124, 219, 124);
    border-radius: 9999px;
}

</style>