<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import * as THREE from 'three';
	// @ts-ignore
	import WAVES from 'vanta/dist/vanta.waves.min';

	let mounted = $state(false);
	onMount(() => {
		WAVES({
			el: '#vanta-bg',
			color: 0x040e1e,
			shininess: 0,
			THREE: THREE
		});
		mounted = true;
	});

	let { data, children } = $props();
</script>

<div
	id="vanta-bg"
	class={'fixed -z-10 h-screen w-screen transition delay-700 duration-1000 ease-in-out ' +
		(mounted ? 'opacity-100' : 'opacity-0')}
></div>
<div class="transition-container relative overflow-hidden">
	{#key data.pathname}
		<main class="m:px-6 px-12" transition:fly={{ x: -100, duration: 200, easing: circOut }}>
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
