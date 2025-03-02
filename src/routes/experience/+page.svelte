<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ExperienceList from '$lib/experience/ExperienceList.svelte';

	const { data } = $props();
	const { experiences } = data;

	const tl = gsap.timeline();
	let exp_list_tl = $state<gsap.core.Timeline>(gsap.timeline());
	onMount(() => {
		tl.fromTo(
			'.experience-title',
			{ y: 200, autoAlpha: 0 },
			{ y: 0, autoAlpha: 1, duration: 0.5, ease: 'circ.out' }
		);
		tl.add(exp_list_tl, '-=20%');
	});
</script>

<div>
	<h1 class="experience-title pb-12 text-6xl font-bold text-white sm:pb-16 sm:text-7xl md:text-8xl">
		Experience
	</h1>
	<ExperienceList bind:tl={exp_list_tl} {experiences} />
</div>

<style>
	.experience-title {
		visibility: hidden;
	}
</style>
