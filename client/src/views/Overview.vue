<template>
	<div>
		<AdminNav />
		<AdminHeader />
		<div class="productadmin">
			orderview
		</div>
	</div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import AdminHeader from '../components/AdminHeader.vue';
import axios from 'axios'

export default {
	components: {
		AdminNav,
		AdminHeader
	},
}
</script>

<style>
</style>