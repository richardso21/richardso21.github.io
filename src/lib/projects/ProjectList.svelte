<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import type { ProjectMetaData } from './projects.types';
	import ProjectItem from './ProjectItem.svelte';
	import { flipState } from '$lib/util/state.svelte';

	let { projects, tl = $bindable() }: { projects: Array<ProjectMetaData>; tl: gsap.core.Timeline } =
		$props();

	tl = tl ?? gsap.timeline();

	onMount(() => {
		if (flipState.active) {
			const { target } = flipState.get();
			// if this item is the target of a flip animation, don't do the normal animation
			const el = document.querySelector(`.project-item${target}`);

			if (el) el.classList.remove('project-item');
		}
		tl.from(
			'.project-item',
			{ y: 100, autoAlpha: 0, stagger: 0.1, duration: 0.5, ease: 'circ.out' },
			'-=15%'
		);
	});
	onDestroy(() => {
		tl.revert();
	});
</script>

<div class="grid grid-cols-1 gap-6 py-5 lg:grid-cols-2 xl:grid-cols-3">
	{#each projects as project}
		<ProjectItem {project} />
	{/each}
</div>
