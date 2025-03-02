<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ExperienceList from '$lib/experience/ExperienceList.svelte';

	const { data } = $props();
	const { experiences } = data;

	const tl = gsap.timeline();
	onMount(() => {
		console.log('mounted');
	});
</script>

<div>
	<h1 class="pb-12 text-6xl font-bold text-white sm:pb-16 sm:text-7xl md:text-8xl">Experience</h1>
	<ExperienceList {experiences} />
</div>
