<template>
	<div>
		<AdminNav />
		<AdminHeader />
		<div class='productadmin' style="padding: 10px">
			<div class='' style="padding: 10px">
				<h1>Account</h1>
			</div>
			<div>
				<router-link to='/admin/addAdmin' class='btn btn-primary' style="margin-left: 10px">Add Admin</router-link>
				<!-- <button disabled class='btn btn-primary'>Add Admin</button>  -->
			</div>
			<div style="padding: 10px">
				<table class="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Fullname</th>
							<th scope="col">Username</th>
							<th scope="col">Role</th>
							<th scope="col">Phone</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(value, index) in getData">
							<td>{{ index + 1 }}</td>
							<td>{{ value.fullname }}</td>
							<td>{{ value.username }}</td>
							<td>{{ value.role }}</td>
							<td>{{ value.phone }}</td>
							<td>
								<router-link :to="predix + value._id" class="btn btn-success">Edit</router-link>
								<button class="btn btn-danger" @click="handleDelete(value._id)">Delete</button>
								<!-- <button disabled class="btn btn-danger">Delete</button> -->
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
			getData: [],
			predix: 'edit/'
		}
	},
	components: {
		AdminNav,
		AdminHeader
	},
	methods: {
		handleDelete(id) {
			axios.post('http://localhost:3003/api/admin/delete',  {id} )
			.then(res => {
				if(res.data.message) {
					this.getData = []
				}
			})
			.catch(error => {
				console.log(error)
			})
		}
	},
	mounted() {
		axios.get('http://localhost:3003/api/admin/show')
			.then(res => {
				this.getData = res.data
			})
			.catch(error => {
				console.log(error)
			})
	}
}
</script>