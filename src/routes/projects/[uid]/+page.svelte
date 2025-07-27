<script lang="ts">
	import { flipState } from '$lib/FlipState.svelte.js';
	import { gsap } from 'gsap';
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	const { data } = $props();
	const { project } = data;
	const { title, image_url, uid, details } = project;

	const href = `/projects/${uid}`;

	const tl = gsap.timeline();
	onMount(() => {
		// animate title
		tl.fromTo(
			'.pd-title',
			{ y: 200, autoAlpha: 0 },
			{ y: 0, autoAlpha: 1, duration: 0.5, ease: 'circ.out' }
		);
		// animate details
		tl.fromTo(
			'.pd-details',
			{ x: -100, autoAlpha: 0 },
			{ x: 0, autoAlpha: 1, duration: 0.5, ease: 'circ.out' },
			'-=30%'
		);

		// if we're not flipping, animate the image
		if (!flipState.active) {
			tl.fromTo(
				'.pd-img',
				{ x: 100, autoAlpha: 0 },
				{ x: 0, autoAlpha: 1, duration: 0.5, ease: 'circ.out' },
				'-=100%'
			);
		} else {
			// toggle visibility immediately for flipping to work
			tl.to('.pd-img', { x: 0, autoAlpha: 1, duration: 0 }, 0);
		}
	});
</script>

<div class="relative w-full">
	<h1 class="pd-title inline-block pb-10 text-5xl font-bold text-white sm:text-6xl md:text-7xl">
		{title}
	</h1>
	<div
		class="child:flex-1/2 flex w-full flex-col items-stretch justify-evenly gap-12 lg:flex-row-reverse"
	>
		<div data-flip-id={href} class="pd-img h-fit w-fit overflow-hidden rounded-md bg-gray-700">
			<img class="m-auto object-cover" src="/projects/{image_url}" alt="" />
		</div>
		<div class="pd-details child:pb-8 text-xl text-gray-200 sm:text-2xl lg:text-3xl">
			{@html marked.parse(details)}
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
