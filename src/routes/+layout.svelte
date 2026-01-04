<script lang="ts">
	import '@fontsource-variable/inconsolata';
	import '../app.css';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/all';
	import { Flip } from 'gsap/Flip';
	import { isMobile } from 'is-mobile';

	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Nav from '$lib/layout/Nav.svelte';
	import {
		flipState,
		state as internal_state,
		loadFromLocalStorage,
		saveToLocalStorage
	} from '$lib/util/state.svelte';

	const { data, children } = $props();

	// vercel web analytics + speed insights
	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	// initialize state from local storage and add hooks to save on changes
	loadFromLocalStorage(internal_state);
	$effect(() => {
		saveToLocalStorage(internal_state);
	});

	// register gsap plugins
	gsap.registerPlugin(Flip);
	gsap.registerPlugin(SplitText);

	onMount(() => {
		// check if user is using mobile device (needed for some component styling)
		internal_state.isUserMobile = isMobile();
	});

	beforeNavigate((nav) => {
		// store a flip state from a previously navigated page
		if (!nav.to || !nav.from) return;
		const [to_url, from_url] = [nav.to.url.pathname, nav.from.url.pathname];
		// we don't do flip animations to/from `/resume`
		if ([to_url, from_url].includes('/resume')) return;

		// determine flipId based on direction of navigation
		// (if navigating deeper into the site, use `to_url`, otherwise use `from_url`)
		const nav_deeper = to_url.includes(from_url);
		const flip_id = nav_deeper ? to_url : from_url;

		const target = `[data-flip-id='${flip_id}']`;

		// set a different duration for the flip depending on the direction of the page transition
		flipState.set(Flip.getState(target), target, nav_deeper ? 0.4 : 0.6);
	});

	afterNavigate(() => {
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

<div class="transition-container relative overflow-hidden">
	<Nav />
	{#key data.pathname}
		<main
			class="child:py-24 max-w-[100vw] px-[10vw] max-[1921px]:px-12 max-sm:px-6"
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

	/* only have smooth scroll on wider, larger screens */
	@media screen and (width >= 40rem) {
		:root {
			scroll-behavior: smooth;
		}
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
