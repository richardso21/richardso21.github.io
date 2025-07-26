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
	class="fixed top-0 left-0 z-10 h-screen w-screen transition-colors delay-500 duration-[2s] {mounted
		? 'bg-red-950'
		: 'bg-navy'}"
>
	<div class="reveal flex h-full w-full flex-col items-center justify-center">
		<h1 class="pr-4 text-9xl font-bold italic">{page.status}</h1>
		<h2 class="w-11/12 text-center sm:w-1/3">{page.error?.message}</h2>
	</div>
</div>

<style>
	.reveal {
		visibility: hidden;
	}
</style>
