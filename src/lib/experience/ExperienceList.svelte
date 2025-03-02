<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ExperienceItem from './ExperienceItem.svelte';
	import type { ExperienceMetaData } from './experience';

	let { experiences }: { experiences: Array<ExperienceMetaData> } = $props();
	let child_tl = Array<ExperienceItem>(experiences.length);

	const tl = gsap.timeline();
	onMount(() => {
		child_tl.forEach((el) => el.state());
	});
</script>

<div class="flex flex-row px-2 sm:px-12">
	<div class="line relative border-l border-gray-500"></div>
	<ol class="">
		{#each experiences as experience, i}
			<ExperienceItem bind:this={child_tl[i]} {experience} />
		{/each}
	</ol>
</div>
