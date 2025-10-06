<script lang="ts">
	import { marked, type Tokens } from 'marked';
	import { onMount } from 'svelte';
	import fm from 'front-matter';
	import { gsap } from 'gsap';
	import { enhanceMarkdownCodeBlocks } from '$lib/blog/codeBlocks.js';
	import { anim_link_tw } from '$lib/util/linkStyles.js';

	const { data } = $props();
	const { blogContent, blogMetadata } = data;

	// customizations to our markdown renderer
	marked.use({
		hooks: {
			// only process the body of the markdown file
			preprocess: (markdown: string) => fm(markdown).body
		},
		renderer: {
			// custom headings with anchor link
			heading(args: Tokens.Heading) {
				const { text, depth } = args;
				const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
				// extra invisible anchor to respect the heading's margin
				return `
				<div class="header-anchor inline-block">
					<a name="${escapedText}"></a>
					<h${depth}>
						<a class="anchor no-underline font-bold" href="#${escapedText}">
							${'#'.repeat(depth)} ${text}
						</a>
					</h${depth}>
				</div>
				`.trim();
			},
			// anchor links open on new pages, with styling
			link(args: Tokens.Link) {
				const { href, text } = args;
				return `
				<span class="${anim_link_tw} inline-block">
					<a href="${href}" target="_blank" rel="noopener" class="inline-block">${text}</a>
				</span>
				`.trim();
			}
		}
	});

	onMount(async () => {
		// animate article blocks into view with a small stagger
		const article = document.querySelector('article');
		const nodes = Array.from(article!.children) as HTMLElement[];
		gsap.set(nodes, { autoAlpha: 0, y: 50 });
		gsap.to(nodes, { autoAlpha: 1, y: 0, stagger: 0.075, duration: 0.5, ease: 'circ.out' });
	});

	// blog styling
	const pre_code_tw = '[&_pre]:p-0 [&_pre]:m-0';
	const prose_tw = 'prose prose-lg md:prose-xl 2xl:prose-2xl max-w-full prose-invert';
	const article_tw = `${prose_tw} ${pre_code_tw}`;
</script>

<svelte:head>
	<title>{blogMetadata.title} | Richard So</title>
	<meta name="description" content={blogMetadata.description} />
	<meta name="date" content={blogMetadata.date.toISOString()} />
</svelte:head>

<div class="relative w-full xl:w-3/4 2xl:mx-auto 2xl:w-7/12">
	<article class={article_tw} use:enhanceMarkdownCodeBlocks>
		<h1 class="not-prose mb-0 py-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
			{blogMetadata.title}
		</h1>
		<p class="not-prose my-0 py-2 text-xl text-blue-300 italic sm:text-2xl md:text-3xl">
			{blogMetadata.description}
		</p>
		<p class="not-prose text-md py-2 text-gray-500 sm:text-lg md:text-xl">
			{new Date(blogMetadata.date).toLocaleDateString(undefined, {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</p>
		<hr class="not-prose mt-5 mb-10 border-t border-gray-700" />
		{@html marked.parse(blogContent, { async: false, gfm: true })}
	</article>
</div>

<style scoped>
	article > :global(*) {
		visibility: hidden;
	}
</style>
