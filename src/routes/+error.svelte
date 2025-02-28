<script lang="ts">
	import { page } from '$app/state';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let mounted = $state(false);
	onMount(() => {
		gsap.fromTo(
			'.reveal',
			{ y: 150, autoAlpha: 0 },
			{ y: 0, autoAlpha: 1, duration: 0.5, ease: 'circ.out' }
		);
		mounted = true;
	});
</script>

<div
	class="relative h-screen w-screen transition-colors delay-500 duration-[2s] {mounted
		? 'bg-red-950'
		: 'bg-[#111827]'}"
>
	<div class="reveal flex h-screen w-screen flex-col items-center justify-center">
		<h1 class="text-9xl font-bold italic">{page.status}</h1>
		<h2 class="w-auto text-center sm:w-1/3">{page.error?.message}</h2>
	</div>
</div>

<style>
	.reveal {
		visibility: hidden;
	}
</style>
