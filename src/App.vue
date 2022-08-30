<script setup>
import Header from './components/comm/Header.vue';
import Footer from './components/comm/Footer.vue';
</script>

<template>
	<Header />
	<main>
		<router-view />
	</main>
	<Footer />
</template>