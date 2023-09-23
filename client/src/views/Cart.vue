<template>
	<div>
		<Header />
		<div class="header_detail" style="display: flex; justify-content: center; background: white;">
			<div style="width: 85%; padding-top: 7px; padding-bottom: 7px;">
				<router-link to="/about" style="text-decoration: none; color: green;">Trang chủ /</router-link>
				<span style="font-weight: 300; font-size: 14px; color: rgb(161, 160, 160);">Giỏ Hàng</span>
			</div>
		</div>
		<div class="container" style="margin-top: 50px">
			<div class='row'>
				<div class="wrap_cart col-8">
					<div class='row'
						style="padding: 10px 5px; text-align: center; border-bottom: 1px solid rgb(211 214 227)">
						<div class='col-6'>
							<span style="color: black">CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ</span>
						</div>
						<div class='col-2'>
							<span style="color: black">Đơn giá</span>
						</div>
						<div class='col-2'>
							<span style="color: black">Số lượng</span>
						</div>
						<div class='col-2'>
							<span style="color: black">Thành tiền</span>
						</div>
					</div>
					<div class='row' style="padding: 10px 5px; text-align: center" v-for="(value, index) in getData" :key="index">
						<div class='col-6'>
							<div class='row'>
								<div class='col-4'>
									<img :src="doman + value.img" style="width: 100%" />
								</div>
								<div class='col-8' style="padding-top: 15px">
									<span>{{ value.name }}</span>
									<!-- <span>{{ value }}</span> -->
								</div>
							</div>
						</div>
						<div class='col-2' style="padding-top: 15px">
							<span style="color: black; font-weight: 600 ">{{ HandlePrice(value.price) }}</span>
						</div>
						<div class='col-2' style="padding-top: 15px">
							<div
								style="display: flex; justify-content: space-around; background-color: rgb(211 214 227); height: 40px; border-radius: 5px; width: 100%; margin-top: 10px;">
								<button style="border: none; background-color: rgb(211 214 227)" @click="decrease(index)">-</button>

								<div class='quantity' style="padding-top: 10px; color: black">{{ getQuantity[index] }}</div>

								<button style="border: none; background-color: rgb(211 214 227)" @click="increase(index)">+</button>
							</div>
						</div>
						<div class='col-2' style="padding-top: 15px">
							<span style="color: black; font-weight:  600">{{ HandlePrice(value.price * getQuantity[index]) }}</span>
							<div style="padding-top: 10px">
								<a href=''>Xóa</a>
							</div>
						</div>
					</div>
					<div class='row'>
                        <div class='col-12' style="background-color: rgb(243, 243, 247); padding: 20px 20px; border-radius: 5px">
                            <div style="display: flex; margin-top: 5px">
                                    <img src='../assets/gif.png' style="height: 20px; margin-top: 2px; margin-right: 10px" alt=''/>
                                    <div>
                                        1x Mã giảm thêm 5% tối đa 300.000đ cho toàn bộ sản phẩm Rau Củ
                                    </div>
                            </div>
                            <div style="display: flex; margin-top: 5px">
                                    <img src='../assets/gif.png' style="height: 20px; margin-top: 2px; margin-right: 10px" alt=''/>
                                    <div>
                                        1x Mã giảm thêm 150.000 cho một số Sản phẩm như cải, nấm
                                    </div>
                                </div>
                                <div style="display: flex; margin-top: 5px">
                                    <img src='../assets/gif.png' style="height: 20px; margin-top: 2px; margin-right: 10px" alt=''/>
                                    <div>
                                        1x Balo laptop Targus cho sản phẩm 300.000đ trở lên
                                    </div>
                                </div>
                        </div>
                    </div>
				</div>
				<div class="payment col-4">
                    <div class='wrap_payment'>
                        <div style="padding-top: 10px">
                            <span style="font-size: 20px; color: black; font-weight: 600">Thanh Toán</span>
                        </div>
                        <div class='row' style="padding: 10px">
                            <div class='col-12' style="background-color: rgb(243, 243, 247); padding: 20px 20px; border-radius: 5px">
                                <div style="display: flex; margin-top: 5px">
                                        <img src='../assets/gif.png' style="height: 60px; margin-top: 2px; margin-right: 10px; padding: 5px" alt=''/>
                                        <div>
                                            1x Bộ Voucher Sinh Nhật Phong Vũ (Quà tặng)
                                            <div>
                                                Đơn tối thiểu 10.000.000₫
                                            </div>
                                            <div>
                                                HSD: 31/08/2023
                                            </div>
                                        </div>

                                </div>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding-top: 10px">
                            <span style="color: black">Thành Tiền</span><span style="color: red; font-weight: 600">{{ HandlePrice(total) }}</span>
                        </div>
                        <div class="button_buy" style="margin-top: 10px; cursor: pointer" @click="handleBuy">
                                    <div>Mua Ngay</div>
                                    <div style="font-size: 12px">Bạn cần đăng nhập để tiếp tục</div>
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
import axios from 'axios'
import jwtDecode from 'jwt-decode';

export default {
	name: 'detail',
	data() {
		return {
			getData: [],
			getQuantity: [],
			getIdCart: [],
			total: 0,
			getToken: {},
			statusChekcIn: false,
			doman: 'http://localhost:3003/',
		}
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
		increase(index) {
			const newQuantity = [...this.getQuantity]
			newQuantity[index] = newQuantity[index] + 1
			this.getQuantity = newQuantity

			this.total = this.getData.reduce((init, value, index) => {
				return init  += (parseInt(value.price) * parseInt(this.getQuantity[index]))
			}, 0)

		},
		decrease(index) {
			const newQuantity = [...this.getQuantity]
			if(newQuantity[index] > 1 ) {
				newQuantity[index] = newQuantity[index] - 1
				this.getQuantity = newQuantity

				this.total = this.getData.reduce((init, value, index) => {
					return init  += (parseInt(value.price) * parseInt(this.getQuantity[index]))
				}, 0)
			}
		},
		handleBuy() {
			const getIdCart = this.getIdCart
			const getQuantity = this.getQuantity
			const getToken = this.getToken
			const total = this.total
			if(this.statusChekcIn) {
				console.log('dat hang than cong')
				axios.post('http://localhost:3003/api/orders/create', {
					getIdCart,
					getQuantity,
					getToken,
					total
				 })
					.then(res => {
						if(res.data.message) {
							console.log(" ban da dat hang thanh cong!")
							localStorage.removeItem('cart')
							this.getData = []
						}else{
							console.log("cart: dat hang that bai!")
						}
					})
					.catch(error => {
						console.log(error)
					})
			}else{

			}
		}
	},
	components: {
		Header,
		Nav,
		Footer
	},
	mounted() {
		const storedCartItems = JSON.parse(localStorage.getItem('cart')) || []
		const Token = localStorage.getItem('tokenLogin') || {}
		if(Token) {
			this.getToken = jwtDecode(Token)
			this.statusChekcIn = true
		}

		this.getIdCart = storedCartItems
		axios.post('http://localhost:3003/api/products/showcart', { storedCartItems })
			.then(res => {
				this.getData = res.data
				this.getQuantity = new Array(res.data.length).fill(1)
				this.getData.reduce((index, value) => {
					this.total += value.price
				}, 0)
			})
			.catch(error => {
				console.log(error)
			})
	}
}
/* eslint-disable */
</script>

<style>
.wrap_cart {
	height: 100%;
	background-color: white;
	border-radius: 5px;
	position: relative;
}
.payment {
    height: 350px;
    background-color: white;
    border-radius: 5px;
    position: relative;
    width: 30%;
    left: 20px;
}

.button_buy {
    background-color: blue;
    padding: 5px 20px;
    width: 100%;
    text-align: center;
    color: white;
    font-weight: 400;
    border-radius: 5px;
}
</style>