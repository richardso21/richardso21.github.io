<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount, type Snippet } from 'svelte';
	import { flipState } from '$lib/FlipState.svelte';

	let {
		children,
		flip_id,
		tl = $bindable()
	}: { children: Snippet; flip_id: string; tl: gsap.core.Timeline } = $props();

	tl = tl ?? gsap.timeline();
	onMount(() => {
		if (!flipState.active) {
			tl.fromTo(
				'.flip-title',
				{ y: 200, autoAlpha: 0 },
				{ y: 0, autoAlpha: 1, duration: 0.5, ease: 'circ.out' }
			);
		} else {
			// don't animate visibility or y position because it's being flipped
			tl.to('.flip-title', { y: 0, autoAlpha: 1, duration: 0 });
			tl.delay(0.5);
		}
	});
</script>

<h1
	data-flip-id={flip_id}
	class="flip-title inline-block text-6xl font-bold text-white sm:text-7xl md:text-8xl"
>
	{@render children()}
</h1>

<style>
	.flip-title {
		visibility: hidden;
	}
</style>
