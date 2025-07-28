<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import FlipTitle from '$lib/FlipTitle.svelte';
	import ProjectList from '$lib/projects/ProjectList.svelte';

	const { data } = $props();
	const { projects } = data;

	const tl = gsap.timeline();
	let proj_list_tl = $state<gsap.core.Timeline>(gsap.timeline());

	onMount(() => {
		tl.add(proj_list_tl, '-=20%');
	});
	onDestroy(() => {
		tl.kill();
	});
</script>

<svelte:head>
	<title>Projects | Richard So</title>
</svelte:head>

<div>
	<div class="pb-10">
		<FlipTitle flip_id="/projects" {tl}>Projects</FlipTitle>
	</div>
	<ProjectList bind:tl={proj_list_tl} {projects} />
</div>
