<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ExperienceItem from './ExperienceItem.svelte';
	import type { ExperienceMetaData } from './experience.types';

	let {
		experiences,
		tl = $bindable()
	}: { experiences: Array<ExperienceMetaData>; tl: gsap.core.Timeline } = $props();
	let child_tl = $state<Array<gsap.core.Timeline>>(Array(experiences.length));

	tl = tl ?? gsap.timeline();
	onMount(() => {
		tl.from('.explist', { autoAlpha: 0, duration: 0.35 });
		child_tl.forEach((el, i) => tl.add(el, i * 0.2));
		tl.from('.line', { height: 0, autoAlpha: 0, duration: 1, ease: 'circ.inOut' }, 0);
	});
	onDestroy(() => {
		tl.revert();
	});
</script>

<div class="explist">
	<div class="flex flex-row pl-3 sm:pl-12">
		<div class="relative">
			<div class="line h-full border-l border-gray-500"></div>
		</div>
		<ol class="max-w-[1500px]">
			{#each experiences as experience, key}
				<ExperienceItem bind:tl={child_tl[key]} {experience} {key} />
			{/each}
		</ol>
	</div>
</div>

<style>
	.explist {
		visibility: hidden;
	}
</style>
