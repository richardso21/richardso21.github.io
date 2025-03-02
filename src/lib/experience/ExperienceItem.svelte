<script lang="ts">
	import type { ExperienceMetaData } from './experience';

	const { experience }: { experience: ExperienceMetaData } = $props();

	const getDateString = (date: Date) =>
		date.toLocaleDateString('default', { month: 'long', year: 'numeric' });

	export const state = () => {
		console.log('state');
	};
</script>

<li class="pb-20 pl-10 sm:pl-20">
	<div class="absolute left-4 h-12 w-12 scale-125 sm:left-14 sm:h-20 sm:w-20">
		<img src="/experience/{experience.icon}" alt={experience.org} />
	</div>
	<div class="text-lg font-light text-gray-400 italic sm:text-xl">
		{getDateString(experience.start)} - {getDateString(experience.end)}
	</div>
	<div class="text-3xl font-bold text-white sm:text-5xl">
		{experience.org}
	</div>
	<div class="pt-2 text-2xl text-blue-300 sm:text-4xl">
		{experience.role}
	</div>
	<div class="pt-5 text-xl text-gray-300 sm:text-2xl">
		{#if typeof experience.details === 'string'}
			{experience.details}
		{:else}
			<ul class="leading-relaxed">
				{#each experience.details as detail}
					<li class="list-disc pb-2">{detail}</li>
				{/each}
			</ul>
		{/if}
	</div>
</li>
