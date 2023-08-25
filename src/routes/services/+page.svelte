<script lang="ts">
	import { services } from '../../data/services';
	import Card from '../../components/Card.svelte';
</script>

<div class="flex">
	{#each services as service, index (index)}
		<Card cardProps={service} delay={index * 200} />
	{/each}
</div>
