<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import FlipTitle from '$lib/FlipTitle.svelte';
	import ProjectList from '$lib/projects/ProjectList.svelte';
	import { projects } from '$lib/projects/projects';
	import type { ProjectMetaData } from '$lib/projects/projects.types';

	// list out all project metadata with their uid
	const projects_arr: Array<ProjectMetaData> = Object.entries(projects).map(([uid, project]) => ({
		uid,
		...project
	}));

	projects_arr.sort((a, b) => {
		// sort by date descending
		return b.date.getTime() - a.date.getTime();
	});

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
	<title>projects | Richard So</title>
</svelte:head>

<div>
	<div class="pb-10">
		<FlipTitle flip_id="/projects" {tl}>projects</FlipTitle>
	</div>
	<ProjectList bind:tl={proj_list_tl} projects={projects_arr} />
</div>
