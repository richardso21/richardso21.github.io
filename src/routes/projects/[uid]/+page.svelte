<script lang="ts">
	const { data } = $props();
	const { project } = data;
	const { title, image_url, uid } = project;

	const href = `/projects/${uid}`;
</script>

<div class="relative w-full">
	<h1 class="flip-title inline-block pb-10 text-6xl font-bold text-white sm:text-7xl md:text-8xl">
		{title}
	</h1>
	<div data-flip-id={href} class="h-auto w-fit overflow-hidden rounded-md">
		<img class="object-cover" src="/projects/{image_url}" alt="" />
	</div>
</div>
