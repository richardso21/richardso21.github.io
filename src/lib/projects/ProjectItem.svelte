<script lang="ts">
	import { optImgs } from './projects';
	import type { ProjectMetaData } from './projects.types';
	import { isMobile } from 'is-mobile';

	let { project }: { project: ProjectMetaData } = $props();

	const { uid, title, date, tech_stack, image_url } = project;

	const href = `/projects/${uid}`;

	const getDateString = (date: Date) =>
		date.toLocaleDateString('default', { month: 'short', year: 'numeric' });

	const group_img_focused =
		'group-hover:blur-[1px] group-hover:brightness-75 group-focus-visible:blur-[1px] group-focus-visible:brightness-75';
	const group_desc_focused = 'group-hover:bottom-0 group-focus-visible:bottom-0';
</script>

<div
	data-flip-id={href}
	class="project-item relative h-[30vh] overflow-hidden rounded-md shadow-2xl"
>
	<a {href} class="group">
		<div
			class="h-full w-full bg-gray-700 transition-all group-focus-visible:scale-95 active:scale-95"
		>
			<enhanced:img
				class="block h-full w-full object-cover transition duration-200 {group_img_focused}"
				src={optImgs[image_url]}
				alt=""
			/>
			<div
				class="absolute left-0 z-10 w-full p-5 backdrop-blur-md backdrop-brightness-75 transition-all duration-200 ease-out {group_desc_focused} {isMobile()
					? 'bottom-0'
					: '-bottom-40'}"
			>
				<h2 class="pb-2 text-2xl font-bold text-white [text-shadow:0_0_5px_black] sm:text-3xl">
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
