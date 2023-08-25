<script lang="ts">
	import '../app.css';
	import Nav from '../components/nav/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<main>
	<Nav />
	<div class="min-h-screen bg-base-100 flex justify-center items-center">
		<slot />
	</div>
	<Footer />
</main>

<style>
	:root {
		overflow: hidden;
	}
</style>
