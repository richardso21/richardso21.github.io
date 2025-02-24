<script lang="ts">
	// import { Motion } from 'svelte-motion';
	// import Reveal from '$lib/RevealOld.svelte';
	import Reveal from '$lib/Reveal.svelte';

	const DELAY_STAGGER = 0.05;

	const anim_link_tw =
		'transition ease-out hover:animate-pulse hover:scale-125 hover:skew-x-12 active:text-blue-400 active:scale-110 cursor-pointer';
	const link_container_tw =
		'child:pb-5 child:self-start mb-5 flex flex-col text-2xl italic underline decoration-gray-300 underline-offset-2 sm:text-3xl';

	type LinkMetaData = {
		href: string;
		text: string;
	};

	let site_links: Array<LinkMetaData> = [
		{
			href: '/experience',
			text: 'Experience'
		},
		{
			href: '/projects',
			text: 'Projects'
		},
		{
			href: '/resume',
			text: 'Resume'
		}
	];

	let external_links: Array<LinkMetaData> = [
		{
			href: 'https://www.linkedin.com/in/richardso21',
			text: 'LinkedIn'
		},
		{
			href: 'https://github.com/richardso21',
			text: 'GitHub'
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

<div class="flex h-screen flex-col justify-center">
	<!-- <RevealGroup>
		<h1 class="text-6xl font-bold text-white sm:text-8xl md:text-9xl">Richard So</h1>
	</RevealGroup> -->
	<Reveal duration={0.35}>
		<h1 class="text-6xl font-bold text-white sm:text-8xl md:text-9xl">Richard So</h1>
	</Reveal>
	<Reveal delay={DELAY_STAGGER * 3}>
		<h3 class="pt-2 text-xl text-gray-400 italic sm:pt-0 md:text-2xl">
			AI/ML, Cloud, Full Stack, all things code
		</h3>
	</Reveal>
	<Reveal delay={DELAY_STAGGER * 4}>
		<hr class="my-8 w-60 sm:w-96" />
	</Reveal>
	<div class={link_container_tw}>
		{#each site_links as link, i}
			<Reveal delay={DELAY_STAGGER * (i + 5)} className={anim_link_tw}>
				<a href={link.href}>{link.text}</a>
			</Reveal>
		{/each}
		<Reveal delay={DELAY_STAGGER * (5 + site_links.length)}>
			<hr class="mt-2 w-32 border-gray-600 sm:w-48" />
		</Reveal>
		{#each external_links as link, i}
			<Reveal delay={DELAY_STAGGER * (i + 6 + site_links.length)} className={anim_link_tw}>
				<a href={link.href} target="_blank">{link.text}</a>
			</Reveal>
		{/each}
	</div>
</div>
