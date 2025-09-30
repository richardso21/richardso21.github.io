<script lang="ts">
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import fm from 'front-matter';
	import { gsap } from 'gsap';
	import { enhanceMarkdownCodeBlocks } from '$lib/blog/codeBlocks.js';

	const { data } = $props();
	const { blogContent, blogMetadata } = data;

	const hooks = {
		preprocess(markdown: string) {
			// only process the body of the markdown file
			const { body } = fm(markdown);
			return body;
		}
	};
	marked.use({ hooks });

	onMount(() => {
		const article = document.querySelector('article');

		// animate article blocks into view with a small stagger
		if (article) {
			const nodes = Array.from(article.children) as HTMLElement[];
			gsap.set(nodes, { autoAlpha: 0, y: 50 });
			gsap.to(nodes, { autoAlpha: 1, y: 0, stagger: 0.075, duration: 0.5, ease: 'circ.out' });
		}
	});

	// blog styling
	const h1_tw =
		'prose-h1:text-4xl prose-h1:font-bold prose-h1:text-white prose-h1:sm:text-5xl prose-h1:md:text-6xl prose-h1:py-5';
	const pre_code_tw = '[&_pre]:p-0 [&_pre]:m-0 [&_pre]:rounded-t-none';
	const prose_tw = 'prose prose-lg md:prose-xl 2xl:prose-2xl max-w-full prose-invert';
	const article_tw = `${prose_tw} ${pre_code_tw} ${h1_tw}`;
</script>

<svelte:head>
	<title>{blogMetadata.title} | Richard So</title>
	<meta name="description" content={blogMetadata.description} />
	<meta name="date" content={blogMetadata.date.toISOString()} />
</svelte:head>

<div class="relative w-full xl:w-3/4 2xl:mx-auto 2xl:w-7/12">
	<article class={article_tw} use:enhanceMarkdownCodeBlocks>
		{@html marked.parse(blogContent, { async: false, gfm: true })}
	</article>
</div>

<style scoped>
	article > :global(*) {
		visibility: hidden;
	}
</style>
