<script lang="ts">
	import { anim_link_no_skew_group_tw } from '$lib/util/linkStyles';
	import { blogMetadataMap } from '$lib/blog/blogs';
	import FlipTitle from '$lib/FlipTitle.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { type BlogMetadata } from '$lib/blog/blogMetadataType';

	const tl = gsap.timeline();

	// unpack map into array, inserting uid into each entry
	const blogMetadataArr = Object.entries(blogMetadataMap).map(([uid, metadata]: [string, any]) => ({
		uid,
		...metadata
	}));

	onMount(() => {
		tl.from(
			'.blog-gsap',
			{
				x: -200,
				autoAlpha: 0,
				stagger: 0.15,
				duration: 0.5,
				ease: 'circ.out'
			},
			'-=25%'
		);
	});
</script>

{#snippet blogMetadataEl(blogMetadata: BlogMetadata & { uid: string })}
	<div class="blog-gsap">
		<a href={`/blog/${blogMetadata.uid}`} class="group child:py-1 block px-2">
			<div class="relative w-fit {anim_link_no_skew_group_tw}">
				<h2 class="text-3xl font-bold sm:text-4xl md:text-5xl">
					{blogMetadata.title}
				</h2>
			</div>
			<p class="text-lg text-blue-300 italic sm:text-xl md:text-2xl">
				{blogMetadata.description}
			</p>
			<p class="text-md text-gray-500 sm:text-lg md:text-xl">
				{new Date(blogMetadata.date).toLocaleDateString(undefined, {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</p>
		</a>
		<hr class="my-5 border-t border-gray-700" />
	</div>
{/snippet}

<svelte:head>
	<title>blog | Richard So</title>
</svelte:head>
<div>
	<div class="pb-10">
		<FlipTitle flip_id="/blog" {tl}>blog</FlipTitle>
		<p class="blog-gsap inline-block pl-5 text-xl text-gray-500 italic sm:text-3xl">
			(me, unhinged)
		</p>
	</div>
	<div class="xl:w-3/4 2xl:w-7/12">
		{#each blogMetadataArr as blogMetadata}
			{@render blogMetadataEl(blogMetadata)}
		{/each}
	</div>
</div>

<style>
	.blog-gsap {
		visibility: hidden;
	}
</style>
