<template>
	<div>
		<AdminNav />
		<AdminHeader />

		<div class="productadmin" style="height: 700px; overflow: scroll">
			<div class='d-flex' style="justify-content: space-between; padding: 10px">
				<h1>Product</h1>
				<div style="padding-top: 10px">
					<form class="form-inline my-2 my-lg-0 d-flex" @submit.prevent="handleSearch">
						<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="search" />
						<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</div>
			<div>
				<router-link to='/admin/addproduct' class='btn btn-primary' style="margin-left: 10px">Add Product</router-link>
			</div>
			<div style="padding: 10px">
				<table class="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Img</th>
							<th scope="col">NameProduct</th>
							<th scope="col">Description</th>
							<th scope="col">Price</th>
							<th scope="col">Quantity</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(getData, index) in getDatas" :key="index">
							<td>{{ index + 1 }}</td>
							<td><img :src="doman + getData.img" width="100px"/></td>
							<td>{{ getData.name }}</td>
							<td>{{ getData.description }}</td>
							<td>{{ getData.price }}</td>
							<td>{{ getData.quantity }}</td>
							<td>
								<router-link :to="domainEdit + getData._id" class="btn btn-warning">Sửa</router-link>
								<button class="btn btn-danger" @click="handleDelete(getData._id)">Xóa</button>
							</td>
						</tr>
					</tbody>
				</table>
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
			domainEdit: 'products/edit/',
			doman: 'http://localhost:3003/',
			getDatas: [],
			search: ''
		}
	},
	components: {
		AdminNav,
		AdminHeader
	},
	methods: {
		handleDelete(id) {
			axios.post('http://localhost:3003/api/products/delete', {
				id
			})
			.then(res => {
				if(res.data.message) {
					const filterData = this.getDatas.findIndex(getData => getData._id === id)
					if(filterData !== -1) {
						this.getDatas.splice(filterData, 1);
					}
				}
			})
			.catch(error => {
				console.log(error)
			})
		},
		handleSearch() {
			const value = this.search
			axios.post('http://localhost:3003/api/products/search', { value })
			.then(res => {
				this.getDatas = res.data
				console.log(this.getData)
			})
		}
	},
	mounted() {
		axios.get('http://localhost:3003/api/products/show')
			.then(res => {
				this.getDatas = res.data
			})
			.catch(error => {
				console.log(error)
			})
	}
}
</script>