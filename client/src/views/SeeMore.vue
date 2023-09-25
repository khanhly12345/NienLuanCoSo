<template>
	<div>
		<Header />
		<div class="header_detail" style="display: flex; justify-content: center; background: white;">
			<div style="width: 85%; padding-top: 7px; padding-bottom: 7px;">
				<router-link to="/about" style="text-decoration: none; color: green;">Trang chủ /</router-link>
				<span style="font-weight: 300; font-size: 14px; color: rgb(161, 160, 160);">Xem nhiều</span>
			</div>
		</div>
		<div class="container new_product">
			<div class="wrap_product">
				<div class="header_product">
					<h3 style="color: green;">Sản Phẩm Mới</h3>
				</div>
				<div class="filter" style="margin-bottom: 10px;">
					<ul class="ul">
						<li style="margin: 0;"><a href="">Sắp Xếp: </a></li>
						<li><a href="" @click.prevent="sortByNameAZ" :class="{ active: sortBy === 'nameAZ' }">Tên A -> Z</a></li>
						<li><a href="" @click.prevent="sortByNameZA" :class="{ active: sortBy === 'nameZA' }">Tên Z -> A</a></li>
						<li><a href="" @click.prevent="sortByPriceAsc" :class="{ active: sortBy === 'priceAsc' }">Giá tăng dần</a></li>
						<li><a href="" @click.prevent="sortByPriceDesc" :class="{ active: sortBy === 'priceDesc' }">Giá giảm dần</a></li>
					</ul>
				</div>
				<hr style="margin: 0;">
				<div class="row" style="margin-top: 10px;">
					<!-- <div class="col-3" v-for="(value, index) in getData" :key="index">
						<div class="card" style="width: 18rem;">
							<router-link :to="domanDetail + value._id"><img :src="doman + value.img" width="200px"
									height="200px" class="card-img-top" alt="..."></router-link>

							<div class="card-body">
								<span class="title">{{ value.name }}</span>
								<div class="price">{{ HandlePrice(value.price) }}</div>
							</div>
						</div>
					</div> -->
					<div class="col-3   ">
						<div class="card" style="width: 18rem;">
							<router-link to="/detail"><img src="../assets/product2.webp" class="card-img-top"
									alt="..."></router-link>

							<div class="card-body">
								<h3 class="title">Cải muối dưa phơi 1 nắng 2kg</h3>
								<div class="price">75.000₫</div>
							</div>
						</div>
					</div>
					<div class="col-3   ">
						<div class="card" style="width: 18rem;">
							<router-link to="/detail"><img src="../assets/product2.webp" class="card-img-top"
									alt="..."></router-link>

							<div class="card-body">
								<h3 class="title">Cải muối dưa phơi 1 nắng 2kg</h3>
								<div class="price">75.000₫</div>
							</div>
						</div>
					</div>
					<div class="col-3   ">
						<div class="card" style="width: 18rem;">
							<router-link to="/detail"><img src="../assets/product2.webp" class="card-img-top"
									alt="..."></router-link>

							<div class="card-body">
								<h3 class="title">Cải muối dưa phơi 1 nắng 2kg</h3>
								<div class="price">75.000₫</div>
							</div>
						</div>
					</div>
					<div class="col-3   ">
						<div class="card" style="width: 18rem;">
							<router-link to="/detail"><img src="../assets/product2.webp" class="card-img-top"
									alt="..."></router-link>

							<div class="card-body">
								<h3 class="title">Cải muối dưa phơi 1 nắng 2kg</h3>
								<div class="price">75.000₫</div>
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
import axios from 'axios';

export default {
	data() {
		return {
			sortBy: null
		}
	},
	components: {
		Header,
		Footer,
	},
	methods: {
		sortByNameAZ() {
			this.sortBy = 'nameAZ';
			console.log(this.sortBy)
			// Thực hiện các thao tác sắp xếp tên A -> Z ở đây
		},
		sortByNameZA() {
		this.sortBy = 'nameZA';
		// Thực hiện các thao tác sắp xếp tên Z -> A ở đây
		},
		sortByPriceAsc() {
		this.sortBy = 'priceAsc';
		// Thực hiện các thao tác sắp xếp giá tăng dần ở đây
		},
		sortByPriceDesc() {
		this.sortBy = 'priceDesc';
		// Thực hiện các thao tác sắp xếp giá giảm dần ở đây
		}
	}
}
</script>

<style scoped>
.new_product {
    height: 100%;
    width: 100%;
    background: white;
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px;
}

.header_product {
    display: flex;
    justify-content: space-between;
}

.title {
    padding-top: 10px;
    font-size: 14px;
    font-weight: 300;
}

.price {
    font-weight: 600;
    color: #f59421;
}

.card {
    border: none;
	text-align: center;
}

.ul {
	display: flex;
	margin-bottom: 10px;
}

.ul li {
	margin-left: 15px;
}

.ul li > a {
	text-decoration: none;
	color: black;
}
.ul li a:hover {
	color: green;
}

.active {
	color: green !important;
}
</style>