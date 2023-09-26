<template>
	<div>
		<Header />
		<div class="header_detail" style="display: flex; justify-content: center; background: white;">
			<div style="width: 85%; padding-top: 7px; padding-bottom: 7px;">
				<router-link to="/about" style="text-decoration: none; color: green;">Trang chủ /</router-link>
				<span style="font-weight: 300; font-size: 14px; color: rgb(161, 160, 160);">Tìm Kiếm</span>
			</div>
		</div>
		<div class="container new_product">
			<div class="wrap_product">
				<div class="header_product">
					<h3 style="color: green;">Kết Quả Tìm Kiểm: ({{ getData.length }} sản phẩm)</h3>
				</div>
				<hr style="margin: 0;">
				<div class="row" style="margin-top: 10px;">
					<div class="col-3" v-for="(value, index) in getData" :key="index">
						<div class="card" style="width: 18rem;">
							<router-link :to="domanDetail + value._id"><img :src="doman + value.img" width="200px"
									height="200px" class="card-img-top" alt="..."></router-link>

							<div class="card-body">
								<span class="title">{{ value.name }}</span>
								<div class="price">{{ HandlePrice(value.price) }}</div>
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
			sortBy: null,
			getData: [],
			doman: 'http://localhost:3003/',
			search: '',
		}
	},
	components: {
		Header,
		Footer,
	},
	watch: {
			'$route.params.value': {
				immediate: true, // Kích hoạt ngay lập tức khi trang được nạp
				handler(newQuery, oldQuery) {
					// Kiểm tra sự thay đổi trong tham số URL
					this.search = this.$route.params.value
					if (newQuery !== oldQuery) {
						// Thực hiện tải lại trang
						this.Search()
					}
				},
			},
	},
	methods: {
		Search() {
			const value = this.search
			axios.post('http://localhost:3003/api/products/search', { value })
			.then(res => {
				this.getData = res.data
				console.log(this.getData)
			})
		},
		HandlePrice(value) {
			const VND = new Intl.NumberFormat('vi-VN', {
				style: 'currency',
				currency: 'VND',
			});
			value = VND.format(value)
			return value
		}
	},
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