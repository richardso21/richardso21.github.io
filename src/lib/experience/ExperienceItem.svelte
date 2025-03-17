<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import type { ExperienceMetaData } from './experience';
	import { marked } from 'marked';

	let {
		experience,
		key,
		tl = $bindable()
	}: { experience: ExperienceMetaData; key: number; tl: gsap.core.Timeline } = $props();

	const { details } = experience;
	const experience_details = Array.isArray(details)
		? details.map((el) => `* ${el}`).join('\n')
		: details;

	const getDateString = (date: Date) =>
		date.toLocaleDateString('default', { month: 'long', year: 'numeric' });

	tl = tl ?? gsap.timeline();
	onMount(() => {
		tl.fromTo(
			`.experience-item-${key}`,
			{ y: 100, autoAlpha: 0 },
			{ y: 0, autoAlpha: 1, duration: 0.5, ease: 'circ.out' }
		);
		tl.fromTo(
			`.experience-item-${key}-img`,
			{ x: -100, autoAlpha: 0 },
			{ x: 0, autoAlpha: 1, duration: 0.5, ease: 'circ.out' },
			0
		);
	});

	export const get_tl = () => tl;
</script>

<li class="pb-20 pl-10 sm:pl-20">
	<div
		class="experience-item-{key}-img absolute left-4 h-12 w-12 scale-125 sm:left-14 sm:h-20 sm:w-20"
	>
		<img src="/experience/{experience.icon}" alt={experience.org} />
	</div>
	<div class="experience-item-{key}">
		<div class="text-lg font-light text-gray-400 italic sm:text-xl">
			{#if experience.end !== undefined}
				{getDateString(experience.start)} - {getDateString(experience.end)}
			{:else}
				{getDateString(experience.start)}
			{/if}
		</div>
		<div class="text-3xl font-bold text-white sm:text-5xl">
			{experience.org}
		</div>
		<div class="pt-2 text-2xl text-blue-300 sm:text-4xl">
			{experience.role}
		</div>
		<div
			class="pt-5 text-xl text-gray-300 sm:text-2xl [&_li]:list-disc [&_li]:pb-2 [&_ul]:leading-relaxed"
		>
			{@html marked.parse(experience_details)}
		</div>
	</div>
</li>
