<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { flipState } from '$lib/FlipState.svelte';
	import { anim_link_hero_tw } from '$lib/animLink.js';
	import type { LinkMetaData } from '$lib/link.types.js';

	const { data } = $props();
	const {
		site_links,
		external_links
	}: { site_links: Array<LinkMetaData>; external_links: Array<LinkMetaData> } = data;

	const link_container_tw =
		'child:pb-5 child:self-start mb-5 flex flex-col text-2xl decoration-gray-300 underline-offset-2 sm:text-3xl';

	const reveal_before = {
		y: 100,
		autoAlpha: 0
	};

	const reveal_after = {
		y: 0,
		autoAlpha: 1,
		ease: 'circ.out',
		stagger: 0.05,
		duration: 0.5
	};

	const tl = gsap.timeline();

	onMount(() => {
		if (flipState.active) {
			const { target } = flipState.get();
			// if we're flipping one of the links, remove the gsap-reveal class to allow the flip animation to play
			const el = document.querySelector(`.gsap-reveal ${target}`)?.parentElement?.parentElement;
			if (el) el.classList.remove('gsap-reveal');
		}
		tl.fromTo('.gsap-reveal-first', { ...reveal_before, y: 200 }, reveal_after);
		tl.fromTo('.gsap-reveal', reveal_before, reveal_after, '-=15%');
	});
	onDestroy(() => {
		tl.kill();
	});
</script>

<svelte:head>
	<title>Richard So</title>
	<meta
		name="keywords"
		content="Richard So, SWE, data science, software, ML, machine learning, portfolio, resume"
	/>
	<meta name="description" content="Richard So - SWE/ML Portfolio & Resume" />
	<meta name="og:title" content="Richard So" />
	<meta name="og:description" content="Richard So - SWE/ML Portfolio & Resume" />
	<meta name="og:type" content="profile" />
</svelte:head>

{#snippet hero_link(link: LinkMetaData, new_page: boolean = false)}
	<div class="gsap-reveal">
		<div class={anim_link_hero_tw}>
			<a
				href={link.href}
				data-flip-id={link.href}
				target={new_page ? '_blank' : ''}
				class="inline-block underline"
			>
				{link.text}
			</a>
		</div>
	</div>
{/snippet}

<div class="flex min-h-screen flex-col justify-center py-20">
	<h1 class="gsap-reveal-first text-[16vw] font-bold text-white sm:text-8xl md:text-9xl">
		Richard So
	</h1>
	<h3 class="gsap-reveal pt-2 text-xl text-gray-400 italic sm:pt-0 md:text-2xl">
		AI/ML, Cloud, Full Stack,
		<br class="block sm:hidden" />
		all things code
	</h3>
	<hr class="gsap-reveal my-8 w-60 sm:w-96" />
	<div class={link_container_tw}>
		{#each site_links as link}
			{@render hero_link(link)}
		{/each}
		<hr class="gsap-reveal mt-2 w-32 border-gray-600 sm:w-48" />
		{#each external_links as link}
			{@render hero_link(link, true)}
		{/each}
	</div>
</div>

<style>
	.gsap-reveal,
	.gsap-reveal-first {
		visibility: hidden;
	}
</style>
