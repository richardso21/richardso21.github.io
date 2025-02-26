<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';

	const anim_link_tw =
		'transition ease-out hover:animate-pulse hover:scale-125 hover:skew-x-12 active:text-blue-400 active:scale-110 cursor-pointer';
	const link_container_tw =
		'child:pb-5 child:self-start mb-5 flex flex-col text-2xl italic underline decoration-gray-300 underline-offset-2 sm:text-3xl';

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
		tl.fromTo('.gsap-reveal-first', { ...reveal_before, y: 200 }, reveal_after);
		tl.fromTo('.gsap-reveal', reveal_before, reveal_after, '-=15%');
	});
	onDestroy(() => {
		tl.kill();
	});

	const { data } = $props();
	const { site_links, external_links } = data;
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

<div class="m:px-6 flex h-screen flex-col justify-center px-12">
	<h1 class="gsap-reveal-first text-5xl font-bold text-white sm:text-8xl md:text-9xl">
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
			<div class="gsap-reveal">
				<div class={anim_link_tw}>
					<a href={link.href}>{link.text}</a>
				</div>
			</div>
		{/each}
		<hr class="gsap-reveal mt-2 w-32 border-gray-600 sm:w-48" />
		{#each external_links as link}
			<div class="gsap-reveal">
				<div class={anim_link_tw}>
					<a href={link.href} target="_blank">{link.text}</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.gsap-reveal,
	.gsap-reveal-first {
		visibility: hidden;
	}
</style>
