<script lang="ts">
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import '../app.css';
	import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	let mounted = $state(false);
	onMount(() => {
		// @ts-ignore
		VANTA.WAVES({
			el: '#vanta-bg',
			color: 0x040e1e,
			shininess: 0
		});
		mounted = true;
	});
	let { data, children } = $props();

	onNavigate((e) => {});
</script>

<svelte:head>
	<!-- import cdns for vanta background -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js"></script>
</svelte:head>

<div
	id="vanta-bg"
	class={'fixed -z-10 h-screen w-screen transition delay-700 duration-1000 ease-in-out ' +
		(mounted ? 'opacity-100' : 'opacity-0')}
></div>
<div class="transition-container relative overflow-hidden">
	{#key data.pathname}
		<main class="m:px-6 px-12" transition:fly={{ x: -100, duration: 300, easing: circOut }}>
			{@render children()}
		</main>
	{/key}
</div>

<style>
	/* resolves issue with overlapping elements during transitions */
	.transition-container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}

	.transition-container > * {
		grid-row: 1;
		grid-column: 1;
	}
</style>
