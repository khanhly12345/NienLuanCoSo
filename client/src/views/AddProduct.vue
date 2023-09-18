<template>
	<div>
		<AdminNav />
		<AdminHeader />
		<div class="productadmin" style="padding: 10px;">
			<h1>Add Product</h1>
			<div style="margin-top: 10px">
				<form style="width: 50%" @submit.prevent="handleSubmit">
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Tên Sản Phẩm:</label>
						<input type="text" class="form-control" id="exampleInputEmail1" v-model="name" required/>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Mô Tả: </label>
						<input type="text" class="form-control" id="exampleInputPassword1" v-model="description" required/>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Hình Ảnh</label>
						<input type="file" class="form-control" id="exampleInputPassword1" @change="handleFile" required/>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Giá</label>
						<input type="text" class="form-control" id="exampleInputPassword1" v-model="price" required/>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Số lượng</label>
						<input type="text" class="form-control" id="exampleInputPassword1" v-model="quantity" required/>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
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
			name: '',
			description: '',
			selectedFile: null,
			price: '',
			quantity: ''
		}
	},
	methods: {
		handleFile(e) {
			this.selectedFile = e.target.files[0];
		},
		handleSubmit() {
			// console.log(this.name,this. description, this.selectedFile, this.price, this.quantity)
			const formData = new FormData()
			formData.append('name', this.name)
			formData.append('description', this.description)
			formData.append('price', this.price)
			formData.append('quantity', this.quantity)
			formData.append('file', this.selectedFile);

			axios.post('http://localhost:3003/api/products/create' ,
				formData
			)
			.then(res => {
				if(res.data.message) {
					this.$router.go(-1)
				}
			})
			.catch(error => {
				console.log(error)
			})
		}
	},
	components: {
		AdminNav,
		AdminHeader
	}
}
</script>