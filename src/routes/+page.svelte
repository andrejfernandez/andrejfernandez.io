<script lang="ts">
	import { fly, slide, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="flex flex-col">
		<div class="flex items-center justify-between">
			<h1 class="text-8xl" in:fly={{ delay: 100, duration: 400, y: 100 }} out:fade>Hi,</h1>
			<h1 class="text-8xl ml-4" in:fly={{ delay: 600, duration: 600, x: 100 }} out:fade>
				I'm Andre 👋
			</h1>
		</div>
		<p class="mt-2 ml-4 text-3xl float-left" in:slide={{ delay: 1100, duration: 600 }} out:fade>
			Full-Stack Web Developer
		</p>
	</div>
{/if}
