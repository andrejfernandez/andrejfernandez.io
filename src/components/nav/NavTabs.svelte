<script lang="ts">
	import { page } from '$app/stores';
	$: route = $page.route.id;
</script>

<div class="tabs mr-10 font-light">
	<a href="/" class="tab tab-bordered" class:tab-active={route === '/'}>Hello</a>
	<a href="/about" class="tab tab-bordered" class:tab-active={route === '/about'}>About</a>
	<a href="/services" class="tab tab-bordered" class:tab-active={route === '/services'}>Services</a>
	<a href="/contact" class="tab tab-bordered" class:tab-active={route === '/contact'}>Contact</a>
</div>
