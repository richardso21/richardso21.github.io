<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import FlipTitle from '$lib/FlipTitle.svelte';

	const tl = gsap.timeline();

	onMount(() => {});
	onDestroy(() => {
		tl.kill();
	});
</script>

<div>
	<div class="pb-12 sm:pb-16">
		<FlipTitle flip_id="/projects" {tl}>Projects</FlipTitle>
	</div>
</div>
