<script lang="ts">
	import type { Service } from '../lib/types';

	export let cardProps: Service;
	export let delay: number;

	// Animation logic
	import { fly, scale, fade, draw } from 'svelte/transition';
	import { onMount } from 'svelte';
	let isVisible = false;
	let animatedElement: Element;
	onMount(() => {
		const observer = new IntersectionObserver(([entry]) => {
			isVisible = entry.isIntersecting;
		});
		observer.observe(animatedElement);
		return () => {
			observer.disconnect();
		};
	}); // End animation logic
</script>

<div bind:this={animatedElement}>
	{#if isVisible}
		<div class="card w-96 shadow-xl mx-5" in:fade={{ duration: 500, delay: delay + 100 }} out:fade>
			<figure>
				<img src={cardProps.image} alt="Shoes" />
			</figure>
			<div class="card-body bg-base-300 h-52">
				<h2 class="card-title">
					{cardProps.title}
				</h2>
				<p>{cardProps.description}</p>
				<div class="card-actions justify-start mt-2">
					{#each cardProps.tags as tag, index (index)}
						<div class="badge">
							<a href={tag.url} target="_blank"> {tag.tagName} </a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
