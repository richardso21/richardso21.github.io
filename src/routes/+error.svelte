<script lang="ts">
	import { page } from '$app/state';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.fromTo(
			'.reveal',
			{ y: 150, autoAlpha: 0 },
			{ y: 0, autoAlpha: 1, duration: 0.5, ease: 'circ.out' }
		);
	});
</script>

<div class="reveal flex h-screen w-screen flex-col items-center justify-center bg-[#111827]">
	<h1 class="text-9xl font-bold italic">{page.status}</h1>
	<h2>{page.error?.message}</h2>
</div>

<style>
	.reveal {
		visibility: hidden;
	}
</style>
