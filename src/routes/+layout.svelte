<script lang="ts">
	import '@fontsource-variable/inconsolata';
	import '../app.css';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import * as THREE from 'three';
	// @ts-ignore
	import WAVES from 'vanta/dist/vanta.waves.min';

	import { afterNavigate } from '$app/navigation';

	let { data, children } = $props();

	let mounted = $state(false);

	let vanta_effect: WAVES;
	onMount(() => {
		mounted = true;
		vanta_effect = WAVES({
			el: '#vanta-bg',
			color: 0x060f1f,
			shininess: 10,
			THREE: THREE
		});
	});

	afterNavigate(() => {
		const zoom = data.vanta_zoom();
		vanta_effect.setOptions({ zoom });
		setTimeout(() => {
			vanta_effect.triggerMouseMove();
		}, 100);
	});
</script>

<div
	id="vanta-bg"
	class={'fixed -z-10 h-screen w-screen transition delay-700 duration-1000 ease-in-out ' +
		(mounted ? 'opacity-100' : 'opacity-0')}
></div>
<div class="transition-container relative overflow-hidden">
	{#key data.pathname}
		<main transition:blur={{ duration: 500 }}>
			{@render children()}
		</main>
	{/key}
</div>

<style>
	:root {
		font-family: 'Inconsolata Variable', monospace;
		font-display: swap;
		color: white;
		background-color: #111827;
	}

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
