<template>
	<div>
		<Header />
		<div class="header_detail" style="display: flex; justify-content: center; background: white;">
			<div style="width: 85%; padding-top: 7px; padding-bottom: 7px;">
				<router-link to="/about" style="text-decoration: none; color: green;">Trang chủ /</router-link>
				<span style="font-weight: 300; font-size: 14px; color: rgb(161, 160, 160);">Cải muối dưa phơi 1 nắng 2kg</span>
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
					<div class='row' style="padding: 10px 5px; text-align: center">
						<div class='col-6'>
							<div class='row'>
								<div class='col-4'>
									<img src="../assets/product2.webp" style="width: 100%" />
								</div>
								<div class='col-8' style="padding-top: 15px">
									<span>cart.name</span>
									<span>cart.attributes</span>
								</div>
							</div>
						</div>
						<div class='col-2' style="padding-top: 15px">
							<span style="color: black; font-weight: 600 ">75.000đ</span>
						</div>
						<div class='col-2' style="padding-top: 15px">
							<div
								style="display: flex; justify-content: space-around; background-color: rgb(211 214 227); height: 40px; border-radius: 5px; width: 100%; margin-top: 10px;">
								<button style="border: none; background-color: rgb(211 214 227)">-</button>

								<div class='quantity' style="padding-top: 10px; color: black">0</div>

								<button style="border: none; background-color: rgb(211 214 227)">+</button>
							</div>
						</div>
						<div class='col-2' style="padding-top: 15px">
							<span style="color: black; font-weight:  600">75.000đ</span>
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
                            <span style="color: black">Thành Tiền</span><span style="color: red; font-weight: 600">HandlePrice(totalPrice)</span>
                        </div>
                        <div class="button_buy" style="margin-top: 10px; cursor: pointer">
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

export default {
	name: 'detail',
	components: {
		Header,
		Nav,
		Footer
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