<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ExperienceList from '$lib/experience/ExperienceList.svelte';
	import FlipTitle from '$lib/util/FlipTitle.svelte';
	import { experiences } from '$lib/experience/experience';

	const tl = gsap.timeline();
	let exp_list_tl = $state<gsap.core.Timeline>(gsap.timeline());

	onMount(() => {
		tl.add(exp_list_tl, '-=20%');
	});
	onDestroy(() => {
		tl.revert();
	});
</script>

<svelte:head>
	<title>experience | Richard So</title>
</svelte:head>

<div>
	<div class="pb-12 sm:pb-16">
		<FlipTitle flip_id="/experience" {tl}>experience</FlipTitle>
	</div>
	<ExperienceList bind:tl={exp_list_tl} {experiences} />
</div>
