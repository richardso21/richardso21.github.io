<script lang="ts">
	import '@fontsource-variable/inconsolata';
	import '../app.css';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
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

	// vercel web analytics + speed insights
	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	gsap.registerPlugin(Flip);

	const { data, children } = $props();

	let usingVanta = $state(false);
	let vantaDestroyTimeoutID = $state<number>(0);
	let vantaEffect: WAVES = $state(undefined);

	const createVantaEffect = () => {
		vantaEffect = WAVES({
			el: '#vanta-bg',
			color: 0x060f1f,
			shininess: 7.5,
			THREE: THREE
		});
	};

	const shouldUseVanta = (): boolean => {
		// Use vanta except for `/resume` or `/blog/*`
		return data.pathname.match(/^(\/resume|\/blog)/) !== null;
	};

	// init vanta effect
	onMount(() => {
		if (shouldUseVanta()) {
			usingVanta = true;
			createVantaEffect();
		}
	});

	beforeNavigate((nav) => {
		// store a flip state from a previously navigated page
		if (!nav.to || !nav.from) return;
		const [to_url, from_url] = [nav.to.url.pathname, nav.from.url.pathname];
		// we don't do flip animations to/from `/resume`
		if ([to_url, from_url].includes('/resume')) return;

		// determine flipId based on direction of navigation
		// (if navigating deeper into the site, use `to_url`, otherwise use `from_url`)
		const nav_to_deeper = to_url.includes(from_url);
		const flip_id = nav_to_deeper ? to_url : from_url;

		const target = `[data-flip-id='${flip_id}']`;

		// set a different duration for the flip depending on the direction of the page transition
		flipState.set(Flip.getState(target), target, nav_to_deeper ? 0.4 : 0.6);
	});

	afterNavigate(() => {
		// we need to manually trigger mousemove to update the zoom
		if (vantaEffect !== undefined) {
			const zoom = data.vanta_zoom();
			vantaEffect.setOptions({ zoom });
			setTimeout(() => {
				vantaEffect.triggerMouseMove();
			}, 100);
		}

		// check if we should destroy the vanta background instance
		if (shouldUseVanta()) {
			// if entering into a page that doesn't show vanta, destroy the instance
			usingVanta = false;
			vantaDestroyTimeoutID = setTimeout(() => {
				vantaEffect.destroy();
				vantaEffect = undefined;
			}, 2000); // we wait for transitions to complete before destroying
		} else if (!usingVanta) {
			usingVanta = true;
			// recreate the effect if it was destroyed, otherwise clear the timeout to destroy it
			vantaEffect === undefined ? createVantaEffect() : clearTimeout(vantaDestroyTimeoutID);
		}

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
		(usingVanta ? 'opacity-100' : 'opacity-0')}
></div>
<div class="transition-container relative overflow-hidden">
	<Nav />
	{#key data.pathname}
		<main
			class="child:py-24 px-[10vw] max-[1921px]:px-12 max-sm:px-6"
			out:fade={{ duration: 150 }}
			in:fade={{ duration: data.pathname === '/resume' ? 250 : 0 }}
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
