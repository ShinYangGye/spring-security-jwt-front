<script setup>
import Header from '../components/comm/Header.vue';
import Footer from '../components/comm/Footer.vue';
import MainImg from '../components/comm/MainImg.vue';

</script>

<template>
	<MainImg />

	<div class="album py-5 bg-light">
	<div class="container">

		<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

		<div class="col" v-for="(item, index) in 2" :key="index">
			<div class="card shadow-sm">
			
			<svg class="bd-placeholder-img card-img-top" width="100%" height="225" 
				xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" 
				preserveAspectRatio="xMidYMid slice" focusable="false">
					<title>Placeholder</title>
					<rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
			</svg>

			<div class="card-body">
				<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				<div class="d-flex justify-content-between align-items-center">
				<div class="btn-group">
					<button type="button" class="btn btn-sm btn-outline-secondary">View</button>
					<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
				</div>
				<small class="text-muted">9 mins</small>
				</div>
			</div>
			
			</div>
		</div>

		</div>
	</div>
	</div>

</template>

<style scoped>
@import url("../assets/css/home.css");
</style>