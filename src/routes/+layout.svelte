<script lang="ts">
	import '@fontsource-variable/inconsolata';
	import '../app.css';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import * as THREE from 'three';
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/Flip';
	// @ts-ignore
	import WAVES from 'vanta/dist/vanta.waves.min';

	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Nav from '$lib/Nav.svelte';
	import { flipState } from '$lib/FlipState.svelte';

	gsap.registerPlugin(Flip);

	let { data, children } = $props();

	let mounted = $state(false);

	// init vanta effect
	let vanta_effect: WAVES;
	onMount(() => {
		mounted = true;
		vanta_effect = WAVES({
			el: '#vanta-bg',
			color: 0x060f1f,
			shininess: 7.5,
			THREE: THREE
		});
	});

	beforeNavigate((nav) => {
		// store a flip state from a previously navigated page
		if (!nav.to || !nav.from) return;
		if ([nav.to.route.id, nav.from.route.id].includes('/resume-frame')) return;
		const fromHome = nav.from.route.id === '/';
		const flipId = fromHome ? nav.to.route.id : nav.from.route.id;
		const target = `[data-flip-id='${flipId}']`;
		// set a different duration for the flip depending on the direction of the page transition
		flipState.set(Flip.getState(target), target, fromHome ? 0.4 : 0.7);
	});

	afterNavigate(() => {
		// we need to manually trigger mousemove to update the zoom
		const zoom = data.vanta_zoom();
		vanta_effect.setOptions({ zoom });
		setTimeout(() => {
			vanta_effect.triggerMouseMove();
		}, 100);

		// check if we need to flip anything
		if (flipState.active) {
			const currFlipState = flipState.get();
			Flip.from(currFlipState.currentState as Flip.FlipState, {
				targets: currFlipState.target,
				duration: currFlipState.duration,
				ease: 'circ.inOut',
				scale: true,
				toggleClass: 'pointer-events-none'
			});
			// afterNavigate should be invoked last (after onMounts), so we can assume
			// flip has been completed and we can reset its state
			flipState.reset();
		}
	});
</script>

<div
	id="vanta-bg"
	class={'fixed -z-10 h-screen w-screen transition delay-700 duration-1000 ease-in-out ' +
		(mounted ? 'opacity-100' : 'opacity-0')}
></div>
<div class="transition-container relative overflow-hidden">
	<Nav />
	{#key data.pathname}
		<main
			class="child:py-24 px-8 sm:px-12"
			out:fade={{ duration: 250 }}
			in:fade={{ duration: data.pathname !== '/resume-frame' ? 0 : 250 }}
		>
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
