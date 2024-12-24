<script lang="ts">
	import { Motion } from 'svelte-motion';
	import Reveal from '$lib/Reveal.svelte';

	const anim_link_tw =
		'transition ease-out hover:animate-pulse hover:scale-125 hover:skew-x-12 active:text-blue-400 active:scale-110 cursor-pointer';
	const link_container_tw =
		'child:pb-5 child:self-start mb-5 flex flex-col text-2xl italic underline decoration-gray-300 underline-offset-2 sm:text-3xl';
	const delay_stagger = 0.075;
	// by default, assume we're on a desktop
	let innerWidth = $state(641);

	let links: Array<{ href: string; text: string }> = [
		{
			href: 'experience',
			text: 'Experience'
		},
		{
			href: 'projects',
			text: 'Projects'
		},
		{
			href: 'resume',
			text: 'Resume'
		},
		{
			href: 'about',
			text: 'About Me'
		}
	];
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

<svelte:window bind:innerWidth />

<div class="flex h-screen flex-col justify-center">
	<Reveal duration={0.35}>
		<Motion let:motion>
			<h1 use:motion class="text-6xl font-bold text-white sm:text-8xl md:text-9xl">Richard So</h1>
		</Motion>
	</Reveal>
	<Reveal delay={delay_stagger * 3}>
		<h3 class="pt-2 text-lg italic text-gray-400 sm:pt-0 sm:text-xl md:text-2xl">
			SWE, AI/ML, all things code |
			{#if innerWidth < 640}
				<br />
			{/if}
			<a href="https://github.com/richardso21" target="_blank">GitHub</a> |
			<a href="https://www.linkedin.com/in/richardso21/" target="_blank">LinkedIn</a>
		</h3>
	</Reveal>
	<Reveal delay={delay_stagger * 4}>
		<hr class="my-10 w-60 sm:w-96" />
	</Reveal>
	<div class={link_container_tw}>
		{#each links as link, i}
			<Reveal delay={delay_stagger * (i + 5)} className={anim_link_tw} layoutId={link.href}>
				<a href={link.href}>{link.text}</a>
			</Reveal>
		{/each}
	</div>
</div>
