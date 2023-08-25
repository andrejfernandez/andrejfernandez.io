<script lang="ts">
	import Card from '$lib/components/ServiceCard.svelte';

	export let data;
	console.log(data);
</script>

<div class="flex">
	{#each data.services as service, index (index)}
		<Card cardProps={service} delay={index * 200} />
	{/each}
</div>
