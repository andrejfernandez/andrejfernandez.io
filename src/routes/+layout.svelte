<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/nav/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
