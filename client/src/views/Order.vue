<template>
	<div>
		<AdminNav />
		<AdminHeader />
		<div class="productadmin">
			<div style="padding: 10px;">
				<h1>Order</h1>
			</div>
			<div style="padding: 10px">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Phone</th>
                            <th scope="col">City</th>
                            <th scope="col">District</th>
                            <th scope="col">Time</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr v-for="(value, index) in getData" :key="index">
                                <th scope="col">{{ index + 1 }}</th>
                                <td><router-link :to="predix + value._id" style="text-decoration: none;">{{ value.user.username }}</router-link></td>
                                <td>{{ value.user.phone }}</td>
                                <td>{{ value.user.city }}</td>
                                <td>{{ value.user.district }}</td>
                                <td>{{ value.createdAt }}</td>
                                <td><button class='btn btn-danger' @click="handleDelete(value._id)">Delete</button></td>
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
			getData: [],
			predix: "detailorder/",
			id: ''
		}
	},
	components: {
		AdminNav,
		AdminHeader
	},
	methods: {
		handleDelete(id) {
			console.log(id)
			axios.post('http://localhost:3003/api/orders/delete', { id })
			.then(res => {
				const newData = this.getData.filter(value => value._id !== id)
				this.getData = newData
			})
			.catch(error => {
				console.log(error)
			})
		}
	},
	mounted() {
		axios.get('http://localhost:3003/api/orders/show')
			.then(res => {
				this.getData = res.data
			})
			.catch(error => {
				console.log(error)
			})
	}
}
</script>
<style>
</style>