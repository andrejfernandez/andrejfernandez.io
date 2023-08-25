<script lang="ts">
	import Swap from './NavSwap.svelte';
	import Tabs from './NavTabs.svelte';
</script>

<div class="navbar bg-opacity-60 backdrop-blur-md bg-base-100 fixed flex justify-between z-10">
	<div class="ml-10 flex justify-start">
		<a href="/" class="btn btn-ghost normal-case text-xl font-light">Andre J. Fernandez</a>
	</div>

	<div class="mr-11 flex justify-end">
		<Tabs />
		<Swap />
	</div>
</div>
