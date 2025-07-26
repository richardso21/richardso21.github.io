<script lang="ts">
	import type { ProjectMetaData } from './projects.types';

	let { project }: { project: ProjectMetaData } = $props();

	const { uid, title, date, tech_stack, image_url } = project;

	const href = `/projects/${uid}`;

	const getDateString = (date: Date) =>
		date.toLocaleDateString('default', { month: 'long', year: 'numeric' });
</script>

<div data-flip-id={href} class="project-item relative overflow-hidden rounded-md">
	<a {href}>
		<div class="group bg-navy h-96 w-full transition-all active:scale-95 sm:h-72">
			<img
				class="block h-full w-full object-cover transition duration-200 group-hover:blur-[1px] group-hover:brightness-75"
				src="/projects/{image_url}"
				alt=""
			/>
			<div
				class="absolute bottom-0 left-0 z-10 w-full p-5 backdrop-blur-lg backdrop-brightness-75 transition-all duration-200 ease-out group-hover:bottom-0 sm:-bottom-40"
			>
				<h2
					class="inline pb-5 text-2xl font-bold text-white [text-shadow:0_0_5px_black] sm:text-3xl"
				>
					{title}
				</h2>
				<p class="text-md font-medium text-gray-100 italic sm:text-xl">{tech_stack.join(', ')}</p>
				<span class="text-md absolute right-5 bottom-5 text-gray-200 italic"
					>{getDateString(new Date(date))}</span
				>
			</div>
		</div>
	</a>
</div>

<style>
	.project-item {
		visibility: hidden;
	}
</style>
