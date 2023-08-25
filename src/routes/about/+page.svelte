<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="flex items-center justify-center">
	<h1 class="text-9xl my-auto mr-14" in:fade={{ duration: 500, delay: 100 }}>👨‍💻</h1>
	<p class="w-1/2 text-xl" in:fade={{ duration: 500, delay: 300 }}>
		I'm a passionate full-stack web developer with a particular love for modern web technologies. My
		current front-end specialty lies in creating dynamic and user-friendly interfaces using <a
			class="underline"
			href="https://svelte.dev/"
			target="_blank">Svelte</a
		>,
		<a class="underline" href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>, and
		<a class="underline" href="https://astro.build/" target="_blank">Astro</a>, which are
		cutting-edge frameworks for building highly interactive web experiences. My back-end specialty
		delves into the robust and scalable world of cloud computing. Leveraging platforms such as
		<a
			class="underline"
			href="https://azure.microsoft.com/en-us/products/app-service"
			target="_blank">Microsoft Azure</a
		>,
		<a class="underline" href="https://supabase.com/" target="_blank">Supabase</a>, and
		<a class="underline" href="https://www.netlify.com/" target="_blank">Netlify</a>, I design and
		implement flexible solutions that seamlessly adapt to business needs.
	</p>
</div>
