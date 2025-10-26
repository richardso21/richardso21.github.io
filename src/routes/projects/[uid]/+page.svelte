<script lang="ts">
	import { flipState } from '$lib/util/state.svelte.js';
	import { rawImgs } from '$lib/projects/projects.js';
	import { gsap } from 'gsap';
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import { SplitText } from 'gsap/all';
	const { data } = $props();
	const { project } = data;
	const { title, image_url, uid, details } = project;

	const href = `/projects/${uid}`;

	const tl = gsap.timeline();
	onMount(() => {
		// animate title
		tl.fromTo('.pd-title', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0, ease: 'circ.out' });
		const splitTitle = new SplitText('.pd-title', {
			type: 'chars',
			smartWrap: true
		});
		tl.fromTo(
			splitTitle.chars,
			{ y: 50, autoAlpha: 0 },
			{
				y: 0,
				autoAlpha: 1,
				stagger: 0.02,
				duration: 0.5,
				ease: 'elastic.out(1, 0.9)'
			},
			0
		);

		// animate details
		tl.fromTo(
			'.pd-details',
			{ x: -100, autoAlpha: 0 },
			{ x: 0, autoAlpha: 1, duration: 0.5, ease: 'circ.out' },
			'>-70%'
		);

		// if we're not flipping, animate the image
		if (!flipState.active) {
			tl.fromTo(
				'.pd-img',
				{ x: 100, autoAlpha: 0 },
				{ x: 0, autoAlpha: 1, duration: 0.5, ease: 'circ.out' },
				'<'
			);
		} else {
			// toggle visibility immediately for flipping to work
			tl.to('.pd-img', { x: 0, autoAlpha: 1, duration: 0 }, 0);
		}
	});
</script>

<svelte:head>
	<title>{title} | Richard So</title>
</svelte:head>

<div class="relative w-full">
	<h1 class="pd-title inline-block pb-10 text-5xl font-bold text-white sm:text-6xl md:text-7xl">
		{title}
	</h1>
	<div
		class="child:flex-1/2 flex w-full flex-col items-stretch justify-evenly gap-12 lg:flex-row-reverse"
	>
		<div
			data-flip-id={href}
			class="pd-img h-fit w-fit overflow-hidden rounded-md bg-gray-700 shadow-2xl"
		>
			<img
				class="m-auto object-cover"
				src={rawImgs[image_url]}
				alt=""
				loading="lazy"
				decoding="async"
			/>
		</div>
		<div class="pd-details child:pb-8 text-xl text-gray-200 sm:text-2xl lg:text-3xl">
			{@html marked.parse(details.trim())}
		</div>
	</div>
</div>

<style>
	.pd-title,
	.pd-img,
	.pd-details {
		visibility: hidden;
	}
</style>
