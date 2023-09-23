<template>
	<div>
		<AdminNav />
		<AdminHeader />
		<div class="productadmin">
			<div style="padding: 10px">
				<h1>Receipt</h1>
				<div style="color: black; float: right; margin-right: 50px">Receipt Voucher: {{ getData._id }}</div>
				<div style="padding: 10px">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Img</th>
								<th scope="col">Name</th>
								<th scope="col">Quantity</th>
								<th scope="col">Price</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(value, index) in getData.item" :key="index">
								<th scope="col">{{ index + 1 }}</th>
								<td width="130px"><img style="width: 65%" :src="doman + value.product.img" /></td>
								<td width="400px">{{ value.product.name }}</td>
								<td>{{ value.product.quantity }}</td>
								<td>{{ HandlePrice(value.product.price) }}</td>
							</tr>

							<tr style="position: relative; left: 850px">
								<td colSpan='5'><span>Total: </span><span
										style="color: red; font-weight: 600">{{HandlePrice(getData.totalAmout)}}</span></td>
							</tr>

						</tbody>
					</table>
				</div>
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
			id: '',
			getData: [],
			predix: "order/",
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
		}
	},
	components: {
		AdminNav,
		AdminHeader
	},
	mounted() {
		const id = this.$route.params.id
		this.id = id
		axios.post('http://localhost:3003/api/orders/detailorder', { id })
			.then(res => {
				this.getData = res.data
				console.log(this.getData)
			})
			.catch(error => {
				console.log(error)
			})
	}
}
</script>
<style></style>