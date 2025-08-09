<script lang="ts">
	import FlipTitle from '$lib/FlipTitle.svelte';
	import { gsap } from 'gsap';

	const tl = gsap.timeline();
</script>

<div>
	<div class="pb-10">
		<FlipTitle flip_id="/blog" {tl}>Blog</FlipTitle>
	</div>
	<h2 class="text-3xl font-light italic">Coming soon...</h2>
</div>
