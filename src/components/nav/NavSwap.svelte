<script lang="ts">
	let swapVal = true;
	$: theme = swapVal ? 'black' : 'lofi';
	$: tip = swapVal ? 'Toggle Light' : 'Toggle Dark';
	$: if (typeof document !== 'undefined') {
		document.documentElement.dataset.theme = theme;
	}
</script>

<div class="tooltip tooltip-bottom mt-2 font-light" data-tip={tip}>
	<label class="swap swap-flip text-3xl">
		<!-- this hidden checkbox controls the state -->
		<input type="checkbox" bind:checked={swapVal} />
		<div class="swap-on">☾</div>
		<div class="swap-off">☀</div>
	</label>
</div>
