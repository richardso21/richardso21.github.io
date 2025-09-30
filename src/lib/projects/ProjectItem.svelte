<script lang="ts">
	import { state } from '$lib/util/state.svelte';
	import { optImgs, preloadRawImage } from './projects';
	import type { ProjectMetaData } from './projects.types';
	import { onMount, onDestroy } from 'svelte';

	let { project }: { project: ProjectMetaData } = $props();

	const { uid, title, date, tech_stack, image_url } = project;

	const href = `/projects/${uid}`;

	const getDateString = (date: Date) =>
		date.toLocaleDateString('default', { month: 'short', year: 'numeric' });

	const group_img_focused =
		'group-hover:blur-[1px] group-hover:brightness-75 group-focus-visible:blur-[1px] group-focus-visible:brightness-75';
	const group_desc_focused = 'group-hover:bottom-0 group-focus-visible:bottom-0';

	// hover preload delay (ms) and timeout handle
	const HOVER_PRELOAD_DELAY = 200;
	let hoverTimeout: number | undefined;

	// we want to preload on a delay to prevent excessive preloading when users
	// are just moving their mouse around
	function startHoverPreload() {
		if (state.isUserMobile) return; // only applies on desktop
		if (hoverTimeout) return; // already scheduled
		hoverTimeout = window.setTimeout(() => {
			preloadRawImage(image_url);
			hoverTimeout = undefined;
		}, HOVER_PRELOAD_DELAY);
	}

	function cancelHoverPreload() {
		if (hoverTimeout) {
			clearTimeout(hoverTimeout);
			hoverTimeout = undefined;
		}
	}

	// anchor reference and IntersectionObserver for mobile preloading
	let anchor: HTMLAnchorElement | null = null;
	let io: IntersectionObserver | undefined;

	function setupIntersectionObserver() {
		// only applicable on mobile
		if (!state.isUserMobile) return;
		if (!anchor) return;

		// if mobile doesn't support io, just don't do anything
		if ('IntersectionObserver' in window) {
			io = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							// start preloading the raw image and stop observing
							preloadRawImage(image_url);
							if (entry.target && io) io.unobserve(entry.target);
						}
					}
				},
				{ rootMargin: '200px' }
			);

			io.observe(anchor);
		}
	}

	onMount(setupIntersectionObserver);

	onDestroy(() => {
		io?.disconnect();
		cancelHoverPreload();
	});
</script>

<div
	data-flip-id={href}
	class="project-item relative h-[30vh] overflow-hidden rounded-md shadow-2xl"
>
	<a
		{href}
		bind:this={anchor}
		class="group"
		onmouseenter={startHoverPreload}
		onmouseleave={cancelHoverPreload}
		onfocusin={() => !state.isUserMobile && preloadRawImage(image_url)}
	>
		<div
			class="h-full w-full bg-gray-700 transition-all group-focus-visible:scale-95 active:scale-95"
		>
			<enhanced:img
				class="block h-full w-full object-cover transition duration-200 {group_img_focused}"
				src={optImgs[image_url]}
				alt=""
				loading="lazy"
				decoding="async"
			/>
			<div
				class="absolute left-0 z-10 w-full p-5 backdrop-blur-md backdrop-brightness-75 transition-all duration-200 ease-out {group_desc_focused} {state.isUserMobile
					? 'bottom-0'
					: '-bottom-40'}"
			>
				<h2 class="pb-2 text-2xl font-bold text-white [text-shadow:0_0_5px_black] sm:text-3xl">
					{title}
				</h2>
				<p class="text-md font-medium text-gray-100 italic sm:text-xl">{tech_stack.join(', ')}</p>
				<span class="text-md absolute right-5 bottom-5 text-gray-200 italic"
					>{getDateString(new Date(date))}</span
				>
			</div>
		</div>
	</a>
</div>

<style>
	.project-item {
		visibility: hidden;
	}
</style>
