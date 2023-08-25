<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<form action="" class="flex flex-col w-1/2 mx-auto" in:fade={{ duration: 200, delay: 100 }}>
	<h1 class="mb-5 ml-5 text-3xl">Send me a Message ✉️</h1>
	<div class="flex justify-around">
		<div class="form-control w-1/2 mx-5">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Name</span>
			</label>
			<input type="text" class="input input-bordered w-full" />
		</div>
		<div class="form-control w-1/2 mx-5">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Email</span>
			</label>
			<input type="text" class="input input-bordered w-full" />
		</div>
	</div>
	<div class="form-control mx-5">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text">Message</span>
		</label>
		<textarea class="textarea textarea-bordered h-40" />
	</div>
	<button class="btn btn-wide mx-auto mt-10">submit</button>
</form>
