<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ExperienceList from '$lib/experience/ExperienceList.svelte';
	import { flipState } from '$lib/FlipState.svelte.js';

	const { data } = $props();
	const { experiences } = data;

	const tl = gsap.timeline();
	let exp_list_tl = $state<gsap.core.Timeline>(gsap.timeline());
	onMount(() => {
		if (!flipState.active) {
			tl.fromTo(
				'.experience-title',
				{ y: 200, autoAlpha: 0 },
				{ y: 0, autoAlpha: 1, duration: 0.5, ease: 'circ.out' }
			);
		} else {
			// don't animate visibility or y position because it's being flipped
			tl.to('.experience-title', { y: 0, autoAlpha: 1, duration: 0 });
			tl.delay(0.5);
		}
		tl.add(exp_list_tl, '-=20%');
	});
</script>

<div>
	<div class="pb-12 sm:pb-16">
		<h1
			data-flip-id="/experience"
			class="experience-title inline-block text-6xl font-bold text-white sm:text-7xl md:text-8xl"
		>
			Experience
		</h1>
	</div>
	<ExperienceList bind:tl={exp_list_tl} {experiences} />
</div>

<style>
	.experience-title {
		visibility: hidden;
	}
</style>
